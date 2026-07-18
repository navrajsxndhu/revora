const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

// Replace new model names
content = content.replace(/model ExecutionStage \{/g, (match, offset) => {
  if (offset > 3000) return 'model OrchestrationStage {';
  return match;
});

content = content.replace(/model ExecutionReplay \{/g, (match, offset) => {
  if (offset > 3000) return 'model OrchestrationReplay {';
  return match;
});

content = content.replace(/executionStages                      ExecutionStage\[\]/, 'orchestrationStages                  OrchestrationStage[]');
content = content.replace(/executionReplays                     ExecutionReplay\[\]/, 'orchestrationReplays                 OrchestrationReplay[]');

fs.writeFileSync(path, content);
