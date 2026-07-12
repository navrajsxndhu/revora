import { prisma } from "@/lib/prisma";

export interface QuarantineResult {
  activeQuarantines: number;
  containmentStatus: "CONTAINED" | "LEAKING" | "BREACHED" | "SECURE";
  restrictionLevel: string;
  evidence: string[];
}

export async function enforceSurvivabilityQuarantine(workspaceId: string, federationId?: string): Promise<QuarantineResult> {
  const evidence: string[] = [];

  let activeQuarantines = 0;
  let containmentStatus: "CONTAINED" | "LEAKING" | "BREACHED" | "SECURE" = "SECURE";
  let restrictionLevel = "NONE";

  if (federationId) {
    const zones = await prisma.survivabilityQuarantineZone.findMany({
      where: { federationId }
    });

    activeQuarantines = zones.length;

    if (activeQuarantines > 0) {
      const activeLeaks = zones.filter(z => z.containmentStatus === "LEAKING");
      const breaches = zones.filter(z => z.containmentStatus === "BREACHED");
      
      if (breaches.length > 0) {
        containmentStatus = "BREACHED";
        restrictionLevel = "MAXIMUM_RESTRICTION";
        evidence.push(`${breaches.length} quarantine zones have been breached. Civilization continuity is at immediate risk.`);
      } else if (activeLeaks.length > 0) {
        containmentStatus = "LEAKING";
        restrictionLevel = "ELEVATED_RESTRICTION";
        evidence.push(`${activeLeaks.length} quarantine zones are leaking operational instability.`);
      } else {
        containmentStatus = "CONTAINED";
        restrictionLevel = "STANDARD_QUARANTINE";
        evidence.push("Pathogens successfully contained within active survivability quarantine zones.");
      }
    } else {
      evidence.push("No active quarantine zones. Federation survivability remains secure.");
    }
  } else {
    evidence.push("No federation context provided. Quarantine enforcement bypassed.");
  }

  return {
    activeQuarantines,
    containmentStatus,
    restrictionLevel,
    evidence
  };
}
