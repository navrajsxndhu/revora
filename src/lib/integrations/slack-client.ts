import { WebClient } from '@slack/web-api';
import { prisma } from '../prisma';

const token = process.env.SLACK_BOT_TOKEN;
const defaultChannel = process.env.SLACK_CHANNEL || '#incidents';
const slack = new WebClient(token);

export interface SlackMessagePayload {
  text: string;
  blocks?: any[];
  threadTs?: string;
  channel?: string;
}

export async function sendSlackMessage(workspaceId: string, payload: SlackMessagePayload) {
  if (!token) {
    console.warn('[SlackClient] No SLACK_BOT_TOKEN configured, skipping real Slack delivery.');
    return null;
  }

  const channel = payload.channel || defaultChannel;

  let deliveryId: string | null = null;
  
  try {
    const delivery = await prisma.notificationDelivery.create({
      data: {
        workspaceId,
        provider: 'SLACK',
        status: 'PENDING',
        payload: JSON.stringify(payload),
      }
    });
    deliveryId = delivery.id;

    const result = await slack.chat.postMessage({
      channel,
      text: payload.text,
      blocks: payload.blocks,
      thread_ts: payload.threadTs,
    });

    await prisma.notificationDelivery.update({
      where: { id: deliveryId },
      data: {
        status: 'DELIVERED',
        deliveredAt: new Date(),
        responseCode: 200,
      }
    });

    return { success: true, threadTs: result.ts };
  } catch (error: any) {
    console.error('[SlackClient] Failed to send message:', error.message);
    
    if (deliveryId) {
      await prisma.notificationDelivery.update({
        where: { id: deliveryId },
        data: {
          status: 'FAILED',
          retries: { increment: 1 },
          responseCode: error.data?.response_metadata?.statusCode || 500
        }
      });
    }
    
    return { success: false, error: error.message };
  }
}
