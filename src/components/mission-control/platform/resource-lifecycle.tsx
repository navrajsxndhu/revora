"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ResourceLifecycleProps {
  lifecycle: any;
}

export function ResourceLifecycle({ lifecycle }: ResourceLifecycleProps) {
  if (!lifecycle) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Resource Lifecycle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col items-center border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Provisioned</span>
            <span className="font-mono text-lg text-emerald-400">{lifecycle.provisioned}</span>
          </div>
          <div className="flex flex-col items-center border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Scaling</span>
            <span className="font-mono text-lg text-amber-400">{lifecycle.scaling}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Updating</span>
            <span className="font-mono text-lg text-indigo-400">{lifecycle.updating}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Archived</span>
            <span className="font-mono text-lg text-slate-400">{lifecycle.archived}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
