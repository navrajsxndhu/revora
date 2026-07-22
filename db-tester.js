/* eslint-disable */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting DB Validation...');
  try {
    // Attempt to write and read from a core constitutional model
    const registry = await prisma.constitutionalRegistry.create({
      data: {
        workspaceId: 'sys-workspace',
        status: 'CERTIFIED'
      }
    });
    console.log('Created ConstitutionalRegistry:', registry.id);

    const fetched = await prisma.constitutionalRegistry.findUnique({
      where: { id: registry.id }
    });
    console.log('Fetched ConstitutionalRegistry:', fetched.id);

    await prisma.constitutionalRegistry.delete({
      where: { id: registry.id }
    });
    console.log('Deleted ConstitutionalRegistry successfully.');
    console.log('Database CRUD operations validated.');
  } catch (error) {
    console.error('DB Validation Failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
