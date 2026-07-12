import { prisma } from "@/lib/prisma";

export type ReleaseMaturityClass = "BASIC" | "GOVERNED" | "CONTROLLED" | "ENTERPRISE" | "RELEASE_CIVILIZATION";

export interface ReleaseIndexResult {
  governanceCompliance: number;
  assuranceQuality: number;
  rollbackReadiness: number;
  maturityClass: ReleaseMaturityClass;
}

export async function calculateReleaseIndex(workspaceId: string): Promise<ReleaseIndexResult> {
  const releasesCount = await prisma.enterpriseRelease.count({
    where: { workspaceId }
  });
  
  let comp = 0;
  let ass = 0;
  let roll = 0;
  let maturity: ReleaseMaturityClass = "BASIC";

  if (releasesCount > 50) {
    comp = 100; ass = 98; roll = 100;
    maturity = "RELEASE_CIVILIZATION";
  } else if (releasesCount > 20) {
    comp = 90; ass = 85; roll = 80;
    maturity = "ENTERPRISE";
  } else if (releasesCount > 5) {
    comp = 70; ass = 60; roll = 50;
    maturity = "CONTROLLED";
  } else if (releasesCount > 0) {
    comp = 50; ass = 30; roll = 20;
    maturity = "GOVERNED";
  }

  return {
    governanceCompliance: comp,
    assuranceQuality: ass,
    rollbackReadiness: roll,
    maturityClass: maturity
  };
}
