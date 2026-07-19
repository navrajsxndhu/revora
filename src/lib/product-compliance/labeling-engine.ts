import { prisma } from "@/lib/prisma";

export const LabelingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLabelingEngine = async (...args: any[]) => ({});
export const calculateLabelingEngine = async (...args: any[]) => ({});
export const recordLabelingEngineEvents = async (...args: any[]) => ({});
