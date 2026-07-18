import { prisma } from "@/lib/prisma";

export async function getServiceCatalog(workspaceId: string) {
  return await prisma.serviceCatalog.findMany({
    where: { workspaceId }
  });
}
