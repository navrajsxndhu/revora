import { prisma } from "@/lib/prisma";

export async function calculateRecoveryConfidence(service: string) {
  // Find all recovery steps associated with this service
  const recoveryLogs = await prisma.auditLog.findMany({
    where: {
      eventType: { in: ["RECOVERY_STEP_COMPLETED", "RECOVERY_STEP_FAILED"] },
      message: { contains: service }
    },
    orderBy: { createdAt: 'desc' }
  });

  const totalLogs = recoveryLogs.length;
  const successLogs = recoveryLogs.filter(log => log.status === "SUCCESS");
  const failedLogs = totalLogs - successLogs.length;
  
  const successRate = totalLogs > 0 ? (successLogs.length / totalLogs) * 100 : 0;

  let confidence = 50; // Default baseline

  if (totalLogs === 0) {
    return {
      confidence: 50,
      level: "UNKNOWN",
      explanation: "No historical recovery data exists for this service. Proceed with standard caution."
    };
  }

  // Adjust confidence based on success rate
  confidence += (successRate - 50) * 0.8; // Scales linearly

  // Penalize for recent failures
  const recentLogs = recoveryLogs.slice(0, 5);
  const recentFailures = recentLogs.filter(log => log.status === "ERROR").length;
  confidence -= recentFailures * 5;

  // Clamp
  confidence = Math.max(0, Math.min(100, Math.round(confidence)));

  let level = "LOW";
  let explanation = "Historical recoveries frequently fail or require manual intervention.";
  if (confidence >= 80) {
    level = "HIGH";
    explanation = "Historically, automated recovery actions succeed reliably for this service.";
  } else if (confidence >= 40) {
    level = "MODERATE";
    explanation = "Recovery success is mixed. Proceed, but monitor downstream dependencies.";
  }

  const lastSuccess = successLogs.length > 0 ? successLogs[0] : null;

  return {
    confidence,
    level,
    explanation,
    historicalRecoveryCount: totalLogs,
    lastSuccessfulRemediation: lastSuccess ? lastSuccess.createdAt : null
  };
}
