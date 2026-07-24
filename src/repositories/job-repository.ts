import { prisma } from '@/lib/prisma';
import { Prisma, JobExecution } from '@prisma/client';

export class JobRepository {
  static async findById(id: string): Promise<JobExecution | null> {
    return prisma.jobExecution.findUnique({ where: { id } });
  }

  static async findByWorkspaceId(workspaceId: string, limit: number = 50): Promise<JobExecution[]> {
    return prisma.jobExecution.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async create(data: Prisma.JobExecutionUncheckedCreateInput): Promise<JobExecution> {
    return prisma.jobExecution.create({ data });
  }

  static async updateStatus(id: string, status: string, progress: number = 0, result?: string, error?: string): Promise<JobExecution> {
    const updateData: Prisma.JobExecutionUncheckedUpdateInput = { status, progress };
    
    if (result) updateData.result = result;
    if (error) updateData.error = error;
    
    if (status === 'ACTIVE') updateData.startedAt = new Date();
    if (status === 'COMPLETED' || status === 'FAILED') updateData.completedAt = new Date();

    return prisma.jobExecution.update({
      where: { id },
      data: updateData
    });
  }
}
