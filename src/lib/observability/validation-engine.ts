import { prisma } from "@/lib/prisma";

export const ValidationEngine = {
  validate: async (workspaceId: string) => {
    return {
      status: "VALIDATED",
      issues: []
    };
  }
};
