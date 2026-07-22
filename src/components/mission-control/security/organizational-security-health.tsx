"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface OrganizationalSecurityHealthProps {
  health: unknown;
}

export function OrganizationalSecurityHealth({ health }: OrganizationalSecurityHealthProps) {
  if (!health) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Org Security Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Compliance Coverage</span>
            <span className="font-mono text-emerald-400">{health.complianceCoverage}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Policy Adoption</span>
            <span className="font-mono text-emerald-400">{health.policyAdoption}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Infra Protection</span>
            <span className="font-mono text-emerald-400">{health.infraProtection}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Identity Integrity</span>
            <span className="font-mono text-emerald-400">{health.identityIntegrity}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Security Trend</span>
            <span className="font-mono text-indigo-400">{health.trend}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
