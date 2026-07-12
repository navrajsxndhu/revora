"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";

interface ApprovalMatrixProps {
  approvals: any[];
}

export function ApprovalMatrix({ approvals }: ApprovalMatrixProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <CheckSquare className="h-4 w-4 text-indigo-400" />
          Mandatory Approvals
        </CardTitle>
      </CardHeader>
      <CardContent>
        {approvals && approvals.length > 0 ? (
          <div className="space-y-2 mt-2">
            {approvals.map((app, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
                <span className="text-xs font-semibold text-slate-300">{app.approverRole}</span>
                <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${app.status === 'APPROVED' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/50' : 'bg-amber-950/50 text-amber-400 border border-amber-800/50'}`}>
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No mandatory approvals configured for active releases.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
