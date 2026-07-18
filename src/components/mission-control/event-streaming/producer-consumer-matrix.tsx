"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function ProducerConsumerMatrix() {
  const rels = [
    { producer: "Billing API", consumer: "Finance Ledger", topic: "billing.events", status: "SECURED" },
    { producer: "Onboarding UI", consumer: "Identity Graph", topic: "identity.users", status: "SECURED" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Producer / Consumer Matrix</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[9px] font-mono text-slate-500 uppercase">
              <th className="pb-2">Producer</th>
              <th className="pb-2">Topic</th>
              <th className="pb-2">Consumer</th>
            </tr>
          </thead>
          <tbody className="text-[9px] font-mono text-slate-300">
            {rels.map((r, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2 text-indigo-400">{r.producer}</td>
                <td className="py-2 text-slate-500 flex items-center"><ArrowRight className="w-3 h-3 mx-1 text-slate-600" /> {r.topic} <ArrowRight className="w-3 h-3 mx-1 text-slate-600" /></td>
                <td className="py-2 text-emerald-400">{r.consumer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
