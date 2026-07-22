import { Command } from 'commander';
import fetch from 'node-fetch';
import { getConfig } from '../lib/config';
import { cliLogger as log } from '../lib/output';
import { evaluateLocalRisk } from '../lib/risk-evaluator';

export const explainCommand = new Command('explain')
  .argument('[service]', 'Optional service name to fetch remote drift explanations')
  .description('Explain why a deployment is risky')
  .action(async (...args: any[]) => {
    const service: string | undefined = args[0];
    log.heading('Risk Explanation');
    
    // 1. Evaluate locally to get rule reasons
    const localResult = evaluateLocalRisk();
    if (localResult.reasons.length > 0) {
      console.log('Local Code Reasoning:');
      for (const reason of localResult.reasons) {
        log.bullet(reason);
      }
    }

    // 2. Fetch backend drift if service is provided
    if (service) {
      const config = getConfig();
      try {
        const res = await fetch(`${config.backendUrl}/api/cli/risk?service=${service}`);
        if (res.ok) {
          const data: any = await res.json();
          if (data.driftWarnings && data.driftWarnings.length > 0) {
            console.log('\nHistorical Operational Drift:');
            for (const warning of data.driftWarnings) {
              log.bullet(warning);
            }
          }
        }
      } catch (e: unknown) {
        // Backend not reachable, silently ignore as it's an optional enhancement
      }
    }
  });
