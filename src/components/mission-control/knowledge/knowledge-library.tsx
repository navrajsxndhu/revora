"use client";

import React from "react";
import { FileText, Link2, CheckCircle } from "lucide-react";

export function KnowledgeLibrary() {
  const articles = [
    { title: "Multi-Region DB Failover Protocol", domain: "RESILIENCE", owner: "DBA_TEAM", status: "VERIFIED", rev: "v1.4" },
    { title: "Zero Trust Architecture Standards", domain: "SECURITY", owner: "CISO", status: "VERIFIED", rev: "v2.1" },
    { title: "API Gateway Deprecation Plan", domain: "ARCHITECTURE", owner: "PLATFORM", status: "DRAFT", rev: "v0.9" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Knowledge Library</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {articles.map((art, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center"><FileText className="w-3 h-3 text-indigo-400 mr-2" />{art.title}</div>
              <div className={`text-[9px] font-mono border rounded px-1 ${art.status === 'VERIFIED' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>
                {art.status}
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
              <div>DOM: <span className="text-slate-300">{art.domain}</span> | OWN: {art.owner}</div>
              <div>REV: {art.rev}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
