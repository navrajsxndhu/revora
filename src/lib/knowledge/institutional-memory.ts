import { prisma } from "@/lib/prisma";

export interface MemoryGraphResult {
  totalLinks: number;
  memoryDensity: number;
  graphStatus: string;
  evidence: string[];
}

export async function constructInstitutionalMemory(workspaceId: string): Promise<MemoryGraphResult> {
  const evidence: string[] = [];

  const links = await prisma.institutionalMemoryLink.findMany({
    where: { workspaceId },
    orderBy: { createdAt: "desc" },
    take: 100
  });

  const totalLinks = links.length;
  let memoryDensity = 0.0;
  let graphStatus = "FRAGMENTED";

  if (totalLinks > 50) {
    memoryDensity = 85.0;
    graphStatus = "DENSELY_CONNECTED";
    evidence.push("Institutional memory graph is densely connected, linking incidents directly to constitutional knowledge.");
  } else if (totalLinks > 10) {
    memoryDensity = 45.0;
    graphStatus = "PARTIALLY_CONNECTED";
    evidence.push("Institutional memory graph is partially connected. Knowledge lineage exists but is not comprehensive.");
  } else {
    memoryDensity = 10.0;
    evidence.push("Institutional memory graph is highly fragmented. Severe risk of operational amnesia.");
  }

  return {
    totalLinks,
    memoryDensity,
    graphStatus,
    evidence
  };
}
