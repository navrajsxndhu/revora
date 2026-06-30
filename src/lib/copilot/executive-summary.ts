import { buildIncidentContext } from "./context-builder";
import { invokeCopilot } from "./copilot";
import { prisma } from "../prisma";

export async function generateExecutiveBrief(incidentId: string) {
  const context = await buildIncidentContext(incidentId);
  const summary = await invokeCopilot(
    context, 
    "Executive Briefing Generator", 
    "Produce a high-level summary of business impact, resolution time, and key events. No stack traces."
  );

  await prisma.incident.update({
    where: { id: incidentId },
    data: {
      aiSummary: summary,
      aiSummaryGeneratedAt: new Date(),
      summaryVersion: { increment: 1 }
    }
  });

  return summary;
}
