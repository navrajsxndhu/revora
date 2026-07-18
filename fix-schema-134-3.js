const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

// 1. We have duplicate models at the bottom of the file (added by Phase 134)
// The new ones are BcpRecoveryExecution and BcpRecoveryScenario
// Let's rename them uniquely.
content = content.replace(/model BcpRecoveryExecution \{/g, (match, offset) => {
  if (offset > 110000) return 'model Phase134RecoveryExecution {';
  return match;
});

content = content.replace(/model BcpRecoveryScenario \{/g, (match, offset) => {
  if (offset > 110000) return 'model Phase134RecoveryScenario {';
  return match;
});

// 2. Fix the Workspace relations.
content = content.replace(/bcpRecoveryExecutions                BcpRecoveryExecution\[\]/g, (match, offset) => {
  if (offset > 8000) return 'phase134RecoveryExecutions           Phase134RecoveryExecution[]';
  return match;
});

content = content.replace(/bcpRecoveryScenarios                 BcpRecoveryScenario\[\]/g, (match, offset) => {
  if (offset > 8000) return 'phase134RecoveryScenarios            Phase134RecoveryScenario[]';
  return match;
});

// Wait, the previous error was: Field "bcpRecoveryScenarios" is already defined on model "Workspace".
// This implies there are TWO "bcpRecoveryScenarios" in the Workspace model!
// Let's remove the second one.
let lines = content.split('\n');
let newLines = [];
let seenExecs = false;
let seenScenarios = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('bcpRecoveryScenarios') || line.includes('phase134RecoveryScenarios')) {
    if (seenScenarios) continue; // skip duplicates
    seenScenarios = true;
    line = '  phase134RecoveryScenarios            Phase134RecoveryScenario[]';
  }
  if (line.includes('bcpRecoveryExecutions') || line.includes('phase134RecoveryExecutions')) {
    if (seenExecs) continue; // skip duplicates
    seenExecs = true;
    line = '  phase134RecoveryExecutions           Phase134RecoveryExecution[]';
  }
  newLines.push(line);
}

// But wait, what if `model BcpRecoveryScenario` is also duplicated?
// Let's just make sure we only have ONE `model BcpRecoveryScenario` and ONE `model Phase134RecoveryScenario`.
let finalLines = [];
let inBcpScen = false;
let keepBcpScen = true;

for (let i = 0; i < newLines.length; i++) {
  let line = newLines[i];
  
  // If we hit `model BcpRecoveryScenario {` and we've already seen it
  if (line.trim() === 'model BcpRecoveryScenario {') {
    if (!keepBcpScen) {
      inBcpScen = true;
      continue;
    }
    keepBcpScen = false; // Next time we see it, we skip it
  }
  
  if (inBcpScen) {
    if (line.trim() === '}') {
      inBcpScen = false;
    }
    continue;
  }
  
  finalLines.push(line);
}

fs.writeFileSync(path, finalLines.join('\n'));
