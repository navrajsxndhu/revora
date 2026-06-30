import { ENV } from './env';
import { prisma } from '@/lib/prisma';

export async function fetchCommitDiff(owner: string, repo: string, base: string, head: string) {
  if (!ENV.GITHUB_TOKEN) {
    console.warn(`[MOCK GITHUB] Would fetch diff for ${owner}/${repo} from ${base} to ${head}`);
    // Return a mock diff that fits the schema designed in Phase 62
    return {
      changes: [
        { type: "ENV_CHANGE", file: ".env", details: "simulated token change" },
        { type: "FILE_CHANGE", file: "src/api/auth.ts", details: "added authentication middleware" }
      ]
    };
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/compare/${base}...${head}`, {
      headers: {
        'Authorization': `token ${ENV.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!res.ok) throw new Error(`GitHub API Error: ${res.statusText}`);
    const data = await res.json();
    
    // Parse the raw GitHub response into our concise operational summary
    const changes: any[] = [];
    data.files?.forEach((f: any) => {
      if (f.filename === 'package.json') {
        changes.push({ type: "DEPENDENCY_CHANGE", file: f.filename, details: "package versions modified" });
      } else if (f.filename.includes('.env')) {
        changes.push({ type: "ENV_CHANGE", file: f.filename, details: "environment variables modified" });
      } else {
        changes.push({ type: "FILE_CHANGE", file: f.filename, details: `${f.additions} additions, ${f.deletions} deletions` });
      }
    });

    return { changes: changes.slice(0, 10) }; // Keep concise
  } catch (err: any) {
    console.error("Failed to fetch real GitHub diff:", err);
    // Harden: Log integration failure
    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId: "system",
        eventType: "INTEGRATION_FAILURE",
        status: "ERROR",
        message: `GitHub API timeout or failure: ${err.message}`
      }
    });
    return { changes: [] };
  }
}
