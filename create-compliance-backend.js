/* eslint-disable */
const fs = require('fs');
const path = require('path');

const backendDir = 'src/lib/compliance';
const apiDir = 'src/app/api/compliance';

if (!fs.existsSync(backendDir)) fs.mkdirSync(backendDir, { recursive: true });
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir, { recursive: true });

const engines = [
  'enterprise-compliance-engine.ts',
  'framework-engine.ts',
  'regulation-engine.ts',
  'control-engine.ts',
  'control-testing-engine.ts',
  'audit-engine.ts',
  'finding-engine.ts',
  'remediation-engine.ts',
  'certification-engine.ts',
  'assessment-engine.ts',
  'compliance-validation-engine.ts',
  'compliance-ledger.ts',
  'compliance-health-engine.ts',
  'compliance-simulator.ts',
  'compliance-index.ts',
  'compliance-evidence.ts'
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
  'frameworks',
  'regulations',
  'requirements',
  'controls',
  'tests',
  'audits',
  'findings',
  'remediation',
  'certifications',
  'validation',
  'history',
  'index',
  'assessments',
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
    const data = await prisma.complianceFramework.findMany({ where: { workspaceId } as any });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
`;
  fs.writeFileSync(path.join(routeDir, 'route.ts'), content);
});

console.log("Compliance backend and API generated successfully.");
