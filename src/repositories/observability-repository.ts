import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export class ObservabilityRepository {
  static async getTelemetry(workspaceId: string) {
    return prisma.workspaceObservabilityTelemetry.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getServices(workspaceId: string) {
    return prisma.workspaceObservabilityService.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getIncidents(workspaceId: string) {
    return prisma.workspaceObservabilityIncident.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getReliability(workspaceId: string) {
    return prisma.workspaceObservabilityReliability.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getCapacity(workspaceId: string) {
    return prisma.workspaceObservabilityCapacity.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getDependencies(workspaceId: string) {
    return prisma.workspaceObservabilityDependency.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getAnalytics(workspaceId: string) {
    return prisma.workspaceObservabilityAnalytics.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getResilience(workspaceId: string) {
    return prisma.workspaceObservabilityResilience.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getGovernance(workspaceId: string) {
    return prisma.workspaceObservabilityGovernance.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
  static async getEvidence(workspaceId: string) {
    return prisma.workspaceObservabilityEvidence.findMany({ where: { workspaceId }, orderBy: { time: 'desc' } });
  }
}
