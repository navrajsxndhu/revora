import { z } from 'zod';

export const CreateNotificationSchema = z.object({
  workspaceId: z.string().uuid(),
  userId: z.string().uuid().optional(),
  title: z.string().min(1),
  content: z.string().min(1),
  type: z.enum(['INFO', 'SUCCESS', 'WARNING', 'ERROR']).default('INFO'),
  actionUrl: z.string().url().optional(),
});

export const MarkNotificationReadSchema = z.object({
  ids: z.array(z.string()).min(1),
});

export const NotificationPreferenceSchema = z.object({
  emailDigest: z.boolean().optional(),
  inAppAlerts: z.boolean().optional(),
  pushEnabled: z.boolean().optional(),
});

export type CreateNotificationPayload = z.infer<typeof CreateNotificationSchema>;
export type MarkNotificationReadPayload = z.infer<typeof MarkNotificationReadSchema>;
export type NotificationPreferencePayload = z.infer<typeof NotificationPreferenceSchema>;
