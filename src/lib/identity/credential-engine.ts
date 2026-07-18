import { prisma } from "@/lib/prisma";

export const CredentialEngine = {
  getCredentials: async (workspaceId: string) => {
    return prisma.apiCredential.findMany({
      where: { workspaceId }
    });
  }
};
