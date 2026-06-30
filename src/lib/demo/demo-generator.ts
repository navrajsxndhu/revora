import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function generateDemoEnvironment() {
  // Clear existing active incidents for a clean demo
  await prisma.incident.updateMany({
    where: { state: { not: "RESOLVED" } },
    data: { state: "RESOLVED", resolvedAt: new Date() }
  });

  // Create a realistic Root Cause Outage
  const rootCauseId = crypto.randomUUID();
  const dbInc = await prisma.incident.create({
    data: {
      id: rootCauseId,
      title: "Connection Pool Exhaustion",
      description: "Database connection limit reached. All new queries are timing out.",
      state: "OPEN",
      severity: "CRITICAL",
      recurringCount: 0,
      serviceAffected: "database",
      relatedTraceId: `trace-demo-db-${Date.now()}`,
      createdAt: new Date(),
      deploymentDiff: JSON.stringify({
        files: [{ name: "prisma/schema.prisma", changes: 4 }],
        message: "perf: adjust connection pooling"
      }),
      failureSignature: "DATABASE_CONNECTION_POOL_EXHAUSTED",
      probableFailurePoint: "Database",
      deploymentRiskLevel: "HIGH"
    }
  });

  await prisma.apiTrace.create({
    data: {
      id: dbInc.relatedTraceId,
      workflowExecutionId: "demo-system",
      nodeId: "pg-pool",
      status: "ERROR",
      latencyMs: 5500,
      errorMessage: "Error: Connection pool exhausted\n    at Pool.query (pg.js:112)\n    at executeQuery (db.ts:44)\nRepeated 12 times: timeout acquiring connection",
      timestamp: new Date()
    }
  });

  // Create downstream symptoms
  const symptoms = ["api-gateway", "auth-service", "worker-queue"];
  for (const downstream of symptoms) {
    const symptomTraceId = `trace-demo-${downstream}-${Date.now()}`;
    await prisma.incident.create({
      data: {
        title: `Timeout waiting for upstream: ${downstream}`,
        description: `Service ${downstream} is failing to communicate with the database layer.`,
        state: "OPEN",
        severity: "HIGH",
        serviceAffected: downstream,
        isSymptom: true,
        rootCauseIncidentId: dbInc.id,
        relatedTraceId: symptomTraceId,
        probableRootService: "database",
        createdAt: new Date(),
        failureSignature: `${downstream.toUpperCase()}_NETWORK_TIMEOUT`,
        probableFailurePoint: "Network"
      }
    });

    await prisma.apiTrace.create({
      data: {
        id: symptomTraceId,
        workflowExecutionId: "demo-system",
        nodeId: downstream,
        status: "ERROR",
        latencyMs: 15000,
        errorMessage: `Error: ECONNREFUSED\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)\nRepeated 5 times: fetch to database failed`,
        timestamp: new Date()
      }
    });
  }

  // Create a random isolated worker crash
  await prisma.incident.create({
    data: {
      title: "Worker Process OOM Crash",
      description: "Worker node ran out of memory processing large payload.",
      state: "OPEN",
      severity: "MEDIUM",
      serviceAffected: "worker-service",
      relatedTraceId: `trace-demo-worker-${Date.now()}`,
      createdAt: new Date(),
      failureSignature: "WORKER-SERVICE_OOM_CRASH",
      probableFailurePoint: "Infrastructure",
      recurringCount: 2
    }
  });

  return { success: true, rootCauseId: dbInc.id };
}
