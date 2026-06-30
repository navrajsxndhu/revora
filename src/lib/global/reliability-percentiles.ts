import { canAggregateGlobally } from "./privacy-boundaries";
import { prisma } from "../prisma";

export async function getWorkspacePercentileRank(workspaceId: string) {
  if (!(await canAggregateGlobally())) return null;

  // Mocking percentile ranking math safely bounded to isolated workspaces
  const allWorkspaces = await prisma.workspace.findMany({
    where: { benchmarkOptIn: true },
    include: { incidents: { select: { resolvedSuccessfully: true } } }
  });

  if (allWorkspaces.length < 3) return null;

  const scores = allWorkspaces.map(w => {
    const total = w.incidents.length;
    if (total === 0) return { id: w.id, score: 100 };
    const success = w.incidents.filter(i => i.resolvedSuccessfully).length;
    return { id: w.id, score: (success / total) * 100 };
  });

  scores.sort((a, b) => a.score - b.score);
  
  const rankIndex = scores.findIndex(s => s.id === workspaceId);
  if (rankIndex === -1) return null;

  const percentile = Math.round((rankIndex / Math.max(1, scores.length - 1)) * 100);

  return {
    percentile,
    comparison: percentile >= 80 ? 'EXCELLENT' : percentile >= 50 ? 'GOOD' : 'NEEDS_IMPROVEMENT'
  };
}
