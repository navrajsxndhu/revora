"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

export function ConfigurationTimeline() {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-emerald-500" />
          Configuration Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-2">
          <div className="flex flex-col gap-1 relative pl-4 border-l-2 border-emerald-900/50">
            <div className="absolute w-2 h-2 rounded-full bg-emerald-500 -left-[5px] top-1"></div>
            <span className="text-xs text-slate-300">Deployment Config Updated</span>
            <span className="text-[10px] text-slate-500">2 minutes ago</span>
          </div>
          <div className="flex flex-col gap-1 relative pl-4 border-l-2 border-slate-800">
            <div className="absolute w-2 h-2 rounded-full bg-slate-500 -left-[5px] top-1"></div>
            <span className="text-xs text-slate-300">New Asset Discovered: auth-db-replica</span>
            <span className="text-[10px] text-slate-500">1 hour ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
