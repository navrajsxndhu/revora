"use client";

import React from "react";
import { Link, Shield } from "lucide-react";

export function EnterpriseApiRegistry() {
  const apis = [
    { name: "Customer Profile API", version: "v2.1.0", provider: "CRM Team", auth: "OAUTH2", status: "ACTIVE" },
    { name: "Transaction Ledger API", version: "v1.4.0", provider: "Core Finance", auth: "MTLS", status: "ACTIVE" },
    { name: "Market Data Gateway", version: "v3.0.0", provider: "Data Platform", auth: "API_KEY", status: "DEPRECATED" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise API Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {apis.map((api, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center"><Link className="w-3 h-3 text-indigo-400 mr-2" />{api.name}</div>
              <div className={`text-[9px] font-mono border rounded px-1 ${api.status === 'ACTIVE' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>
                {api.status}
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
              <div>VER: <span className="text-slate-300">{api.version}</span> | PRV: {api.provider}</div>
              <div className="flex items-center"><Shield className="w-3 h-3 mr-1 text-slate-500" />{api.auth}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
