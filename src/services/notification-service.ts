import { NotificationRepository } from "@/repositories/notification-repository";
import { CreateNotificationPayload, CreateNotificationSchema, MarkNotificationReadPayload, MarkNotificationReadSchema, NotificationPreferencePayload, NotificationPreferenceSchema } from "@/validators/notification.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class NotificationService {
  static async getUserNotifications(workspaceId: string, userId: string) {
    return NotificationRepository.getUserNotifications(workspaceId, userId);
  }

  static async getWorkspaceNotifications(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'NOTIFICATIONS', 'READ')) throw new Error("Unauthorized");
    return NotificationRepository.getUserNotifications(workspaceId, actorId);
  }

  static async getUnreadCount(workspaceId: string, userId: string) {
    return NotificationRepository.getUnreadCount(workspaceId, userId);
  }

  static async sendWorkspaceNotification(payload: CreateNotificationPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'NOTIFICATIONS', 'CREATE')) throw new Error("Unauthorized");
    const data = CreateNotificationSchema.parse(payload);
    
    const notification = await NotificationRepository.create({
      workspaceId: data.workspaceId,
      userId: data.userId,
      title: data.title,
      content: data.content,
      type: data.type,
      actionUrl: data.actionUrl,
    });

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'NOTIFICATION_SENT',
      message: `Sent notification to user ${data.userId}`
    });

    // In a real app, we would enqueue an email here if the user's preferences allow it
    // e.g. await BullQueue.add('email', { to: user.email, subject: data.title, body: data.content });

    return notification;
  }

  static async markAsRead(payload: MarkNotificationReadPayload, workspaceId: string, actorId: string) {
    const data = MarkNotificationReadSchema.parse(payload);
    await NotificationRepository.markAsRead(data.ids);

    await recordAuditEvent({
      workspaceId,
      actor: actorId,
      eventType: 'NOTIFICATION_READ',
      message: `Marked ${data.ids.length} notifications as read`
    });
  }

  static async getPreferences(workspaceId: string, userId: string) {
    let prefs = await NotificationRepository.getPreference(workspaceId, userId);
    if (!prefs) {
      prefs = await NotificationRepository.upsertPreference(workspaceId, userId, {});
    }
    return prefs;
  }

  static async updatePreferences(workspaceId: string, userId: string, payload: NotificationPreferencePayload, actorId: string) {
    const data = NotificationPreferenceSchema.parse(payload);
    const prefs = await NotificationRepository.upsertPreference(workspaceId, userId, data);

    await recordAuditEvent({
      workspaceId,
      actor: actorId,
      eventType: 'PREFERENCE_CHANGED',
      message: `Updated notification preferences`
    });

    return prefs;
  }
}
