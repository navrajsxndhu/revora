import { prisma } from "@/lib/prisma";
import { SignalDef } from "./operational-signals";
import { CorrelationDef } from "./intelligence-correlation";

export async function recordIntelligenceSnapshot(
  workspaceId: string,
  intelligenceScore: number,
  organizationalHealth: number,
  intelligenceClass: string,
  signals: SignalDef[],
  correlations: CorrelationDef[]
) {
  return await prisma.operationalIntelligenceSnapshot.create({
    data: {
      workspaceId,
      intelligenceScore,
      organizationalHealth,
      intelligenceClass,
      signals: {
        create: signals.map(s => ({
          signalName: s.signalName,
          signalValue: s.signalValue,
          signalCategory: s.signalCategory
        }))
      },
      correlations: {
        create: correlations.map(c => ({
          sourceSubsystem: c.sourceSubsystem,
          targetSubsystem: c.targetSubsystem,
          correlationReason: c.correlationReason,
          evidenceReference: c.evidenceReference
        }))
      }
    },
    include: {
      signals: true,
      correlations: true
    }
  });
}

export async function getIntelligenceLedger(workspaceId: string) {
  return await prisma.operationalIntelligenceSnapshot.findMany({
    where: { workspaceId },
    include: {
      signals: true,
      correlations: true
    },
    orderBy: { createdAt: 'desc' }
  });
}
