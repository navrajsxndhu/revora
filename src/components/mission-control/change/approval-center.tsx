"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ApprovalCenterProps {
  approvals: unknown[];
}

export function ApprovalCenter({ approvals }: ApprovalCenterProps) {
  if (!approvals) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          Approval Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {approvals.map((approval, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{approval.role}</span>
                <span className="text-[10px] text-slate-500 font-mono mt-0.5">By: {approval.approver}</span>
              </div>
              <span className={`px-2 py-0.5 rounded font-mono text-[10px] border ${
                approval.status === 'APPROVED' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-slate-900 text-slate-400 border-slate-700'
              }`}>
                {approval.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
