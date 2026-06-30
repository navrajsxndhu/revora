"use client";

import React, { useEffect, useState } from 'react';

type Insights = {
  mostUnstableService: string;
  criticalCount: number;
  autoReplayedCount: number;
};

export function OperationalInsights() {
  const [insights, setInsights] = useState<Insights | null>(null);

  useEffect(() => {
    // In a real app this would fetch from an API route that calls getOperationalInsights()
    // Mocking the fetch for this component layout
    setInsights({
      mostUnstableService: "API Gateway",
      criticalCount: 2,
      autoReplayedCount: 1,
    });
  }, []);

  if (!insights) return <div className="h-24 bg-slate-900 animate-pulse rounded-lg border border-slate-800 mb-8" />;

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col justify-between">
        <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Unstable Service</span>
        <span className="text-xl font-bold text-slate-200 mt-2">{insights.mostUnstableService}</span>
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col justify-between">
        <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Critical Incidents</span>
        <span className="text-xl font-bold text-red-400 mt-2">{insights.criticalCount}</span>
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col justify-between">
        <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Auto-Replays</span>
        <span className="text-xl font-bold text-blue-400 mt-2">{insights.autoReplayedCount}</span>
      </div>
    </div>
  );
}
