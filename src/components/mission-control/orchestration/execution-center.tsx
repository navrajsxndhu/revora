"use client";

import React from "react";
import { PlayCircle, ShieldCheck, Clock } from "lucide-react";

export function ExecutionCenter() {
  const executions = [
    { id: "EXEC-9021", workflow: "GLOBAL_RELEASE", owner: "SYSTEM", status: "RUNNING", stage: "DEPLOY_US_EAST", time: "12m 40s" },
    { id: "EXEC-9020", workflow: "IAM_SYNC", owner: "IDENTITY", status: "VALIDATING", stage: "TWIN_CHECK", time: "45s" },
    { id: "EXEC-9019", workflow: "DB_FAILOVER", owner: "INFRA", status: "COMPLETED", stage: "FINAL_VERIFY", time: "4h ago" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Kernel</h2>
        <span className="text-[9px] text-slate-500 font-mono">DETERMINISTIC LAYER</span>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
              <th className="pb-2 font-medium">Exec ID</th>
              <th className="pb-2 font-medium">Workflow</th>
              <th className="pb-2 font-medium">Stage</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium text-right">Duration</th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono text-slate-300">
            {executions.map((e, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="py-2 text-indigo-400 font-bold">{e.id}</td>
                <td className="py-2">{e.workflow}</td>
                <td className="py-2 text-[10px] text-slate-400">{e.stage}</td>
                <td className="py-2 flex items-center">
                  {e.status === "COMPLETED" ? 
                    <ShieldCheck className="w-3 h-3 text-emerald-400 mr-1" /> : 
                    <PlayCircle className={`w-3 h-3 text-indigo-400 mr-1 ${e.status === 'RUNNING' ? 'animate-pulse' : ''}`} />}
                  <span className={e.status === 'COMPLETED' ? "text-emerald-400" : "text-indigo-400"}>{e.status}</span>
                </td>
                <td className="py-2 text-right text-slate-500">{e.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
