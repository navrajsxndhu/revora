"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

interface SystemicAwarenessGraphProps {
  data: {
    awarenessScore: number;
    coherenceIntegrity: number;
    causalityDensity: number;
    classification: string;
  } | null;
}

export function SystemicAwarenessGraph({ data }: SystemicAwarenessGraphProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-blue-400" />
          Systemic Awareness Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-xs text-slate-500">Coherence Integrity</span>
              <div className="text-xl font-semibold text-slate-200">{data.coherenceIntegrity.toFixed(1)}%</div>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-500">Causality Density</span>
              <div className="text-xl font-semibold text-slate-200">{(data.causalityDensity * 100).toFixed(0)}%</div>
            </div>
          </div>
          
          <div className="p-3 bg-slate-950 rounded border border-slate-800">
            <div className="text-xs text-slate-400 mb-2">Graph State: <span className="text-slate-200 font-medium">{data.classification}</span></div>
            <div className="h-24 w-full flex items-center justify-center opacity-60">
              {/* Abstract visualization of dense causality */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-2 h-2 rounded-full bg-blue-400 z-10 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute border border-blue-500/20 rounded-full"
                    style={{
                      width: `${(i + 1) * 15}%`,
                      height: `${(i + 1) * 20}%`,
                      opacity: data.causalityDensity,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
