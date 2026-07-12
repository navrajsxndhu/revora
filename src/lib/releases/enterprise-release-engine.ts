import { prisma } from "@/lib/prisma";
import { evaluateReleaseReadiness } from "./release-readiness";
import { validateReleaseGovernance } from "./release-governance";

export async function createEnterpriseRelease(workspaceId: string, releaseName: string) {
  const readiness = await evaluateReleaseReadiness(workspaceId, "");
  const governance = await validateReleaseGovernance(workspaceId, "");

  const release = await prisma.enterpriseRelease.create({
    data: {
      workspaceId,
      releaseName,
      status: "PLANNING",
      readinessScore: readiness.score,
      governanceStatus: governance.status,
      checkpoints: {
        create: [
          { milestone: "PLANNING_STARTED", status: "COMPLETED", reachedAt: new Date() },
          { milestone: "GOVERNANCE_VALIDATION", status: governance.status === "VALID" ? "COMPLETED" : "BLOCKED", reachedAt: new Date() },
          { milestone: "EXECUTION", status: "PENDING" },
          { milestone: "VERIFICATION", status: "PENDING" }
        ]
      },
      approvals: {
        create: [
          { approverRole: "Engineering Lead", status: "PENDING" },
          { approverRole: "Security Officer", status: "PENDING" }
        ]
      }
    }
  });

  return release;
}
