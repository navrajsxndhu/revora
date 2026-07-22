"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface SecurityPosturePanelProps {
  posture: unknown;
}

export function SecurityPosturePanel({ posture }: SecurityPosturePanelProps) {
  if (!posture) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Shield className="h-4 w-4 text-indigo-400" />
          Security Posture
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div className="flex flex-col items-center border-r border-indigo-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Global Score</span>
            <span className="font-mono text-2xl text-emerald-400">{posture.globalScore}</span>
          </div>
          <div className="flex flex-col items-center border-r border-indigo-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Compliance</span>
            <span className="font-mono text-2xl text-emerald-400">{posture.compliance}</span>
          </div>
          <div className="flex flex-col items-center border-r border-indigo-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Identity</span>
            <span className="font-mono text-2xl text-emerald-400">{posture.identity}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Infrastructure</span>
            <span className="font-mono text-2xl text-emerald-400">{posture.infra}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
