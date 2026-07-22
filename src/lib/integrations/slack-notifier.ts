import { ENV } from './env';

export async function sendSlackOperationalAlert(incident: unknown) {
  if (!ENV.SLACK_BOT_TOKEN) {
    console.warn(`[MOCK SLACK] Would send incident ${incident.id} to Slack`);
    return "mock-ts-12345";
  }

  try {
    const res = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${ENV.SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channel: "#incidents",
        text: `🚨 *Deployment Failure:* ${incident.title}\n\n*Summary:* ${incident.rootCauseSummary}\n*Action:* ${incident.recommendedAction}`,
      })
    });

    if (!res.ok) throw new Error("Slack API HTTP Error");
    const data = await res.json();
    if (!data.ok) throw new Error(`Slack API Error: ${data.error}`);
    
    return data.ts; // Return thread timestamp to store in DB
  } catch (error) {
    console.error("Slack notification failed:", error);
    throw error;
  }
}

export async function appendSlackThreadMessage(threadTs: string, message: string) {
  if (!ENV.SLACK_BOT_TOKEN) {
    console.warn(`[MOCK SLACK THREAD] Would append to ${threadTs}: ${message}`);
    return;
  }

  try {
    await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${ENV.SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channel: "#incidents",
        thread_ts: threadTs,
        text: message,
      })
    });
  } catch (error) {
    console.error("Slack thread append failed:", error);
  }
}
