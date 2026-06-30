import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning database...");
  await prisma.incidentNote.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.apiTrace.deleteMany();
  await prisma.incident.deleteMany();
  await prisma.workflowExecution.deleteMany();

  console.log("Seeding realistic incidents...");

  // Incident 1: Critical Database Timeout (Recurring)
  const inc1 = await prisma.incident.create({
    data: {
      title: "Deployment Failure: revora-production",
      description: "PrismaClientInitializationError: Timed out fetching a new connection from the connection pool.",
      state: "OPEN",
      severity: "CRITICAL",
      recurringCount: 3,
      relatedTraceId: "trace-demo-1",
      correlationId: "commit-abc1234",
      serviceAffected: "Database Layer",
      rootCauseSummary: "Database connection pool exhausted during high load.",
      recommendedAction: "Rollback strongly recommended. 3+ consecutive failures detected for this deployment hash.",
      probableCommit: "abc1234",
      assignedTo: "admin@revora.app",
      acknowledgedAt: new Date(Date.now() - 1000 * 60 * 5),
      acknowledgedBy: "admin@revora.app",
      deploymentDiff: JSON.stringify({
        changes: [{ type: "DEPENDENCY_CHANGE", file: "package.json", details: "prisma upgraded 5.1.0 -> 5.2.0" }]
      }),
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      activeRunbookId: "deployment-failure",
      completedRunbookSteps: '["step_1_verify"]',
      groupedCount: 3
    }
  });

  // Create child incidents to simulate grouped failures
  for (let i = 0; i < 3; i++) {
    await prisma.incident.create({
      data: {
        title: "Deployment Failure: revora-production",
        description: "PrismaClientInitializationError: Timed out fetching a new connection from the connection pool.",
        state: "OPEN",
        severity: "CRITICAL",
        recurringCount: 3,
        relatedTraceId: `trace-child-${i}`,
        correlationId: "commit-abc1234",
        serviceAffected: "Database Layer",
        masterIncidentId: inc1.id,
        createdAt: new Date(Date.now() - 1000 * 60 * 58 + i * 5000)
      }
    });
  }

  // Create downstream symptom incidents
  await prisma.incident.create({
    data: {
      title: "API Timeout: revora-api",
      description: "Error: 504 Gateway Timeout while communicating with upstream database.",
      state: "OPEN",
      severity: "MEDIUM",
      recurringCount: 0,
      relatedTraceId: "trace-symptom-1",
      correlationId: "commit-abc1234",
      serviceAffected: "API Gateway",
      isSymptom: true,
      rootCauseIncidentId: inc1.id,
      probableRootService: "Database Layer",
      createdAt: new Date(Date.now() - 1000 * 60 * 57)
    }
  });

  await prisma.incident.create({
    data: {
      title: "Worker Crash: revora-worker",
      description: "Error: Redis connection failed while processing queue.",
      state: "OPEN",
      severity: "MEDIUM",
      recurringCount: 0,
      relatedTraceId: "trace-symptom-2",
      correlationId: "commit-abc1234",
      serviceAffected: "Worker Queue",
      isSymptom: true,
      rootCauseIncidentId: inc1.id,
      probableRootService: "Database Layer",
      createdAt: new Date(Date.now() - 1000 * 60 * 56)
    }
  });

  // Mock Remediation Actions
  await prisma.auditLog.create({
    data: {
      executionId: "system",
      eventType: "RUNBOOK_STARTED",
      status: "INFO",
      actor: "navraj@revora.app",
      message: "Started runbook deployment-failure on incident",
      createdAt: new Date(Date.now() - 1000 * 60 * 55)
    }
  });

  await prisma.incidentNote.create({
    data: {
      incidentId: inc1.id,
      authorId: "System",
      message: "**Runbook Started:** Deployment Failure Recovery\nStarted by: navraj@revora.app",
      createdAt: new Date(Date.now() - 1000 * 60 * 55)
    }
  });

  await prisma.auditLog.create({
    data: {
      executionId: "system",
      eventType: "RUNBOOK_STEP_EXECUTED",
      status: "SUCCESS",
      actor: "navraj@revora.app",
      message: "Runbook Step step_1_verify on incident: Verify Deployment Hash completed successfully.",
      createdAt: new Date(Date.now() - 1000 * 60 * 50)
    }
  });

  await prisma.incidentNote.create({
    data: {
      incidentId: inc1.id,
      authorId: "System",
      message: "**Runbook Step Executed: Verify Deployment Hash**\nTriggered by: navraj@revora.app\nStatus: SUCCESS\nOutcome: Verify Deployment Hash completed successfully.",
      createdAt: new Date(Date.now() - 1000 * 60 * 50)
    }
  });

  await prisma.incidentNote.create({
    data: {
      incidentId: inc1.id,
      authorId: "admin@revora.app",
      message: "Looking into the Prisma version bump. Might be a connection pooling issue in 5.2.0.",
      createdAt: new Date(Date.now() - 1000 * 60 * 4)
    }
  });

  // Incident 2: Medium Environment Variable Issue
  await prisma.incident.create({
    data: {
      title: "Deployment Failure: revora-worker",
      description: "Error: Missing required environment variable REDIS_URL.",
      state: "ACKNOWLEDGED",
      severity: "MEDIUM",
      recurringCount: 1,
      relatedTraceId: "trace-demo-2",
      correlationId: "commit-def5678",
      serviceAffected: "Worker Queue",
      rootCauseSummary: "REDIS_URL environment variable was removed in the latest infrastructure PR.",
      recommendedAction: "Manual investigation required. Review the deployment diff to isolate the breaking change.",
      probableCommit: "def5678",
      assignedTo: "navraj@revora.app",
      acknowledgedAt: new Date(Date.now() - 1000 * 60 * 15),
      acknowledgedBy: "navraj@revora.app",
      deploymentDiff: JSON.stringify({
        changes: [{ type: "ENV_CHANGE", file: ".env.production", details: "REDIS_URL removed" }]
      }),
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      state: "RESOLVED",
      resolvedAt: new Date(Date.now() - 1000 * 60 * 10),
      resolutionNotes: `**Resolved by navraj@revora.app**\n\n**Root Cause:**\nREDIS_URL environment variable was missing from Vercel.\n\n**Mitigation:**\nRe-added the variable via Vercel CLI and replayed the worker deployment. It succeeded.\n\n**Future Notes:**\nNeed to add a pre-flight check in CI to validate required ENV vars.`
    }
  });

  // Create mock executions to simulate stability data
  for (let i = 0; i < 20; i++) {
    const execId = crypto.randomUUID();
    await prisma.workflowExecution.create({
      data: {
        id: execId,
        workflowId: "deployment-intelligence-loop",
        state: "COMPLETED",
        startedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 - (i * 100000)),
        completedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 - (i * 100000) + 2000),
      }
    });

    if (i < 3) {
      await prisma.auditLog.create({
        data: {
          executionId: execId,
          eventType: "REMEDIATION_REPLAY_WORKFLOW",
          status: "SUCCESS",
          message: "Manual replay completed successfully",
          actor: "navraj@revora.app",
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 - (i * 100000))
        }
      });
    }
  }

  // --- PHASE 75: PREVENTATIVE SEED DATA ---
  // Seed unstable history for worker-service and api-gateway
  for (let i = 0; i < 12; i++) {
    // 12 historical incidents for worker-service (High Risk)
    await prisma.incident.create({
      data: {
        title: `Historical Worker Crash ${i}`,
        description: "OOM Killed during payload processing",
        state: "RESOLVED",
        severity: "HIGH",
        recurringCount: 1,
        relatedTraceId: `trace-hist-${i}`,
        serviceAffected: "worker-service",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 1)),
        resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 1) + 1000 * 60 * 65) // 65 min MTTR
      }
    });

    await prisma.apiTrace.create({
      data: {
        id: `trace-hist-${i}`,
        workflowExecutionId: "system",
        nodeId: "worker-process",
        status: "ERROR",
        latencyMs: 1500,
        errorMessage: "Error: OOM Killed\n    at memoryAlloc (worker.js:45)\n    at processPayload (worker.js:12)\nRepeated 4 times: Heap out of memory",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 1))
      }
    });

    if (i % 2 === 0) {
      await prisma.auditLog.create({
        data: {
          executionId: "system",
          eventType: "RECOVERY_STEP_FAILED",
          status: "ERROR",
          actor: "system",
          message: "[worker-service] Failed to replay workflow. API timeout.",
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 1) + 1000 * 60 * 30)
        }
      });
    }
  }

  for (let i = 0; i < 5; i++) {
    // Database incidents with large blast radius
    const dbInc = await prisma.incident.create({
      data: {
        title: `Historical Database Outage ${i}`,
        description: "Connection pool exhausted",
        state: "RESOLVED",
        severity: "CRITICAL",
        recurringCount: 0,
        relatedTraceId: `trace-db-hist-${i}`,
        serviceAffected: "database",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 2)),
        resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 2) + 1000 * 60 * 40) // 40 min MTTR
      }
    });

    await prisma.apiTrace.create({
      data: {
        id: `trace-db-hist-${i}`,
        workflowExecutionId: "system",
        nodeId: "pg-pool",
        status: "ERROR",
        latencyMs: 5000,
        errorMessage: "Error: Connection pool exhausted\n    at Pool.query (pg.js:112)\n    at executeQuery (db.ts:44)\nRepeated 12 times: timeout acquiring connection",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 2))
      }
    });

    // Seed symptoms
    for (const downstream of ["api-gateway", "auth-service", "webhooks", "worker-service"]) {
      await prisma.incident.create({
        data: {
          title: `Symptom ${downstream}`,
          description: "Timeout waiting for upstream.",
          state: "RESOLVED",
          severity: "HIGH",
          relatedTraceId: `trace-db-symptom-${downstream}-${i}`,
          serviceAffected: downstream,
          isSymptom: true,
          rootCauseIncidentId: dbInc.id,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 2) + 1000 * 30),
          resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 2) + 1000 * 60 * 41)
        }
      });
    }
  }

  console.log("Database seeded successfully.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
