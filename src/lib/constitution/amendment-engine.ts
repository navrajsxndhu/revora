import { prisma } from '@/lib/prisma';
import { simulateConstitutionalAmendment } from './constitution-simulator';

export async function proposeAmendment(workspaceId: string, title: string, proposedChange: unknown) {
  const constitution = await prisma.reliabilityConstitution.findUnique({ where: { workspaceId } });
  if (!constitution) throw new Error('Constitution missing');

  const simulationOutcome = await simulateConstitutionalAmendment(workspaceId, proposedChange);
  
  const status = simulationOutcome.riskScore > 80 ? 'REJECTED' : 'PENDING_SIMULATION';

  return prisma.constitutionalAmendment.create({
    data: {
      constitutionId: constitution.id,
      amendmentTitle: title,
      proposedChange: JSON.stringify(proposedChange),
      simulationOutcome: JSON.stringify(simulationOutcome),
      approvalStatus: status
    }
  });
}
