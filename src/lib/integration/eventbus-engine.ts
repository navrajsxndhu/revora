import { prisma } from "@/lib/prisma";

export const EventbusEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateEventbusEngine = async (...args: any[]) => ({});
export const governEventbusEngine = async (...args: any[]) => ({});
export const verifyEventbusEngine = async (...args: any[]) => ({});
