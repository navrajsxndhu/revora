/* eslint-disable */
const fs = require('fs');
const path = require('path');

const backendDir = 'src/lib/configuration-governance';
const apiDir = 'src/app/api/configuration-governance';

if (!fs.existsSync(backendDir)) fs.mkdirSync(backendDir, { recursive: true });
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir, { recursive: true });

const engines = [
  'enterprise-configuration-engine.ts',
  'configuration-engine.ts',
  'environment-engine.ts',
  'secret-engine.ts',
  'certificate-engine.ts',
  'encryption-engine.ts',
  'rotation-engine.ts',
  'template-engine.ts',
  'approval-engine.ts',
  'validation-engine.ts',
  'configuration-ledger.ts',
  'configuration-health-engine.ts',
  'configuration-simulator.ts',
  'configuration-index.ts',
  'configuration-evidence.ts',
  'configuration-assessment-engine.ts'
];

engines.forEach(engine => {
  const modelMatch = engine.replace('-engine.ts', '').replace('.ts', '').replace(/-/g, '');
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
  'configurations',
  'environments',
  'templates',
  'secrets',
  'providers',
  'certificates',
  'encryption',
  'rotation',
  'validation',
  'approvals',
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
    const data = await prisma.enterpriseConfiguration.findMany({ where: { workspaceId } as any });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
`;
  fs.writeFileSync(path.join(routeDir, 'route.ts'), content);
});

console.log("Backend and API generated successfully.");
