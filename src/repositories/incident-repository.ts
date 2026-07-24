import { prisma } from '@/lib/prisma';
import { Prisma, Incident } from '@prisma/client';

export class IncidentRepository {
  static async findRecentIncidents(workspaceId: string, limit: number = 5): Promise<Incident[]> {
    return prisma.incident.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async findActiveIncidents(workspaceId: string): Promise<Incident[]> {
    return prisma.incident.findMany({
      where: { 
        workspaceId,
        state: { notIn: ['RESOLVED'] }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getIncident(id: string): Promise<Incident | null> {
    return prisma.incident.findUnique({
      where: { id }
    });
  }

  static async create(data: Prisma.IncidentUncheckedCreateInput): Promise<Incident> {
    return prisma.incident.create({ data });
  }

  static async updateState(id: string, state: string): Promise<Incident> {
    return prisma.incident.update({
      where: { id },
      data: { state }
    });
  }
}
