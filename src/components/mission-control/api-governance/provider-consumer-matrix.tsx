"use client";

import React from "react";
import { ArrowRightLeft } from "lucide-react";

export function ProviderConsumerMatrix() {
  const relationships = [
    { provider: "Core Finance", consumer: "Payment Gateway", contract: "v1.4.0", auth: "MTLS" },
    { provider: "CRM Team", consumer: "Marketing Automation", contract: "v2.1.0", auth: "OAUTH2" },
    { provider: "Data Platform", consumer: "Analytics Engine", contract: "v3.0.0", auth: "API_KEY" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Provider / Consumer Matrix</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[9px] font-mono text-slate-500 uppercase">
              <th className="pb-2">Provider</th>
              <th className="pb-2">Consumer</th>
              <th className="pb-2">Contract</th>
            </tr>
          </thead>
          <tbody className="text-[9px] font-mono text-slate-300">
            {relationships.map((rel, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2 text-indigo-400">{rel.provider}</td>
                <td className="py-2 text-emerald-400 flex items-center"><ArrowRightLeft className="w-3 h-3 mr-1 text-slate-600" /> {rel.consumer}</td>
                <td className="py-2 text-slate-400">{rel.contract}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
