import { createQueue } from './queue-factory';

// Define standardized queue names
export const QUEUES = {
  AUDIT: 'enterprise-audit-queue',
  NOTIFICATION: 'enterprise-notification-queue',
  REPORT: 'enterprise-report-queue',
  EMAIL: 'enterprise-email-queue',
  WEBHOOK: 'enterprise-webhook-queue',
  WORKFLOW: 'enterprise-workflow-queue',
  EXPORT: 'enterprise-export-queue',
  CLEANUP: 'enterprise-cleanup-queue',
} as const;

// Instantiate Queues
export const AuditQueue = createQueue(QUEUES.AUDIT);
export const NotificationQueue = createQueue(QUEUES.NOTIFICATION);
export const ReportQueue = createQueue(QUEUES.REPORT);
export const EmailQueue = createQueue(QUEUES.EMAIL);
export const WebhookQueue = createQueue(QUEUES.WEBHOOK);
export const WorkflowQueue = createQueue(QUEUES.WORKFLOW);
export const ExportQueue = createQueue(QUEUES.EXPORT);
export const CleanupQueue = createQueue(QUEUES.CLEANUP);

export const AllQueues = [
  AuditQueue,
  NotificationQueue,
  ReportQueue,
  EmailQueue,
  WebhookQueue,
  WorkflowQueue,
  ExportQueue,
  CleanupQueue
];
