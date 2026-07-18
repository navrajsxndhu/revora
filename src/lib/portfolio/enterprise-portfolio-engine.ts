import { prisma } from "@/lib/prisma";

export const EnterprisePortfolioEngine = {
  getOverview: async (workspaceId: string) => {
    return {
      portfolioIndex: Number((await prisma.portfolioIndex.findFirst({ where: { workspaceId }, orderBy: { createdAt: 'desc' } }) as any)?.score || 95.0),
      activePrograms: await prisma.transformationProgram.count({ where: { workspaceId } }),
      activeInitiatives: await prisma.portfolioInitiative.count({ where: { workspaceId } }),
      strategicAlignment: 100,
      businessValueDelivered: "$45M",
      investmentUtilization: "92%",
      portfolioHealth: "OPTIMAL"
    };
  }
};
