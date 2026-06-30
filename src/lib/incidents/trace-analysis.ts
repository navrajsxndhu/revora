export type TraceAnalysisResult = {
  primaryError: string;
  repeatedPatterns: string[];
  probableLayer: string; // e.g., 'Database', 'Network', 'Application', 'Unknown'
  truncatedTrace: string;
};

export function analyzeTrace(tracePayload: string | null): TraceAnalysisResult {
  if (!tracePayload) {
    return {
      primaryError: "No trace data available.",
      repeatedPatterns: [],
      probableLayer: "Unknown",
      truncatedTrace: ""
    };
  }

  // Parse lines
  const lines = tracePayload.split('\n').map(line => line.trim()).filter(Boolean);
  
  if (lines.length === 0) {
    return {
      primaryError: "Empty trace.",
      repeatedPatterns: [],
      probableLayer: "Unknown",
      truncatedTrace: ""
    };
  }

  // 1. Identify Primary Error (usually the first line)
  const primaryError = lines[0];

  // 2. Safely truncate noisy traces (keep first 10 lines and last 5 lines if > 20 lines)
  let truncatedTrace = lines.join('\n');
  if (lines.length > 20) {
    const head = lines.slice(0, 10).join('\n');
    const tail = lines.slice(-5).join('\n');
    truncatedTrace = `${head}\n... [${lines.length - 15} lines truncated] ...\n${tail}`;
  }

  // 3. Find repeated patterns (e.g., recursive calls or connection retries)
  const patternCounts: Record<string, number> = {};
  const repeatedPatterns: string[] = [];
  
  lines.forEach(line => {
    // Simplify line to catch rough patterns (e.g., "at Object.query" or "Connection timeout")
    const simplified = line.replace(/[0-9]+ms/g, '').replace(/:\d+:\d+/g, '');
    patternCounts[simplified] = (patternCounts[simplified] || 0) + 1;
  });

  for (const [pattern, count] of Object.entries(patternCounts)) {
    if (count > 3 && pattern.length > 10) {
      repeatedPatterns.push(`Repeated ${count} times: ${pattern}`);
    }
  }

  // 4. Identify Probable Layer
  let probableLayer = "Application";
  const searchTrace = tracePayload.toLowerCase();
  
  if (searchTrace.includes("econnrefused") || searchTrace.includes("timeout") || searchTrace.includes("socket")) {
    probableLayer = "Network";
  }
  if (searchTrace.includes("sql") || searchTrace.includes("prisma") || searchTrace.includes("pool") || searchTrace.includes("deadlock")) {
    probableLayer = "Database";
  }
  if (searchTrace.includes("auth") || searchTrace.includes("token") || searchTrace.includes("jwt") || searchTrace.includes("401") || searchTrace.includes("403")) {
    probableLayer = "Authentication";
  }
  if (searchTrace.includes("oom") || searchTrace.includes("heap") || searchTrace.includes("memory")) {
    probableLayer = "Infrastructure";
  }

  return {
    primaryError,
    repeatedPatterns,
    probableLayer,
    truncatedTrace
  };
}
