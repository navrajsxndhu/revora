import { prisma } from '@/lib/prisma';
import { Prisma, NotificationMessage, NotificationPreference } from '@prisma/client';

export class NotificationRepository {
  static async getWorkspaceNotifications(workspaceId: string, limit: number = 50): Promise<NotificationMessage[]> {
    return prisma.notificationMessage.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async getUserNotifications(workspaceId: string, userId: string, limit: number = 50): Promise<NotificationMessage[]> {
    return prisma.notificationMessage.findMany({
      where: { workspaceId, userId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async getUnreadCount(workspaceId: string, userId: string): Promise<number> {
    return prisma.notificationMessage.count({
      where: { workspaceId, userId, readAt: null }
    });
  }

  static async create(data: Prisma.NotificationMessageUncheckedCreateInput): Promise<NotificationMessage> {
    return prisma.notificationMessage.create({ data });
  }

  static async markAsRead(ids: string[]): Promise<void> {
    await prisma.notificationMessage.updateMany({
      where: { id: { in: ids } },
      data: { readAt: new Date() }
    });
  }

  static async getPreference(workspaceId: string, userId: string): Promise<NotificationPreference | null> {
    return prisma.notificationPreference.findFirst({
      where: { workspaceId, userId }
    });
  }

  static async upsertPreference(workspaceId: string, userId: string, data: Partial<NotificationPreference>): Promise<NotificationPreference> {
    const existing = await this.getPreference(workspaceId, userId);
    
    if (existing) {
      return prisma.notificationPreference.update({
        where: { id: existing.id },
        data
      });
    }

    return prisma.notificationPreference.create({
      data: {
        workspaceId,
        userId,
        emailDigest: data.emailDigest ?? true,
        inAppAlerts: data.inAppAlerts ?? true,
        pushEnabled: data.pushEnabled ?? false
      }
    });
  }
}
