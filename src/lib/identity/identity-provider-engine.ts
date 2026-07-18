import { prisma } from "@/lib/prisma";

export const IdentityProviderEngine = {
  getProviders: async (workspaceId: string) => {
    return prisma.identityProvider.findMany({
      where: { workspaceId }
    });
  }
};
