import { prisma } from "@/lib/prisma";

export const CertificateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
