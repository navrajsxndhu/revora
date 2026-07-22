"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

interface ServiceLevelObjectivesProps {
  slos: any[];
}

export function ServiceLevelObjectives({ slos }: ServiceLevelObjectivesProps) {
  if (!slos) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Target className="h-4 w-4 text-indigo-400" />
          Service Level Objectives
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {slos.map((slo, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{slo.name}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded border ${
                  slo.status === 'HEALTHY' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-rose-950 text-rose-400 border-rose-800'
                }`}>
                  {slo.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <div className="flex flex-col">
                  <span className="text-slate-500">Target</span>
                  <span className="font-mono text-slate-300">{slo.target}%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500">Current</span>
                  <span className="font-mono text-slate-300">{slo.current}%</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-slate-500">Deviation</span>
                  <span className={`font-mono ${slo.deviation.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {slo.deviation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
