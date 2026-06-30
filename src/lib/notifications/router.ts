import { Incident } from "@prisma/client";
import { shouldSuppressNotification } from "./policies";
import { formatSlackMessage } from "./formatters";

type NotificationChannel = "slack" | "slack_escalation_thread" | "pagerduty_sim";

export function routeIncidentNotification(incident: Incident, recentNotificationsCount: number = 0) {
  const policy = shouldSuppressNotification(incident, recentNotificationsCount);
  if (policy.suppressed) {
    return {
      routed: false,
      reason: policy.reason,
      channels: [] as NotificationChannel[]
    };
  }

  const channels: NotificationChannel[] = ["slack"]; // Base route

  if (incident.severity === "HIGH") {
    channels.push("slack_escalation_thread");
  }

  if (incident.severity === "CRITICAL" && !incident.isSymptom) {
    channels.push("slack_escalation_thread");
    channels.push("pagerduty_sim");
  }

  const payload = formatSlackMessage(incident);

  // In a real system, we'd dispatch to external APIs here.
  // For Revora's demo state, we just log the simulated routing deterministic outputs.
  console.log(`[ROUTER] Dispatching to ${channels.join(', ')}`);
  console.log(`[ROUTER] Payload:\n${payload}`);

  return {
    routed: true,
    channels,
    payload
  };
}
