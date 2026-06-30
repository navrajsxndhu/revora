"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface CivilizationCoherenceMapProps {
  data: {
    coherenceScore: number;
    continuityAlignment: number;
    survivabilityAgreement: number;
  } | null;
}

export function CivilizationCoherenceMap({ data }: CivilizationCoherenceMapProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Globe className="h-4 w-4 text-cyan-400" />
          Civilization Coherence Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Systemic Coherence</span>
            <span className="text-cyan-400 font-mono">{data.coherenceScore.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-500 rounded-full" 
              style={{ width: `${data.coherenceScore}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Continuity Alignment</span>
            <span className="text-blue-400 font-mono">{data.continuityAlignment.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${data.continuityAlignment}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Survivability Agreement</span>
            <span className="text-indigo-400 font-mono">{data.survivabilityAgreement.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full" 
              style={{ width: `${data.survivabilityAgreement}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
