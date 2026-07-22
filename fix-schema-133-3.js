/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

// Restore original at 1378 & 1397
content = content.replace(/model OrchestrationStage \{/g, (match, offset) => {
  if (offset < 80000) return 'model ExecutionStage {'; // restore the original
  return 'model AopExecutionStage {'; // rename the new one
});

content = content.replace(/model OrchestrationReplay \{/g, (match, offset) => {
  if (offset < 80000) return 'model ExecutionReplay {'; // restore the original
  return 'model AopExecutionReplay {'; // rename the new one
});

// the new models were inserted at the end of the file, around 110,000 chars in. 
// However, the first script might not have successfully renamed the new models if they were named ExecutionStage before my script ran. Wait, the first script renamed them to OrchestrationStage.
// Let's also check if they are still ExecutionStage
content = content.replace(/model ExecutionStage \{/g, (match, offset) => {
  if (offset > 80000) return 'model AopExecutionStage {';
  return match;
});

content = content.replace(/model ExecutionReplay \{/g, (match, offset) => {
  if (offset > 80000) return 'model AopExecutionReplay {';
  return match;
});

content = content.replace(/orchestrationStages                  OrchestrationStage\[\]/g, 'aopExecutionStages                   AopExecutionStage[]');
content = content.replace(/orchestrationReplays                 OrchestrationReplay\[\]/g, 'aopExecutionReplays                  AopExecutionReplay[]');

content = content.replace(/executionStages                      ExecutionStage\[\]/g, (match, offset) => {
  if (offset > 80000) return 'aopExecutionStages                   AopExecutionStage[]';
  return match;
});

content = content.replace(/executionReplays                     ExecutionReplay\[\]/g, (match, offset) => {
  if (offset > 80000) return 'aopExecutionReplays                  AopExecutionReplay[]';
  return match;
});

fs.writeFileSync(path, content);
