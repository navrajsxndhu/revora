"use client";

import React from "react";
import { User } from "lucide-react";

export function OwnershipCenter() {
  const owners = [
    { name: "Chief Data Officer", bu: "EXECUTIVE", domain: "ENTERPRISE", status: "APPROVED" },
    { name: "VP Finance", bu: "FINANCE", domain: "FINANCE", status: "APPROVED" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Ownership Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {owners.map((own, i) => (
          <div key={i} className="flex justify-between items-center p-2 border border-slate-800 bg-slate-950 rounded">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center"><User className="w-3 h-3 mr-2 text-indigo-400" />{own.name}</div>
              <div className="text-[9px] text-slate-500 font-mono">{own.bu} | {own.domain}</div>
            </div>
            <div className="text-[8px] font-mono px-1 rounded border border-emerald-900 text-emerald-400 bg-emerald-950/30">
              {own.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
