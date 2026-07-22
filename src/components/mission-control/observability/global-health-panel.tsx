"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

interface GlobalHealthPanelProps {
  health: unknown;
}

export function GlobalHealthPanel({ health }: GlobalHealthPanelProps) {
  if (!health) return null;

  return (
    <Card className="border-fuchsia-900/50 bg-fuchsia-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <HeartPulse className="h-4 w-4 text-fuchsia-400" />
          Global Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div className="flex flex-col items-center border-r border-fuchsia-900/30">
            <span className="text-[10px] text-slate-500 uppercase">Organization</span>
            <span className="font-mono text-2xl text-emerald-400">{health.org}</span>
          </div>
          <div className="flex flex-col items-center border-r border-fuchsia-900/30">
            <span className="text-[10px] text-slate-500 uppercase">Platform</span>
            <span className="font-mono text-2xl text-emerald-400">{health.platform}</span>
          </div>
          <div className="flex flex-col items-center border-r border-fuchsia-900/30">
            <span className="text-[10px] text-slate-500 uppercase">Infra</span>
            <span className="font-mono text-2xl text-emerald-400">{health.infra}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase">Reliability</span>
            <span className="font-mono text-2xl text-emerald-400">{health.reliability}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
