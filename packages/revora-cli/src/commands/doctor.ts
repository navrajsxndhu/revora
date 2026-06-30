import { Command } from 'commander';
import fetch from 'node-fetch';
import { execSync } from 'child_process';
import { getConfig } from '../lib/config';
import { cliLogger as log } from '../lib/output';

export const doctorCommand = new Command('doctor')
  .description('Diagnose Revora CLI environment')
  .action(async () => {
    log.heading('Revora Doctor');

    // Check Git
    try {
      execSync('git --version', { stdio: 'ignore' });
      log.success('Git detected');
    } catch (e) {
      log.error('Git not found');
    }

    // Check Backend Connectivity
    const config = getConfig();
    try {
      const res = await fetch(`${config.backendUrl}/api/health`, { method: 'HEAD' });
      if (res.ok || res.status === 404) { // 404 is fine, means server is running but no health route
        log.success('Revora backend reachable');
      } else {
        log.warning(`Backend returned status ${res.status}`);
      }
    } catch (e) {
      log.warning(`Revora backend not reachable at ${config.backendUrl}`);
    }
  });
