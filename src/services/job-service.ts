import { JobRepository } from "@/repositories/job-repository";
import { ScheduleJobPayload, ScheduleJobSchema } from "@/validators/job.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export class JobService {
  static async getWorkspaceJobs(workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'QUEUE', 'READ')) throw new Error("Unauthorized");
    return JobRepository.findByWorkspaceId(workspaceId);
  }

  static async getJobStatus(id: string, workspaceId: string, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'QUEUE', 'READ')) throw new Error("Unauthorized");
    return JobRepository.findById(id);
  }

  static async scheduleJob(payload: ScheduleJobPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'QUEUE', 'EXECUTE')) throw new Error("Unauthorized");
    const data = ScheduleJobSchema.parse(payload);
    
    const job = await JobRepository.create({
      workspaceId: data.workspaceId,
      jobName: data.jobName,
      queueName: data.queueName,
      status: 'PENDING',
      progress: 0,
    });

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'JOB_SCHEDULED',
      message: `Scheduled job ${job.id} on queue ${data.queueName}`
    });

    // In a real application, we would interact with BullMQ here.
    // BullQueue.add(data.queueName, { jobId: job.id, payload: data.payload });

    return job;
  }
}
