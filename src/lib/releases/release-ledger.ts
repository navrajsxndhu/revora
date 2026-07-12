import { prisma } from "@/lib/prisma";

export async function getReleaseLedger(workspaceId: string) {
  return await prisma.enterpriseRelease.findMany({
    where: { workspaceId },
    include: {
      approvals: true,
      checkpoints: true,
      evidence: true
    },
    orderBy: { createdAt: 'desc' },
    take: 50
  });
}

export async function recordReleaseEvidence(releaseId: string, type: string, refId: string, hash: string) {
  return await prisma.releaseEvidence.create({
    data: {
      releaseId,
      evidenceType: type,
      referenceId: refId,
      validationHash: hash
    }
  });
}
