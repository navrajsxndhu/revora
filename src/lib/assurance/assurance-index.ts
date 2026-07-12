import { prisma } from "@/lib/prisma";

export type AssuranceClass = "VERIFIED" | "CONTROLLED" | "ASSURED" | "INSTITUTIONAL" | "OPERATIONAL_ASSURANCE_CIVILIZATION";

export interface AssuranceIndexResult {
  assuranceScore: number;
  assuranceClass: AssuranceClass;
  verificationMaturity: string;
}

export async function calculateAssuranceIndex(workspaceId: string): Promise<AssuranceIndexResult> {
  const totalVerifications = await prisma.assuranceVerification.count({
    where: { execution: { workspaceId } }
  });

  let score = 0;

  if (totalVerifications > 50) {
    score = 96;
  } else if (totalVerifications > 10) {
    score = 82;
  } else if (totalVerifications > 0) {
    score = 55;
  } else {
    score = 15;
  }

  let assuranceClass: AssuranceClass = "VERIFIED";
  let maturity = "UNDEFINED";

  if (score >= 90) {
    assuranceClass = "OPERATIONAL_ASSURANCE_CIVILIZATION";
    maturity = "MATHEMATICALLY_PROVEN";
  } else if (score >= 75) {
    assuranceClass = "INSTITUTIONAL";
    maturity = "DETERMINISTIC_VERIFICATION";
  } else if (score >= 50) {
    assuranceClass = "ASSURED";
    maturity = "PARTIALLY_VERIFIED";
  } else if (score >= 25) {
    assuranceClass = "CONTROLLED";
    maturity = "MANUAL_VERIFICATION";
  } else {
    assuranceClass = "VERIFIED";
    maturity = "AD_HOC";
  }

  return {
    assuranceScore: score,
    assuranceClass,
    verificationMaturity: maturity
  };
}
