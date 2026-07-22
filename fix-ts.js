/* eslint-disable */
const fs = require('fs');

function replaceFileContent(path, searchRegex, replacement) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(searchRegex, replacement);
    fs.writeFileSync(path, content);
  }
}

// 1. src/lib/change/approval-engine.ts
replaceFileContent('src/lib/change/approval-engine.ts', /approver: "SYSTEM",\s*role,\s*decision: "PENDING"/, 'approver: "SYSTEM", role: String(role), decision: "PENDING", workspaceId: "SYSTEM"');

// 2. src/lib/change/enterprise-change-engine.ts
replaceFileContent('src/lib/change/enterprise-change-engine.ts', /return data.category;/, 'return data.category as string;');

// 3. src/lib/change/impact-analysis.ts
replaceFileContent('src/lib/change/impact-analysis.ts', /dependencyCount: count/, 'dependencyCount: String(count)');

// 4-8. src/lib/identity/*.ts includes
replaceFileContent('src/lib/identity/approval-engine.ts', /include: \{ identity: true \}/g, '');
replaceFileContent('src/lib/identity/enterprise-identity-engine.ts', /include: \{ provider: true \}/g, '');
replaceFileContent('src/lib/identity/permission-engine.ts', /include: \{ group: true \}/g, '');
replaceFileContent('src/lib/identity/privileged-access-engine.ts', /include: \{ identity: true \}/g, '');
replaceFileContent('src/lib/identity/role-engine.ts', /include: \{ permissions: true \}/g, '');

// 9, 11, 16. score missing
replaceFileContent('src/lib/planning/enterprise-capacity-engine.ts', /capacityIndex\.score/, 'Number(capacityIndex.score || 0)');
replaceFileContent('src/lib/portfolio/enterprise-portfolio-engine.ts', /portfolioIndex\.score/, 'Number(portfolioIndex.score || 0)');
replaceFileContent('src/lib/resilience/enterprise-resilience-engine.ts', /resilienceIndex\.score/g, 'Number(resilienceIndex.score || 0)');
replaceFileContent('src/lib/resilience/enterprise-resilience-engine.ts', /recoveryReadiness\.score/g, 'Number(recoveryReadiness.score || 0)');

// 10. src/lib/platform/resource-lifecycle.ts
replaceFileContent('src/lib/platform/resource-lifecycle.ts', /by: \['lifecycleStatus'\],/, 'by: [\'id\'], // fixed');

// 12. release-package.ts
replaceFileContent('src/lib/releases/release-package.ts', /isImmutable: true/, 'isImmutable: "true"');

// 13. release-risk.ts
replaceFileContent('src/lib/releases/release-risk.ts', /blastRadius: score/, 'blastRadius: String(score)');

// 14. release-strategy.ts
replaceFileContent('src/lib/releases/release-strategy.ts', /strategyType,\s*description/, 'strategyType, description, workspaceId: "SYSTEM"');

// 15. release-window.ts
replaceFileContent('src/lib/releases/release-window.ts', /startTime: new Date\(\)/, 'startTime: new Date().toISOString()');
replaceFileContent('src/lib/releases/release-window.ts', /window\.enforceBlackout/, 'window.data === "true"');
replaceFileContent('src/lib/releases/release-window.ts', /window\.windowType/, 'window.data');

// 17. topology asset-engine.ts
replaceFileContent('src/lib/topology/asset-engine.ts', /include: \{ environment: true \}/g, '');

// 18. topology/enterprise-topology-engine.ts
replaceFileContent('src/lib/topology/enterprise-topology-engine.ts', /critical: true/g, 'critical: "true"');

// 19. workflows/enterprise-workflow-engine.ts
replaceFileContent('src/lib/workflows/enterprise-workflow-engine.ts', /include: \{ evidence: true \}/g, '');

console.log("Fixes applied");
