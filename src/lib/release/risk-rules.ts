export function evaluateRiskRules(changedFiles: string[], dependencyChanges?: string[]): { level: string, reasons: string[] } {
  const reasons: string[] = [];
  let level = "LOW";

  // Check Schema Changes
  const schemaChanged = changedFiles.some(f => f.includes("schema.prisma") || f.includes("migrations/"));
  if (schemaChanged) {
    level = "HIGH";
    reasons.push("Database schema modification detected. High risk of locking or regression.");
  }

  // Check Dependency Upgrades
  if (dependencyChanges && dependencyChanges.length > 0) {
    // If it's a major upgrade or touches critical packages like prisma, react, next
    const criticalDeps = dependencyChanges.filter(d => d.includes("prisma") || d.includes("next") || d.includes("react"));
    if (criticalDeps.length > 0) {
      if (level === "LOW") level = "MEDIUM";
      reasons.push(`Critical framework dependency upgrades detected: ${criticalDeps.join(', ')}.`);
    }
  }

  // Check Config Changes
  const configChanged = changedFiles.some(f => f.includes("next.config") || f.includes("tsconfig") || f.includes(".env"));
  if (configChanged) {
    if (level === "LOW") level = "MEDIUM";
    reasons.push("Core configuration file changes detected.");
  }

  if (reasons.length === 0) {
    reasons.push("Routine application logic changes. No structural risk flags triggered.");
  }

  return { level, reasons };
}
