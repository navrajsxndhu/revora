"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link2 } from "lucide-react";

export function ExternalSystemsMatrix() {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Link2 className="h-4 w-4 text-emerald-400" />
          Deterministic External Architecture
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
          {['GITHUB', 'KUBERNETES', 'DATADOG', 'JIRA', 'GITHUB_ACTIONS', 'TERRAFORM', 'GITLAB', 'LINEAR'].map((sys, idx) => {
            const isSupported = idx < 5;
            return (
              <div key={idx} className={`p-2 rounded border flex flex-col gap-1 items-center justify-center text-center ${isSupported ? 'bg-slate-950/50 border-emerald-800/50 text-emerald-400' : 'bg-slate-950/20 border-slate-800/20 text-slate-600'}`}>
                <span className="text-[10px] font-semibold uppercase tracking-wider">{sys}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
