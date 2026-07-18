"use client";

import React from "react";
import { Zap } from "lucide-react";

export function EnterpriseEventRegistry() {
  const events = [
    { name: "PaymentProcessedEvent", producer: "Payment Gateway", consumer: "Ledger Service", topic: "finance.payments", status: "VALIDATED" },
    { name: "UserRegisteredEvent", producer: "Identity Service", consumer: "CRM, Analytics", topic: "iam.users", status: "VALIDATED" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Event Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {events.map((evt, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center"><Zap className="w-3 h-3 text-emerald-400 mr-2" />{evt.name}</div>
              <div className="text-[9px] font-mono border rounded px-1 border-emerald-900 text-emerald-400 bg-emerald-950/30">
                {evt.status}
              </div>
            </div>
            <div className="text-[9px] font-mono text-slate-400">
              PRD: {evt.producer} <br />
              CON: {evt.consumer} <br />
              TOPIC: {evt.topic}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
