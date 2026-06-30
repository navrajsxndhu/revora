import { prisma } from "../prisma";
import crypto from 'crypto';
import { generatePIR } from "../pir/generate-pir";

export async function generateDemoWorkspace() {
  const org = await prisma.organization.create({
    data: { name: "Acme Corp Demo" }
  });

  const workspace = await prisma.workspace.create({
    data: {
      name: "Acme Engineering (Demo)",
      organizationId: org.id
    }
  });

  // Create fake users & members
  const fakeUser = await prisma.user.create({
    data: { email: "alex@acme.demo", password: "fake" }
  });

  await prisma.workspaceMember.create({
    data: {
      workspaceId: workspace.id,
      userId: fakeUser.id,
      role: 'OWNER'
    }
  });

  // Create fake deployments
  const deployment = await prisma.deployment.create({
    data: {
      workspaceId: workspace.id,
      serviceName: "payment-gateway",
      commitSha: "a1b2c3d",
      environment: "production",
      changedFiles: JSON.stringify(["src/stripe/checkout.ts", "prisma/schema.prisma"]),
      riskLevel: "CRITICAL",
      riskReasoning: "Schema migration detected along with payment logic changes.",
      rolloutStrategy: "CANARY",
      status: "EVALUATED"
    }
  });

  // Create fake incident
  const incident = await prisma.incident.create({
    data: {
      workspaceId: workspace.id,
      title: "Checkout Latency Spike",
      description: "p99 latency exceeded 5s for payment-gateway.",
      state: "RESOLVED",
      severity: "HIGH",
      relatedTraceId: "trace-123",
      deploymentId: deployment.id,
      serviceAffected: "payment-gateway",
      assignedTo: "alex@acme.demo",
      resolvedSuccessfully: true,
      rollbackTriggered: true,
      createdAt: new Date(Date.now() - 3600000), // 1 hour ago
      resolvedAt: new Date(Date.now() - 1800000), // 30 mins ago
    }
  });

  // Add Incident Events
  await prisma.incidentEvent.createMany({
    data: [
      { incidentId: incident.id, eventType: 'ESCALATION', payload: 'HIGH', actor: 'System', createdAt: new Date(Date.now() - 3500000) },
      { incidentId: incident.id, eventType: 'ASSIGNMENT', payload: 'alex@acme.demo', actor: 'System', createdAt: new Date(Date.now() - 3400000) },
      { incidentId: incident.id, eventType: 'RECOVERY', payload: 'Automated Rollback', actor: 'System', createdAt: new Date(Date.now() - 3000000) },
      { incidentId: incident.id, eventType: 'RESOLUTION', actor: 'alex@acme.demo', createdAt: new Date(Date.now() - 1800000) },
    ]
  });

  // Create fake PIR
  await generatePIR(workspace.id, incident.id);

  // Fake API Keys
  await prisma.apiKey.create({
    data: {
      workspaceId: workspace.id,
      name: "GitHub Actions Demo Key",
      keyHash: crypto.createHash('sha256').update("fake-key").digest('hex'),
      prefix: "rva_fake",
      scopes: JSON.stringify(["deployment:write", "incident:read"]),
      lastUsed: new Date()
    }
  });

  return workspace;
}
