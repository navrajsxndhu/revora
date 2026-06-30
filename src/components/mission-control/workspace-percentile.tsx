import React from "react";

export function WorkspacePercentile({ percentileData }: { percentileData: { percentile: number, comparison: string } | null }) {
  if (!percentileData) return null;

  const getComparisonColor = (comp: string) => {
    switch (comp) {
      case 'EXCELLENT': return 'text-emerald-400';
      case 'GOOD': return 'text-blue-400';
      default: return 'text-amber-400';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-10">
      <h2 className="text-xl font-medium text-slate-100 mb-2">Workspace Reliability Percentile</h2>
      <p className="text-slate-400 text-sm mb-6">Your aggregated recovery performance compared to the global baseline.</p>
      
      <div className="flex items-end gap-4">
        <div className="text-5xl font-light text-slate-100">{percentileData.percentile}<span className="text-2xl text-slate-500">th</span></div>
        <div className={`text-lg font-medium mb-1 ${getComparisonColor(percentileData.comparison)}`}>
          {percentileData.comparison}
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4 max-w-lg">
        This rank is deterministically calculated by comparing your incident recovery success rates against all other opted-in workspaces.
      </p>
    </div>
  );
}
