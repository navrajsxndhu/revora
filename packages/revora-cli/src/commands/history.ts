import { Command } from 'commander';
import fetch from 'node-fetch';
import { getConfig } from '../lib/config';
import { cliLogger as log } from '../lib/output';

export const historyCommand = new Command('history')
  .argument('<service>', 'Service name to fetch history for')
  .description('Fetch historical incidents and operational memory for a service')
  .action(async (...args: any[]) => {
    const service: string = args[0];
    const config = getConfig();
    log.heading(`Operational History: ${service}`);

    try {
      const res = await fetch(`${config.backendUrl}/api/cli/history?service=${service}`);
      if (!res.ok) {
        log.error(`Failed to fetch history (HTTP ${res.status})`);
        return;
      }

      const data: any = await res.json();
      
      if (!data || data.incidentsCount === 0) {
        log.info('No historical incidents found for this service.');
        return;
      }

      log.info(`Incidents on record: ${data.incidentsCount}`);
      log.info(`Historical MTTR: ${data.mttr} minutes`);
      log.info(`Average Blast Radius: ${data.blastRadius.toFixed(1)} downstream systems`);
      
      if (data.mostSuccessfulAction) {
        console.log('\nMost successful historical remediation:');
        log.success(data.mostSuccessfulAction);
      }

    } catch (e: unknown) {
      log.error(`Could not connect to Revora backend at ${config.backendUrl}`);
    }
  });
