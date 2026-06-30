import { GateResult } from "./release-gates";

export type PRCommentContext = {
  riskLevel: string;
  gateResult: GateResult;
  rolloutStrategy: string;
  historicalContext?: {
    occurrences: number;
    avgRecoveryTime: number;
  };
};

export function generatePRComment(context: PRCommentContext): string {
  let header = "## Revora Operational Review\n\n";

  if (context.gateResult.decision === "BLOCK") {
    header += "❌ **Status: BLOCKED**\n*This release exceeds operational safety thresholds.*\n\n";
  } else if (context.gateResult.decision === "WARN") {
    header += "⚠️ **Status: WARNING**\n*This release contains elevated operational risk.*\n\n";
  } else {
    header += "✅ **Status: PASSED**\n*This release is operationally safe.*\n\n";
  }

  let body = `**Risk Level:** ${context.riskLevel}\n\n`;
  body += `**Reasoning:**\n`;
  context.gateResult.reasoning.forEach(r => {
    body += `- ${r}\n`;
  });

  body += `\n**Recommended Rollout:**\n`;
  body += `- ${context.rolloutStrategy}\n`;

  if (context.historicalContext && context.historicalContext.occurrences > 0) {
    body += `\n**Historical Context:**\n`;
    body += `- Similar deployment failures on record: ${context.historicalContext.occurrences}\n`;
    body += `- Average recovery time: ${context.historicalContext.avgRecoveryTime} minutes\n`;
  }

  if (context.gateResult.decision === "BLOCK") {
    body += `\n**Suggested Actions:**\n`;
    body += `- Deploy behind a feature flag\n`;
    body += `- Use a canary rollout\n`;
    body += `- Verify database connection pool sizing and timeout configs\n`;
  }

  return header + body;
}
