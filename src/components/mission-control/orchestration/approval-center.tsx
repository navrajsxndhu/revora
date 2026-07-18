"use client";

import React from "react";
import { CheckSquare, XSquare, Clock } from "lucide-react";

export function ApprovalCenter() {
  const approvals = [
    { target: "EXEC-9021", policy: "GOV_RELEASE_REQ", decision: "APPROVED", approver: "SEC_OPS" },
    { target: "EXEC-9022", policy: "DB_DROP_PROD", decision: "REJECTED", approver: "DBA_LEAD" },
    { target: "EXEC-9023", policy: "IAM_ELEVATE", decision: "PENDING", approver: "CISO" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Approvals</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {approvals.map((a, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded">
            <div>
              <div className="text-xs text-indigo-400 font-mono font-bold mb-1">{a.target}</div>
              <div className="text-[9px] text-slate-500 font-mono">POLICY: {a.policy}</div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                {a.decision === 'APPROVED' && <CheckSquare className="w-3 h-3 text-emerald-400 mr-1" />}
                {a.decision === 'REJECTED' && <XSquare className="w-3 h-3 text-rose-400 mr-1" />}
                {a.decision === 'PENDING' && <Clock className="w-3 h-3 text-amber-400 mr-1" />}
                <span className={`text-[10px] font-mono ${a.decision === 'APPROVED' ? 'text-emerald-400' : a.decision === 'REJECTED' ? 'text-rose-400' : 'text-amber-400'}`}>
                  {a.decision}
                </span>
              </div>
              <div className="text-[9px] text-slate-600 font-mono">BY: {a.approver}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
