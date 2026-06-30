import { prisma } from "../prisma";
import { invokeCopilot } from "./copilot";

export async function generatePirEnrichment(pirId: string) {
  const pir = await prisma.postIncidentReview.findUnique({
    where: { id: pirId }
  });

  if (!pir) throw new Error("PIR not found");

  const context = JSON.stringify({
    title: pir.title,
    summary: pir.summary,
    rootCause: pir.rootCause,
    impact: pir.impact,
    preventativeActions: pir.preventativeActions
  }, null, 2);

  const summary = await invokeCopilot(
    context, 
    "PIR Intelligence Layer", 
    "Convert the raw PIR data into a concise organizational learning summary for executives."
  );

  await prisma.postIncidentReview.update({
    where: { id: pirId },
    data: {
      aiSummary: summary,
      aiSummaryGeneratedAt: new Date(),
      summaryVersion: { increment: 1 }
    }
  });

  return summary;
}
