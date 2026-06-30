import { prisma } from "@/lib/prisma";
import { analyzeTrace } from "./trace-analysis";
import { generateFailureSignature } from "./failure-signatures";
import { Incident } from "@prisma/client";

export type DeploymentRiskLevel = "LOW" | "MEDIUM" | "HIGH";
export type DeploymentChangeCategory = "ENVIRONMENT_CHANGE" | "DEPENDENCY_UPGRADE" | "DATABASE_MIGRATION" | "AUTH_CHANGE" | "CONFIG_CHANGE" | "CODE_CHANGE";

export type DiagnosticsResult = {
  probableFailurePoint: string;
  affectedServices: string[];
  deploymentChanges: { type: DeploymentChangeCategory, risk: DeploymentRiskLevel, explanation: string }[];
  recentFailures: number;
  historicalRecoveryHints: string[];
  dependencyWarnings: string[];
  failureSignature: string;
  traceSummary: {
    primaryError: string;
    probableLayer: string;
    repeatedPatterns: string[];
  }
};

export async function aggregateDiagnostics(incident: Incident): Promise<DiagnosticsResult> {
  const traces = await prisma.apiTrace.findMany({
    where: { id: incident.relatedTraceId },
    take: 1
  });

  const tracePayload = traces.length > 0 ? (traces[0].errorMessage || traces[0].responsePayload) : incident.description;
  const traceAnalysis = analyzeTrace(tracePayload);
  
  const failureSignature = generateFailureSignature(incident.serviceAffected, traceAnalysis);

  // Categorize deployment diffs if any
  const deploymentChanges: DiagnosticsResult['deploymentChanges'] = [];
  if (incident.deploymentDiff) {
    const diffLower = incident.deploymentDiff.toLowerCase();
    
    if (diffLower.includes("package.json") || diffLower.includes("yarn.lock")) {
      deploymentChanges.push({ type: "DEPENDENCY_UPGRADE", risk: "MEDIUM", explanation: "Dependency manifest was modified." });
    }
    if (diffLower.includes(".env") || diffLower.includes("config")) {
      deploymentChanges.push({ type: "CONFIG_CHANGE", risk: "HIGH", explanation: "Environment variables or config files were changed." });
    }
    if (diffLower.includes("prisma/schema") || diffLower.includes("migration")) {
      deploymentChanges.push({ type: "DATABASE_MIGRATION", risk: "HIGH", explanation: "Database schema or migrations were altered." });
    }
    
    if (deploymentChanges.length === 0) {
      deploymentChanges.push({ type: "CODE_CHANGE", risk: "LOW", explanation: "Standard application code modifications." });
    }
  }

  // Find historical similarity
  const historicalSimilars = await prisma.incident.findMany({
    where: {
      serviceAffected: incident.serviceAffected,
      id: { not: incident.id },
      state: "RESOLVED"
    },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  // Since we just added the column, existing DB rows might not have it.
  // We'll rely on matching service + probable layer for "similarity" if signature is missing.
  
  let matchCount = 0;
  let successfulReplays = 0;
  let successfulRedeploys = 0;

  for (const hist of historicalSimilars) {
    if (hist.failureSignature === failureSignature || !hist.failureSignature) {
      matchCount++;
      const completedSteps = JSON.parse(hist.completedRunbookSteps || "[]");
      if (completedSteps.includes("step_1_retry")) successfulReplays++;
      if (completedSteps.includes("step_2_redeploy")) successfulRedeploys++;
    }
  }

  const historicalRecoveryHints: string[] = [];
  if (matchCount > 0) {
    historicalRecoveryHints.push(`Found ${matchCount} historically similar incidents for this service.`);
    if (successfulReplays > 0) historicalRecoveryHints.push(`${successfulReplays} similar incidents were resolved via Workflow Replay.`);
    if (successfulRedeploys > 0) historicalRecoveryHints.push(`${successfulRedeploys} similar incidents were resolved via Redeploy.`);
  } else {
    historicalRecoveryHints.push("No highly similar historical incidents found. This failure pattern appears new.");
  }

  // Dependency Warnings
  const dependencyWarnings: string[] = [];
  if (incident.recurringCount > 0) {
    dependencyWarnings.push(`Service has failed ${incident.recurringCount} times recently.`);
  }
  
  if (traceAnalysis.probableLayer === "Database" || traceAnalysis.probableLayer === "Network") {
    dependencyWarnings.push(`Infrastructure-level failure detected (${traceAnalysis.probableLayer}). Downstream cascading likely.`);
  }

  // Persist the generated signature (fire and forget update)
  if (incident.failureSignature !== failureSignature) {
    prisma.incident.update({
      where: { id: incident.id },
      data: {
        failureSignature,
        probableFailurePoint: traceAnalysis.probableLayer,
        historicalSimilarityCount: matchCount,
        deploymentRiskLevel: deploymentChanges.length > 0 ? deploymentChanges.some(d => d.risk === "HIGH") ? "HIGH" : "MEDIUM" : "LOW"
      }
    }).catch(e => console.error("Failed to update incident diagnostics", e));
  }

  return {
    probableFailurePoint: traceAnalysis.probableLayer,
    affectedServices: incident.serviceAffected ? [incident.serviceAffected] : [],
    deploymentChanges,
    recentFailures: matchCount,
    historicalRecoveryHints,
    dependencyWarnings,
    failureSignature,
    traceSummary: {
      primaryError: traceAnalysis.primaryError,
      probableLayer: traceAnalysis.probableLayer,
      repeatedPatterns: traceAnalysis.repeatedPatterns
    }
  };
}
