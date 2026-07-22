"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Timer } from "lucide-react";

interface SLADashboardProps {
  sla: any;
}

export function SLADashboard({ sla }: SLADashboardProps) {
  if (!sla) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Timer className="h-4 w-4 text-emerald-400" />
          SLA Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-[10px] text-slate-400 uppercase">Avg Response</span>
            <span className="font-mono text-[10px] text-emerald-400">{sla.avgResponse}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-[10px] text-slate-400 uppercase">Avg Resolution</span>
            <span className="font-mono text-[10px] text-emerald-400">{sla.avgResolution}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-[10px] text-slate-400 uppercase">SLA Compliance</span>
            <span className="font-mono text-[10px] text-emerald-400">{sla.compliance}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-[10px] text-slate-400 uppercase">SLA Breaches</span>
            <span className="font-mono text-[10px] text-emerald-400">{sla.breaches}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-[10px] text-slate-400 uppercase">Escalations</span>
            <span className="font-mono text-[10px] text-emerald-400">{sla.escalations}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-[10px] text-slate-400 uppercase">Queue Health</span>
            <span className="font-mono text-[10px] text-emerald-500 font-bold">{sla.queueHealth}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
