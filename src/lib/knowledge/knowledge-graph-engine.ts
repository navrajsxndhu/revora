import { prisma } from "@/lib/prisma";

export const KnowledgeGraphEngine = {
  getGraph: async (workspaceId: string) => {
    const nodes = await prisma.knowledgeGraphNode.findMany({ where: { workspaceId } });
    const edges = await prisma.knowledgeGraphEdge.findMany({ where: { workspaceId } });
    return { nodes, edges };
  }
};
