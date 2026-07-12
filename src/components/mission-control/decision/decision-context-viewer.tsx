"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

interface DecisionContextViewerProps {
  context: {
    activeRisks: number;
    availableCapacity: number;
    constitutionalConstraints: string[];
    operationalConstraints: string[];
  } | null;
}

export function DecisionContextViewer({ context }: DecisionContextViewerProps) {
  if (!context) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-rose-400" />
          Active Decision Constraints
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 mt-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Active Operational Risks</span>
            <span className={`text-xl font-mono ${context.activeRisks > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {context.activeRisks}
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Available Capacity</span>
            <span className="text-xl font-mono text-blue-400">{context.availableCapacity}%</span>
          </div>
          
          <div className="space-y-3 mt-2">
            <div>
              <span className="text-xs text-slate-500 mb-1 block">Constitutional Limits:</span>
              {context.constitutionalConstraints.length > 0 ? (
                <ul className="text-sm text-slate-300 list-disc pl-4 space-y-1">
                  {context.constitutionalConstraints.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              ) : (
                <span className="text-sm text-slate-500 italic">No hard constitutional limits active.</span>
              )}
            </div>
            
            <div>
              <span className="text-xs text-slate-500 mb-1 block">Operational Constraints:</span>
              {context.operationalConstraints.length > 0 ? (
                <ul className="text-sm text-slate-300 list-disc pl-4 space-y-1">
                  {context.operationalConstraints.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              ) : (
                <span className="text-sm text-slate-500 italic">No active operational constraints.</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
