import { Command } from 'commander';
import { evaluateLocalRisk } from '../lib/risk-evaluator';
import { log } from '../lib/output';

export const analyzeCommand = new Command('analyze')
  .description('Evaluate deployment risk locally before pushing code')
  .action(() => {
    log.heading('Revora Local Risk Analysis');
    const result = evaluateLocalRisk();

    console.log(log.riskLevel(result.level) + '\n');
    
    log.info(`Analyzed ${result.changedFilesCount} changed files and ${result.dependencyChangesCount} dependency changes.\n`);
    
    if (result.reasons.length > 0) {
      for (const reason of result.reasons) {
        log.bullet(reason);
      }
    }

    console.log('\nRecommended rollout:');
    log.success(result.rolloutStrategy);
  });
