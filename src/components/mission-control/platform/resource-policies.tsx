"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

interface ResourcePoliciesProps {
  policies: any[];
}

export function ResourcePolicies({ policies }: ResourcePoliciesProps) {
  if (!policies) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Resource Policies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {policies.map((policy, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{policy.name}</span>
                <span className="font-mono text-[9px] px-1 py-0.5 rounded border border-rose-800 text-rose-400 bg-rose-950/30">
                  {policy.level}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Constraint: <span className="text-slate-300 font-mono">{policy.constraint}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
