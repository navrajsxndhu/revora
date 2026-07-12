"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface GovernanceIntegrityChartProps {
  data: {
    purityScore: number;
    corruptionExposure: number;
    integrityConfidence: number;
  } | null;
}

export function GovernanceIntegrityChart({ data }: GovernanceIntegrityChartProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-blue-400" />
          Governance Integrity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Purity Score</span>
            <span className="text-blue-400 font-mono">{data.purityScore.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${data.purityScore}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Corruption Exposure</span>
            <span className="text-rose-400 font-mono">{data.corruptionExposure.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-rose-500 rounded-full" 
              style={{ width: `${data.corruptionExposure}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Integrity Confidence</span>
            <span className="text-indigo-400 font-mono">{data.integrityConfidence.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full" 
              style={{ width: `${data.integrityConfidence}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
