import { evaluateRiskRules } from '../../../../src/lib/release/risk-rules';
import { recommendRolloutStrategy } from '../../../../src/lib/release/rollout-strategy';
import { getChangedFiles, getDependencyChanges } from './git-analysis';

export function evaluateLocalRisk() {
  const changedFiles = getChangedFiles();
  const dependencyChanges = getDependencyChanges();

  const { level, reasons } = evaluateRiskRules(changedFiles, dependencyChanges);
  
  // Local analysis only has access to static rules, not historical drift,
  // unless connected to the backend.
  // We pass empty drift warnings for the local pure check.
  const rolloutStrategy = recommendRolloutStrategy(level, [], 0);

  return {
    changedFilesCount: changedFiles.length,
    dependencyChangesCount: dependencyChanges.length,
    level,
    reasons,
    rolloutStrategy
  };
}
