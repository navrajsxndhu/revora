"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ApprovalCenterProps {
  approvals: unknown;
}

export function ApprovalCenter({ approvals }: ApprovalCenterProps) {
  if (!approvals) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Approval Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {approvals.map((app: unknown, idx: number) => (
            <div key={idx} className="flex justify-between items-center p-2 border-b border-slate-800/50 last:border-0 pb-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-300">{app.request}</span>
                <span className="text-[10px] text-slate-500">{app.role} ({app.approver})</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-[10px] font-mono px-1 rounded ${app.status === 'APPROVED' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'}`}>
                  {app.status}
                </span>
                <span className="text-[9px] font-mono text-slate-600">EVD: {app.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
