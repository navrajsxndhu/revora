import { getOperationalAnalytics } from "@/lib/incidents/analytics";

export default async function AnalyticsPage() {
  const data = await getOperationalAnalytics();

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">Operational Stability</h1>
        <p className="text-slate-400 mt-2">Long-term reliability trends and incident resolution metrics.</p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider block mb-1">Mean Time To Resolution</span>
          <span className="text-3xl font-bold text-slate-100">{data.mttrMinutes > 0 ? `${data.mttrMinutes}m` : 'N/A'}</span>
          <p className="text-xs text-slate-400 mt-2">Average time to resolve incidents</p>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider block mb-1">Overall Stability</span>
          <span className="text-3xl font-bold text-emerald-400">{data.deploymentStability}%</span>
          <p className="text-xs text-slate-400 mt-2">Successful workflows vs failures</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider block mb-1">Unresolved Incidents</span>
          <span className="text-3xl font-bold text-amber-400">{data.unresolvedCount}</span>
          <p className="text-xs text-slate-400 mt-2">Currently requiring attention</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg border-l-4 border-l-red-500/50">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider block mb-1">Most Unstable Service</span>
          <span className="text-xl font-bold text-slate-100 truncate block">{data.mostUnstableService}</span>
          <p className="text-xs text-slate-400 mt-2">Linked to {data.unstableServiceIncidentCount} failures</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider block mb-1">Replay Success Rate</span>
          <span className="text-3xl font-bold text-blue-400">{data.replaySuccessRate}%</span>
          <p className="text-xs text-slate-400 mt-2">Successful automated workflow replays</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider block mb-1">Guided Resolutions</span>
          <span className="text-3xl font-bold text-emerald-400">{data.runbookResolutions}</span>
          <p className="text-xs text-slate-400 mt-2">Incidents resolved using standard runbooks</p>
        </div>
      </div>
    </div>
  );
}
