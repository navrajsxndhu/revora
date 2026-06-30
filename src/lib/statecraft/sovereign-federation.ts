import { prisma } from '@/lib/prisma';

export async function getFederationStatus(federationId: string) {
  const federation = await prisma.sovereignFederation.findUnique({
    where: { id: federationId }
  });

  if (!federation) throw new Error('Federation not found');

  return federation;
}
