import { prisma } from "@/lib/prisma";

export const FileTransferEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
