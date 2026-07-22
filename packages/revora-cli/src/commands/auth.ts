import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import os from 'os';

const CONFIG_DIR = path.join(os.homedir(), '.revora');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

function ensureConfigDir() {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
}

export const authCommands = new Command('auth')
  .description('Authentication commands for Revora CLI');

authCommands
  .command('login')
  .description('Log in to your Revora workspace using an API Key')
  .argument('<api-key>', 'Your Revora API Key')
  .action((...args: any[]) => {
    const apiKey = args[0];
    ensureConfigDir();
    const config = { apiKey, updatedAt: new Date().toISOString() };
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
    console.log(`\x1b[32m[SUCCESS]\x1b[0m Logged in successfully. API Key saved locally.`);
  });

authCommands
  .command('logout')
  .description('Log out and clear stored API Key')
  .action((...args: any[]) => {
    
    if (fs.existsSync(CONFIG_FILE)) {
      fs.unlinkSync(CONFIG_FILE);
      console.log(`\x1b[32m[SUCCESS]\x1b[0m Logged out successfully.`);
    } else {
      console.log(`\x1b[33m[INFO]\x1b[0m You are not logged in.`);
    }
  });

authCommands
  .command('whoami')
  .description('Display the current authentication status')
  .action((...args: any[]) => {
    
    if (fs.existsSync(CONFIG_FILE)) {
      const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
      // Only show prefix for security
      const prefix = config.apiKey.substring(0, 8);
      console.log(`\x1b[32m[AUTHENTICATED]\x1b[0m Logged in with API Key: ${prefix}...`);
    } else {
      console.log(`\x1b[31m[ERROR]\x1b[0m Not authenticated. Run 'revora login <api-key>'.`);
    }
  });

export function getApiKey(): string | null {
  if (fs.existsSync(CONFIG_FILE)) {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
    return config.apiKey;
  }
  return null;
}
