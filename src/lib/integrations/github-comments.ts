import { prisma } from '../prisma';

const token = process.env.GITHUB_TOKEN;

export interface GithubCommentPayload {
  owner: string;
  repo: string;
  issueNumber: number;
  body: string;
}

export async function postOrUpdateGithubComment(workspaceId: string, payload: GithubCommentPayload) {
  if (!token) {
    console.warn('[GithubComments] No GITHUB_TOKEN configured, skipping real GitHub comment.');
    return null;
  }

  const { owner, repo, issueNumber, body } = payload;
  const baseUrl = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/comments`;

  let deliveryId: string | null = null;

  try {
    const delivery = await prisma.notificationDelivery.create({
      data: {
        workspaceId,
        provider: 'GITHUB',
        status: 'PENDING',
        payload: JSON.stringify(payload),
      }
    });
    deliveryId = delivery.id;

    // 1. Fetch existing comments to see if we should update instead of create
    const listRes = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });
    
    if (!listRes.ok) throw new Error(`GitHub API error: ${listRes.status}`);
    const comments: any[] = await listRes.json();
    
    const existingComment = comments.find(c => c.body.includes('## Revora Operational Review'));

    let finalRes;
    if (existingComment) {
      // Update existing
      finalRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/comments/${existingComment.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body })
      });
    } else {
      // Create new
      finalRes = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body })
      });
    }

    if (!finalRes.ok) throw new Error(`GitHub API error: ${finalRes.status}`);

    await prisma.notificationDelivery.update({
      where: { id: deliveryId },
      data: {
        status: 'DELIVERED',
        deliveredAt: new Date(),
        responseCode: finalRes.status,
      }
    });

    return { success: true };
  } catch (error: any) {
    console.error('[GithubComments] Failed to post comment:', error.message);
    
    if (deliveryId) {
      await prisma.notificationDelivery.update({
        where: { id: deliveryId },
        data: {
          status: 'FAILED',
          retries: { increment: 1 },
        }
      });
    }
    
    return { success: false, error: error.message };
  }
}
