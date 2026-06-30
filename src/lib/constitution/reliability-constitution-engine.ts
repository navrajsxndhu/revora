import { prisma } from '@/lib/prisma';
import { validateGovernanceLegality } from './governance-validator';
import { detectConstitutionalBreaches } from './breach-detection';

export async function orchestrateConstitution(workspaceId: string) {
  // 1. Ensure constitution exists
  let constitution = await prisma.reliabilityConstitution.findUnique({
    where: { workspaceId }
  });

  if (!constitution) {
    constitution = await prisma.reliabilityConstitution.create({
      data: { workspaceId }
    });
  }

  // 2. Validate current operational state against law
  await validateGovernanceLegality(workspaceId);

  // 3. Detect any active breaches
  await detectConstitutionalBreaches(workspaceId);

  return constitution;
}
