"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

interface ReleaseHistoryProps {
  history: any[];
}

export function ReleaseHistory({ history }: ReleaseHistoryProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-slate-400" />
          Immutable Release Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        {history && history.length > 0 ? (
          <div className="space-y-3 mt-2">
            {history.map((release, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{release.releaseName}</span>
                  <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${release.status === 'COMPLETED' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/50' : 'bg-slate-900 text-slate-400 border border-slate-700'}`}>
                    {release.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-slate-500">Readiness:</span>
                  <span className="text-emerald-400 font-mono">{release.readinessScore}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Governance:</span>
                  <span className="text-emerald-400 font-mono text-[10px] tracking-wider">{release.governanceStatus}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No historical releases found.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
