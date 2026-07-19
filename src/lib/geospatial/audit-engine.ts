import { prisma } from "@/lib/prisma";

export const AuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAuditEngine = async (...args: any[]) => ({});
export const calculateAuditEngine = async (...args: any[]) => ({});
export const validateAuditEngine = async (...args: any[]) => ({});
