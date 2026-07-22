import React from "react";

export function ReliabilityTrends({ trends }: { trends: any }) {
  const getTrendIcon = (trend: string) => {
    if (trend === 'IMPROVING') return <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>;
    if (trend === 'DEGRADING') return <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"></path></svg>;
    return <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path></svg>;
  };

  const getTrendColor = (trend: string) => {
    if (trend === 'IMPROVING') return 'text-emerald-400';
    if (trend === 'DEGRADING') return 'text-red-400';
    return 'text-slate-400';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-slate-100 mb-6">7-Day Trajectory</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-2">Platform MTTR</span>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-mono text-slate-200">{Math.round(trends.mttr.current)}m</span>
            <div className={`flex items-center space-x-1 ${getTrendColor(trends.mttr.trend)}`}>
              {getTrendIcon(trends.mttr.trend)}
              <span className="text-xs font-bold uppercase tracking-wide">{trends.mttr.trend}</span>
            </div>
          </div>
          <span className="block text-xs text-slate-500 mt-1">Prev 7d: {Math.round(trends.mttr.previous)}m</span>
        </div>

        <div>
          <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-2">Avg Blast Radius</span>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-mono text-slate-200">{trends.blastRadius.current.toFixed(1)}</span>
            <div className={`flex items-center space-x-1 ${getTrendColor(trends.blastRadius.trend)}`}>
              {getTrendIcon(trends.blastRadius.trend)}
              <span className="text-xs font-bold uppercase tracking-wide">{trends.blastRadius.trend}</span>
            </div>
          </div>
          <span className="block text-xs text-slate-500 mt-1">Prev 7d: {trends.blastRadius.previous.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}
