import { prisma } from "@/lib/prisma";

export const PipelineEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPipelineEngine = async (...args: any[]) => ({});
export const calculatePipelineEngine = async (...args: any[]) => ({});
export const recordPipelineEngineEvents = async (...args: any[]) => ({});
