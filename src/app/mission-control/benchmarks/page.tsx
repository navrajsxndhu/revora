import { getAllServiceMetrics } from "@/lib/benchmarks/service-benchmarks";
import { scoreService } from "@/lib/benchmarks/reliability-score";
import { getTeamBenchmarks } from "@/lib/benchmarks/team-benchmarks";
import { getReliabilityTrends } from "@/lib/benchmarks/trend-analysis";
import { BenchmarkCard } from "@/components/mission-control/benchmark-card";
import { ReliabilityTrends } from "@/components/mission-control/reliability-trends";

export default async function BenchmarksDashboard() {
  const [serviceMetrics, teamMetrics, trends] = await Promise.all([
    getAllServiceMetrics(),
    getTeamBenchmarks(),
    getReliabilityTrends()
  ]);

  const scoredServices = serviceMetrics.map(metrics => ({
    metrics,
    score: scoreService(metrics)
  })).sort((a, b) => a.score.score - b.score.score); // Lowest score (CRITICAL) first

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 border-b border-slate-900 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">Reliability Benchmarks</h1>
          <p className="text-slate-400 mt-2 text-sm">Deterministic operational intelligence and institutional memory.</p>
        </header>

        <div className="mb-12">
          <ReliabilityTrends trends={trends} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xl font-semibold text-slate-200">Service Reliability Matrix</h2>
            {scoredServices.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg text-center text-slate-500 text-sm">
                No sufficient historical data to calculate service benchmarks.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scoredServices.map(ss => (
                  <BenchmarkCard key={ss.metrics.serviceName} metrics={ss.metrics} score={ss.score} />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-slate-200">Team Analytics</h2>
            
            {teamMetrics.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg text-center text-slate-500 text-sm">
                No teams have owned incidents or deployments recently.
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="py-3 px-4 font-medium uppercase tracking-wider text-[10px]">Team</th>
                      <th className="py-3 px-4 font-medium uppercase tracking-wider text-[10px]">Incidents</th>
                      <th className="py-3 px-4 font-medium uppercase tracking-wider text-[10px]">MTTR</th>
                      <th className="py-3 px-4 font-medium uppercase tracking-wider text-[10px]">Rollbacks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {teamMetrics.map(tm => (
                      <tr key={tm.team} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-medium text-slate-200">{tm.team}</td>
                        <td className="py-3 px-4 text-slate-400">{tm.incidentsOwned}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{Math.round(tm.mttrMinutes)}m</td>
                        <td className="py-3 px-4 text-slate-400">{tm.rollbackCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
