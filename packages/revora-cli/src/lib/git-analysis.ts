import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export function getChangedFiles(): string[] {
  try {
    const output = execSync('git diff --name-only HEAD', { encoding: 'utf-8' });
    return output.split('\n').filter(Boolean);
  } catch (e) {
    return [];
  }
}

export function getDependencyChanges(): string[] {
  const changedDeps: string[] = [];
  try {
    const output = execSync('git diff HEAD -- package.json', { encoding: 'utf-8' });
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.startsWith('+') && !line.startsWith('+++') && line.includes(':')) {
        const match = line.match(/"([^"]+)"\s*:/);
        if (match) {
          changedDeps.push(match[1]);
        }
      }
    }
  } catch (e) {
    // Ignore if not a git repo or no package.json
  }
  return changedDeps;
}
