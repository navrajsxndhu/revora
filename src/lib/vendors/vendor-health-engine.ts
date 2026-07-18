import { prisma } from "@/lib/prisma";

export const VendorHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
