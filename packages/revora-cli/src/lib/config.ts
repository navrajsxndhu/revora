import fs from 'fs';
import path from 'path';
import os from 'os';

export interface RevoraConfig {
  backendUrl: string;
}

const CONFIG_PATH = path.join(os.homedir(), '.revora', 'config.json');

export function getConfig(): RevoraConfig {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const data = fs.readFileSync(CONFIG_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (e) {
    // Return default if parsing fails
  }
  return {
    backendUrl: 'http://localhost:3000'
  };
}

export function saveConfig(config: RevoraConfig) {
  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');
}
