import { prisma } from "@/lib/prisma";

export const JurisdictionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getJurisdictionEngine = async (...args: any[]) => ({});
export const calculateJurisdictionEngine = async (...args: any[]) => ({});
export const recordJurisdictionEngineEvents = async (...args: any[]) => ({});
