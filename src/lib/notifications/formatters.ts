import { Incident } from "@prisma/client";

export function formatSlackMessage(incident: Incident): string {
  const emoji = getSeverityEmoji(incident.severity);
  
  let msg = `${emoji} *[${incident.state}] ${incident.title}*\n`;
  msg += `*Service:* ${incident.serviceAffected || 'System'}\n`;
  
  if (incident.incidentCommander) {
    msg += `*Commander:* @${incident.incidentCommander}\n`;
  }

  if (incident.isSymptom && incident.probableRootService) {
    msg += `\n*Note:* This appears to be a downstream symptom of an outage in \`${incident.probableRootService}\`.\n`;
  } else if (incident.probableFailurePoint) {
    msg += `\n*Context:* Diagnosed as a \`${incident.probableFailurePoint}\` failure. `;
    if (incident.deploymentRiskLevel === "HIGH") {
      msg += `A recent high-risk deployment is suspected.\n`;
    } else {
      msg += `\n`;
    }
  }

  if (incident.recommendedAction) {
    msg += `\n*Recommendation:* ${incident.recommendedAction}\n`;
  }

  msg += `\n<https://revora.internal/mission-control/incidents/${incident.id}|View in Mission Control>`;
  
  return msg;
}

function getSeverityEmoji(severity: string) {
  switch(severity) {
    case 'CRITICAL': return '🚨';
    case 'HIGH': return '🔴';
    case 'MEDIUM': return '🟠';
    case 'LOW': return '🟡';
    default: return '🔵';
  }
}
