import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting deterministic seed sequence...');

  const org = await prisma.organization.upsert({
    where: { id: 'sys-org-1' },
    update: {},
    create: {
      id: 'sys-org-1',
      name: 'Global Enterprise HQ'
    },
  });

  const workspace = await prisma.workspace.upsert({
    where: { id: 'sys-workspace-1' },
    update: {},
    create: {
      id: 'sys-workspace-1',
      name: 'Global Enterprise HQ Workspace',
      organizationId: org.id
    },
  });

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@enterprise.local' },
    update: {},
    create: {
      id: 'usr-admin-1',
      email: 'admin@enterprise.local',
      password: 'securepassword123'
    },
  });

  const constitution = await prisma.constitutionalRegistry.upsert({
    where: { id: 'const-registry-1' },
    update: {},
    create: {
      id: 'const-registry-1',
      workspaceId: workspace.id,
      status: 'CERTIFIED',
    }
  });

  console.log('Deterministic seed complete. Workspace:', workspace.name, 'Admin:', adminUser.email, 'Constitution:', constitution.status);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
