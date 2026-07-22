import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function registerPolicy(
  workspaceId: string,
  policyType: string,
  policyDefinition: unknown,
  enforcementLevel: 'BLOCKING' | 'AUDIT_ONLY'
) {
  const constitution = await prisma.reliabilityConstitution.findUnique({
    where: { workspaceId }
  });

  if (!constitution) throw new Error('Constitution not initialized');

  const definitionString = JSON.stringify(policyDefinition);
  const hash = crypto.createHash('sha256').update(`${policyType}:${definitionString}:${enforcementLevel}`).digest('hex');

  await prisma.constitutionalPolicy.create({
    data: {
      constitutionId: constitution.id,
      policyType,
      policyDefinition: definitionString,
      enforcementLevel,
      immutableHash: hash
    }
  });
}
