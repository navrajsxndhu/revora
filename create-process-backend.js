const fs = require('fs');
const path = require('path');

const backendDir = 'src/lib/process-governance';
const apiDir = 'src/app/api/process-governance';

if (!fs.existsSync(backendDir)) fs.mkdirSync(backendDir, { recursive: true });
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir, { recursive: true });

const engines = [
  'enterprise-process-engine.ts',
  'business-process-engine.ts',
  'procedure-engine.ts',
  'workflow-engine.ts',
  'decision-gate-engine.ts',
  'control-engine.ts',
  'business-rule-engine.ts',
  'dependency-engine.ts',
  'execution-engine.ts',
  'approval-engine.ts',
  'validation-engine.ts',
  'process-ledger.ts',
  'process-health-engine.ts',
  'process-simulator.ts',
  'process-index.ts',
  'process-assessment-engine.ts'
];

engines.forEach(engine => {
  const content = `import { prisma } from "@/lib/prisma";

export const ${engine.replace('.ts', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')} = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
`;
  fs.writeFileSync(path.join(backendDir, engine), content);
});

const routes = [
  'overview',
  'processes',
  'procedures',
  'workflows',
  'decision-gates',
  'control-points',
  'business-rules',
  'executions',
  'validation',
  'approvals',
  'history',
  'index',
  'assessments',
  'compliance',
  'simulate'
];

routes.forEach(route => {
  const routeDir = path.join(apiDir, route);
  if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
  const content = `import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const workspaceId = "ws-123";
    const data = await prisma.businessProcess.findMany({ where: { workspaceId } as any });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
`;
  fs.writeFileSync(path.join(routeDir, 'route.ts'), content);
});

console.log("Process Governance backend and API generated successfully.");
