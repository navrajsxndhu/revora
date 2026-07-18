import { prisma } from "@/lib/prisma";

export const PlanningGovernanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPlanningGovernanceEngine = async (...args: any[]) => ({});
export const calculatePlanningGovernanceEngine = async (...args: any[]) => ({});
export const recordPlanningGovernanceEngineEvents = async (...args: any[]) => ({});
