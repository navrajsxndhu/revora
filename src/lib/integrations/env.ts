export const ENV = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || null,
  VERCEL_TOKEN: process.env.VERCEL_TOKEN || null,
  VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID || null,
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN || null,
};

export function getIntegrationHealth() {
  return {
    github: { connected: !!ENV.GITHUB_TOKEN },
    vercel: { connected: !!(ENV.VERCEL_TOKEN && ENV.VERCEL_PROJECT_ID) },
    slack: { connected: !!ENV.SLACK_BOT_TOKEN },
  };
}
