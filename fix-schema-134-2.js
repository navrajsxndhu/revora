/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/model RecoveryExecution \{/g, (match, offset) => {
  if (offset > 110000) return 'model BcpRecoveryExecution {';
  return match;
});

content = content.replace(/model RecoveryScenario \{/g, (match, offset) => {
  if (offset > 110000) return 'model BcpRecoveryScenario {';
  return match;
});

content = content.replace(/recoveryExecutions                   RecoveryExecution\[\]/g, (match, offset) => {
  if (offset > 8000) return 'bcpRecoveryExecutions                BcpRecoveryExecution[]';
  return match;
});

content = content.replace(/recoveryScenarios                    RecoveryScenario\[\]/g, (match, offset) => {
  if (offset > 8000) return 'bcpRecoveryScenarios                 BcpRecoveryScenario[]';
  return match;
});

fs.writeFileSync(path, content);
