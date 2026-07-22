"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface IdentityGovernanceProps {
  identity: unknown;
}

export function IdentityGovernance({ identity }: IdentityGovernanceProps) {
  if (!identity) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-400" />
          Identity Governance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">MFA Adoption</span>
            <span className="font-mono text-lg text-emerald-400">{identity.mfaAdoption}%</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Privileged Users</span>
            <span className="font-mono text-lg text-slate-300">{identity.privilegedUsers}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Service Accounts</span>
            <span className="font-mono text-lg text-slate-300">{identity.serviceAccounts}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Access Violations</span>
            <span className={`font-mono text-lg ${identity.accessViolations > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {identity.accessViolations}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
