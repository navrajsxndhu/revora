import { TraceAnalysisResult } from "./trace-analysis";

export function generateFailureSignature(serviceAffected: string | null, traceAnalysis: TraceAnalysisResult): string {
  // Generates a deterministic string fingerprint
  
  if (!serviceAffected) {
    return "UNKNOWN_SERVICE_FAILURE";
  }

  let baseType = "APPLICATION_ERROR";
  
  switch (traceAnalysis.probableLayer) {
    case "Network":
      baseType = "NETWORK_TIMEOUT";
      break;
    case "Database":
      baseType = "DATABASE_FAILURE";
      break;
    case "Authentication":
      baseType = "AUTH_REJECTION";
      break;
    case "Infrastructure":
      baseType = "RESOURCE_EXHAUSTION";
      break;
  }

  // Look for specific common substrings in primary error to make the signature tighter
  const primaryLower = traceAnalysis.primaryError.toLowerCase();
  
  if (primaryLower.includes("econnrefused")) {
    baseType = "CONNECTION_REFUSED";
  } else if (primaryLower.includes("deadlock")) {
    baseType = "DB_DEADLOCK";
  } else if (primaryLower.includes("oom") || primaryLower.includes("out of memory")) {
    baseType = "OOM_CRASH";
  } else if (primaryLower.includes("pool exhausted")) {
    baseType = "CONNECTION_POOL_EXHAUSTED";
  }

  // Create final signature format: [SERVICE]_[ERROR_TYPE]
  return `${serviceAffected.toUpperCase()}_${baseType}`;
}
