"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";

interface ServiceLevelIndicatorsProps {
  slis: any[];
}

export function ServiceLevelIndicators({ slis }: ServiceLevelIndicatorsProps) {
  if (!slis) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Gauge className="h-4 w-4 text-emerald-400" />
          Service Level Indicators
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {slis.map((sli, idx) => (
            <div key={idx} className="flex items-center justify-between bg-slate-950/50 p-2 rounded border border-slate-800">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{sli.metric}</span>
                <span className="text-[9px] text-slate-500 font-mono mt-0.5">{new Date(sli.timestamp).toLocaleTimeString()}</span>
              </div>
              <span className="text-sm font-mono text-emerald-400">{sli.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
