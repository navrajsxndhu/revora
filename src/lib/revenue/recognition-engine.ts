import { prisma } from "@/lib/prisma";

export const RecognitionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRecognitionEngine = async (...args: any[]) => ({});
export const calculateRecognitionEngine = async (...args: any[]) => ({});
export const recordRecognitionEngineEvents = async (...args: any[]) => ({});
