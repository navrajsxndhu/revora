"use client";

import React from "react";
import { GitPullRequest } from "lucide-react";

export function TelemetryCorrelation() {
  const correlations = [
    { target: "Payment Processing Latency", metric: "CPU Utilization", trace: "trace-424a", alert: "NONE" },
    { target: "Identity Service Errors", log: "ERR_AUTH_500", trace: "trace-911b", alert: "Active_Severity_1" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Telemetry Correlation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[9px] font-mono text-slate-500 uppercase">
              <th className="pb-2">Target</th>
              <th className="pb-2">Correlation Signal</th>
              <th className="pb-2">Alert</th>
            </tr>
          </thead>
          <tbody className="text-[9px] font-mono text-slate-300">
            {correlations.map((rel, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2 text-indigo-400">{rel.target}</td>
                <td className="py-2 text-slate-400 flex items-center"><GitPullRequest className="w-3 h-3 mr-1 text-slate-600" /> {rel.metric || rel.log} + {rel.trace}</td>
                <td className="py-2 text-amber-400">{rel.alert}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
