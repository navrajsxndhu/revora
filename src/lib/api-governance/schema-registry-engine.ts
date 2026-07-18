import { prisma } from "@/lib/prisma";

export const SchemaRegistryEngine = {
  getSchemas: async (workspaceId: string) => {
    return prisma.schemaRegistry.findMany({ where: { workspaceId } });
  }
};
