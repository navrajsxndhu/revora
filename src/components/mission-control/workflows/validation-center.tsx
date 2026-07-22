"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

interface ValidationCenterProps {
  validation: any;
}

export function ValidationCenter({ validation }: ValidationCenterProps) {
  if (!validation) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Validation Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-xs text-slate-400">Constitution</span>
            <span className="font-mono text-[10px] text-emerald-400">{validation.constitution}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-xs text-slate-400">Security</span>
            <span className="font-mono text-[10px] text-emerald-400">{validation.security}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-xs text-slate-400">Reliability</span>
            <span className="font-mono text-[10px] text-emerald-400">{validation.reliability}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-xs text-slate-400">Treasury</span>
            <span className="font-mono text-[10px] text-emerald-400">{validation.treasury}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-xs text-slate-400">Release Readiness</span>
            <span className="font-mono text-[10px] text-emerald-400">{validation.release}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
            <span className="text-xs text-slate-400">Change Approval</span>
            <span className="font-mono text-[10px] text-emerald-400">{validation.change}</span>
          </div>
          <div className="col-span-2 flex justify-between items-center mt-2 p-2 bg-slate-950/50 rounded border border-emerald-900/30">
            <span className="text-xs text-slate-300">Overall Status</span>
            <span className="font-mono text-xs text-emerald-500 font-bold">{validation.status}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
