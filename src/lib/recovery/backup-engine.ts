import { prisma } from "@/lib/prisma";

export const BackupEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBackupEngine = async (...args: any[]) => ({});
export const calculateBackupEngine = async (...args: any[]) => ({});
export const recordBackupEngineEvents = async (...args: any[]) => ({});
