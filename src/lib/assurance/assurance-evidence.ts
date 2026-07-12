import { prisma } from "@/lib/prisma";

export async function collectAssuranceEvidence(verificationId: string, evidenceType: string, sourceReference: string, evidenceWeight: number) {
  return await prisma.assuranceEvidence.create({
    data: {
      verificationId,
      evidenceType,
      sourceReference,
      evidenceWeight
    }
  });
}

export async function getAssuranceEvidenceChain(verificationId: string) {
  return await prisma.assuranceEvidence.findMany({
    where: { verificationId },
    orderBy: { createdAt: 'asc' }
  });
}
