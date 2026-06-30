import { prisma } from "@/lib/prisma";

export async function RecoveryAnalytics() {
  const resolvedIncidents = await prisma.incident.findMany({
    where: { state: "RESOLVED" },
    select: { id: true, createdAt: true, updatedAt: true, activeRunbookId: true }
  });

  const replays = await prisma.auditLog.findMany({
    where: { eventType: "REMEDIATION_REPLAY_WORKFLOW" }
  });

  const successfulReplays = replays.filter(r => r.status === "SUCCESS").length;
  const replaySuccessRate = replays.length > 0 ? Math.round((successfulReplays / replays.length) * 100) : 0;

  const validIncidents = resolvedIncidents.filter(i => i.updatedAt);
  const totalRecoveryTimeMs = validIncidents.reduce((acc, i) => acc + (i.updatedAt!.getTime() - i.createdAt.getTime()), 0);
  const avgRecoveryMins = validIncidents.length > 0 ? Math.round(totalRecoveryTimeMs / validIncidents.length / 60000) : 0;

  const runbookResolutions = validIncidents.filter(i => i.activeRunbookId).length;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg mb-8">
      <h2 className="text-lg font-semibold text-slate-200 mb-6">Recovery Analytics</h2>
      <div className="grid grid-cols-4 gap-6">
        <div>
           <p className="text-slate-500 text-sm mb-1">Mean Time to Resolution</p>
           <p className="text-3xl font-light text-slate-100">{avgRecoveryMins}<span className="text-lg text-slate-500 ml-1">m</span></p>
        </div>
        <div>
           <p className="text-slate-500 text-sm mb-1">Replay Success Rate</p>
           <p className="text-3xl font-light text-slate-100">{replaySuccessRate}<span className="text-lg text-slate-500 ml-1">%</span></p>
        </div>
        <div>
           <p className="text-slate-500 text-sm mb-1">Total Incidents Resolved</p>
           <p className="text-3xl font-light text-slate-100">{validIncidents.length}</p>
        </div>
        <div>
           <p className="text-slate-500 text-sm mb-1">Guided Runbook Resolutions</p>
           <p className="text-3xl font-light text-emerald-400">{runbookResolutions}</p>
        </div>
      </div>
    </div>
  );
}
