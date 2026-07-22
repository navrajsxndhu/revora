import { Command } from 'commander';
import fetch from 'node-fetch';
import { cliLogger as log } from '../lib/output';
import { evaluateLocalRisk } from '../lib/risk-evaluator';
import fs from 'fs';

export const ciCommand = new Command('ci')
  .description('Run headless risk analysis for CI/CD pipelines')
  .option('-s, --service <name>', 'Service name being deployed')
  .option('-u, --url <url>', 'Revora backend URL (optional)')
  .option('-o, --output <file>', 'Output PR markdown to file (optional)')
  .action(async (options) => {
    log.heading('Revora CI/CD Quality Gate');
    
    if (!options.service) {
      log.error('Service name is required (--service <name>)');
      process.exit(1);
    }

    const localResult = evaluateLocalRisk();
    log.info(`Analyzed local changes: ${localResult.changedFilesCount} files, ${localResult.dependencyChangesCount} deps.`);
    console.log(log.riskLevel(localResult.level));

    if (options.url) {
      log.info(`Fetching operational context from ${options.url}...`);
      try {
        // Also check governance policies first
        const govRes = await fetch(`${options.url}/api/governance/evaluate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            serviceName: options.service,
            workspaceId: process.env.REVORA_WORKSPACE_ID || 'mock-ws-id'
          })
        });

        if (govRes.ok) {
          const govData: unknown = await govRes.json();
          if (govData.status === 'BLOCK') {
             log.error('Deployment BLOCKED by Revora Governance Engine.');
             log.bullet(govData.message);
             process.exit(1);
          } else if (govData.status === 'CANARY_ONLY') {
             log.warning(`Governance Check: ${govData.message}`);
          }
        }

        const res = await fetch(`${options.url}/api/release/gate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            serviceName: options.service,
            riskLevel: localResult.level,
            reasons: localResult.reasons,
            rolloutStrategy: localResult.rolloutStrategy
          })
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: unknown = await res.json();

        console.log(`\nGate Decision: ${data.decision}`);
        
        if (options.output) {
          fs.writeFileSync(options.output, data.prCommentMarkdown, 'utf-8');
          log.success(`Wrote PR comment to ${options.output}`);
        }

        if (data.decision === 'BLOCK') {
          log.error('Deployment BLOCKED by Revora.');
          data.reasoning.forEach((r: string) => log.bullet(r));
          process.exit(1);
        } else if (data.decision === 'WARN') {
          log.warning('Deployment WARNED by Revora.');
          data.reasoning.forEach((r: string) => log.bullet(r));
        } else {
          log.success('Deployment PASSED Revora gates.');
        }

      } catch (e: unknown) {
        log.error(`Failed to connect to backend: ${e.message}`);
        // Fallback to local
        process.exit(localResult.level === 'CRITICAL' ? 1 : 0);
      }
    } else {
      // Local only
      if (localResult.level === 'CRITICAL') {
        log.error('Deployment BLOCKED by Revora (Local rules).');
        process.exit(1);
      } else {
        log.success('Deployment PASSED Revora gates (Local rules).');
      }
    }
  });
