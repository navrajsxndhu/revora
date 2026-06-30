import { prisma } from "../prisma";

export async function buildIncidentTimeline(incidentId: string): Promise<string> {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId }
  });

  if (!incident) return "";

  const events = await prisma.incidentEvent.findMany({
    where: { incidentId },
    orderBy: { createdAt: 'asc' }
  });

  let markdown = `### Incident Timeline\n\n`;

  // Base creation event
  markdown += `${formatTime(incident.createdAt)} — Incident created: ${incident.title}\n`;

  for (const event of events) {
    const timeStr = formatTime(event.createdAt);
    const actorStr = event.actor ? ` by ${event.actor}` : '';
    
    switch (event.eventType) {
      case 'ESCALATION':
        markdown += `${timeStr} — Escalated to ${event.payload}${actorStr}.\n`;
        break;
      case 'ASSIGNMENT':
        markdown += `${timeStr} — Assigned to ${event.payload}.\n`;
        break;
      case 'COMMANDER_CHANGE':
        markdown += `${timeStr} — Incident Commander set to ${event.payload}.\n`;
        break;
      case 'RECOVERY':
        markdown += `${timeStr} — Recovery action executed: ${event.payload}${actorStr}.\n`;
        break;
      case 'STATE_TRANSITION':
        markdown += `${timeStr} — State changed to ${event.payload}${actorStr}.\n`;
        break;
      case 'RESOLUTION':
        markdown += `${timeStr} — Incident resolved${actorStr}.\n`;
        break;
      default:
        markdown += `${timeStr} — ${event.eventType} event recorded.\n`;
    }
  }

  // Fallback if incident is resolved but lacks resolution event due to legacy data
  if ((incident as any).resolvedAt && !events.some(e => e.eventType === 'RESOLUTION')) {
    markdown += `${formatTime((incident as any).resolvedAt)} — Incident resolved (Legacy Record).\n`;
  }

  return markdown;
}

function formatTime(date: Date): string {
  return date.toISOString().split('T')[1].substring(0, 8) + ' UTC';
}
