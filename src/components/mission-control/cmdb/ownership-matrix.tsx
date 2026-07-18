"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export function OwnershipMatrix() {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-400" />
          Ownership Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          <div className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs font-semibold text-slate-300">Core Platform</span>
            <span className="text-[10px] text-slate-400">142 Assets</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs font-semibold text-slate-300">Frontend</span>
            <span className="text-[10px] text-slate-400">45 Assets</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs font-semibold text-slate-300">Data Engineering</span>
            <span className="text-[10px] text-slate-400">89 Assets</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
