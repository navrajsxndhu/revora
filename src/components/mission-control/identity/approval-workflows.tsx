"use client";

import React, { useEffect, useState } from "react";
import { GitMerge, ArrowRight, CheckCircle, ShieldAlert } from "lucide-react";

export function ApprovalWorkflows() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/approvals")
      .then(res => res.json())
      .then(d => {
        setWorkflows(d.workflows || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = workflows.length > 0 ? workflows : [
    { id: "WF-101", name: "Privileged Access Esc", steps: ["Direct Manager", "SecOps On-Call"], status: "ACTIVE", type: "Sequential" },
    { id: "WF-102", name: "Production Deploy", steps: ["QA Lead", "Release Mgr"], status: "ACTIVE", type: "Parallel" },
    { id: "WF-103", name: "Emergency Break-Glass", steps: ["VP Eng"], status: "ACTIVE", type: "Immediate" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING WORKFLOWS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <GitMerge className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Approval Workflows</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {data.map(w => (
          <div key={w.id} className="border border-slate-800 rounded bg-slate-950 p-3">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-sm text-slate-200 font-sans font-medium">{w.name}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{w.type} Execution</div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.5 rounded">{w.status}</span>
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded whitespace-nowrap">Request</span>
              <ArrowRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
              {w.steps.map((step: string, idx: number) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center space-x-1 text-[10px] font-mono text-indigo-300 bg-indigo-900/20 border border-indigo-500/30 px-2 py-1 rounded whitespace-nowrap">
                    {w.type === 'Parallel' ? <GitMerge className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                    <span>{step}</span>
                  </div>
                  {idx < w.steps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600 flex-shrink-0" />}
                </React.Fragment>
              ))}
              <ArrowRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/20 px-2 py-1 rounded flex items-center whitespace-nowrap">
                <CheckCircle className="w-3 h-3 mr-1" /> Granted
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
