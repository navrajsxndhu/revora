"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldPlus } from "lucide-react";

interface ContinuityAntibodyFeedProps {
  data: {
    antibodyStrength: number;
    activeAntibodies: number;
    deployedDoctrines: string[];
    evidence: string[];
  } | null;
}

export function ContinuityAntibodyFeed({ data }: ContinuityAntibodyFeedProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldPlus className="h-4 w-4 text-emerald-400" />
          Continuity Antibodies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <div className="flex-1 flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Protection Strength</span>
            <span className="text-xl font-mono text-emerald-400">{data.antibodyStrength.toFixed(1)}%</span>
          </div>
          <div className="flex-1 flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Active Syntheses</span>
            <span className="text-xl font-mono text-slate-200">{data.activeAntibodies}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-medium text-slate-400">Deployed Doctrines:</span>
          {data.deployedDoctrines.length === 0 ? (
            <div className="text-xs text-slate-500 italic">No doctrines deployed.</div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {data.deployedDoctrines.map((doc, idx) => (
                <span key={idx} className="px-2 py-1 bg-emerald-950/30 border border-emerald-800/50 rounded text-xs text-emerald-400">
                  {doc.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
