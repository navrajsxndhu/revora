import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export class SearchRepository {
  static async getQueries(workspaceId: string) {
    return prisma.workspaceSearchQuery.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getCollections(workspaceId: string) {
    return prisma.workspaceSearchCollection.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getAnalytics(workspaceId: string) {
    return prisma.workspaceSearchAnalytics.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getContexts(workspaceId: string) {
    return prisma.workspaceSearchContext.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getEvidence(workspaceId: string) {
    return prisma.workspaceSearchEvidence.findMany({ where: { workspaceId }, orderBy: { time: 'desc' } });
  }
  static async getExplorer(workspaceId: string) {
    return prisma.workspaceSearchExplorer.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getGovernance(workspaceId: string) {
    return prisma.workspaceSearchGovernance.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getRecommendations(workspaceId: string) {
    return prisma.workspaceSearchRecommendation.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
}
