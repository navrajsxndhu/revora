"use client";

import React from "react";
import { PlayCircle, CheckCircle, Clock } from "lucide-react";

export function SimulationExecutions() {
  const execs = [
    { id: "SIM-8492", scenario: "GLOBAL_FAILOVER_TEST", status: "COMPLETED", time: "2h ago" },
    { id: "SIM-8491", scenario: "PAYMENT_GATEWAY_UPGRADE", status: "VALIDATED", time: "5h ago" },
    { id: "SIM-8490", scenario: "IAM_POLICY_REVISION", status: "FAILED_VALIDATION", time: "1d ago" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Active Executions</h2>
        <span className="text-[10px] text-slate-500 font-mono">LAST 24H</span>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
              <th className="pb-2 font-medium">Exec ID</th>
              <th className="pb-2 font-medium">Scenario</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium text-right">Time</th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono text-slate-300">
            {execs.map((e, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="py-2 text-indigo-400">{e.id}</td>
                <td className="py-2">{e.scenario}</td>
                <td className="py-2 flex items-center">
                  {e.status === "COMPLETED" || e.status === "VALIDATED" ? 
                    <CheckCircle className="w-3 h-3 text-emerald-400 mr-1" /> : 
                    <Clock className="w-3 h-3 text-rose-400 mr-1" />}
                  <span className={e.status.includes("FAIL") ? "text-rose-400" : "text-emerald-400"}>{e.status}</span>
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
