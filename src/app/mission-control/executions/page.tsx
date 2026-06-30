import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";
import { OperationalInsights } from "@/components/mission-control/operational-insights";
import { EmptyState } from "@/components/ui/empty-state";

export default async function ExecutionsPage() {
  const executions = await prisma.workflowExecution.findMany({
    orderBy: { startedAt: 'desc' },
    take: 50,
  });

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">Execution History</h1>
          <p className="text-slate-400 mt-2">Real-time log of all async operational workflows across Revora.</p>
        </header>

        <OperationalInsights />

        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          {executions.length === 0 ? (
            <EmptyState 
              title="Waiting for execution history" 
              description="No operational workflows have been logged yet." 
            />
          ) : (
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-950 text-slate-300 text-xs uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Workflow</th>
                  <th className="px-6 py-4">Started</th>
                  <th className="px-6 py-4">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {executions.map(exec => (
                  <tr key={exec.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(exec.state)}`}>
                        {exec.state}
                      </span>
                         <span className="text-xs text-red-400 mt-1 max-w-xs truncate" title={exec.failureReason}>
                           {exec.failureReason}
                         </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-xs font-mono">{exec.retryCount}</td>
                    <td className="px-6 py-4 font-mono text-xs">
                      {format(exec.startedAt, "yyyy-MM-dd HH:mm:ss")}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {exec.state !== 'QUEUED' && exec.state !== 'PROCESSING' && (
                        <Link 
                          href={`/mission-control/incidents`} 
                          className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors text-xs"
                        >
                          View Incident &rarr;
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
