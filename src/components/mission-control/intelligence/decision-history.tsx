"use client";

import React, { useEffect, useState } from "react";
import { History, ShieldCheck, CheckCircle } from "lucide-react";

export function DecisionHistory() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/history")
      .then(res => res.json())
      .then(d => {
        setHistory(d.history || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = history.length > 0 ? history : [
    { decision: "Approve Cloud Migration Budget Increase", approver: "CFO", evidence: "FinOps Cost Model V2", outcome: "Executed", time: "2 days ago" },
    { decision: "Override IAM Policy for Emergency Deploy", approver: "CISO", evidence: "Incident #492 Post-Mortem", outcome: "Reverted", time: "5 days ago" },
    { decision: "Deprecate Legacy HR Portal", approver: "CTO", evidence: "Usage Metrics & Security Risk Score", outcome: "In Progress", time: "1 week ago" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING DECISION LEDGER...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <History className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Decision Ledger</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((h, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800/50 pb-2 hover:bg-slate-800/20 px-2 rounded">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm font-sans font-medium text-slate-200">{h.decision}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Evidence: {h.evidence}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-300 font-sans">{h.outcome}</div>
              <div className="text-[9px] text-indigo-400 font-mono mt-0.5">Approver: {h.approver} | {h.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
