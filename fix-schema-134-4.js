const fs = require('fs');
const path = './prisma/schema.prisma';
let lines = fs.readFileSync(path, 'utf8').split('\n');
let keep = [];
let inDup = false;

for (let i = 0; i < lines.length; i++) {
  if (i === 3680 && lines[i].includes('model Phase134RecoveryScenario {')) {
    inDup = true;
  }
  if (inDup) {
    if (lines[i].includes('}')) {
      inDup = false;
    }
    continue;
  }
  keep.push(lines[i]);
}

fs.writeFileSync(path, keep.join('\n'));
