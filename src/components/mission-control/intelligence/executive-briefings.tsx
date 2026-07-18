"use client";

import React, { useEffect, useState } from "react";
import { FileText, Download } from "lucide-react";

export function ExecutiveBriefings() {
  const [briefings, setBriefings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/briefings")
      .then(res => res.json())
      .then(d => {
        setBriefings(d.briefings || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = briefings.length > 0 ? briefings : [
    { title: "Weekly Operational Health Summary", status: "PUBLISHED", date: "2026-07-12" },
    { title: "Incident Post-Mortem: Payment Gateway Outage", status: "PUBLISHED", date: "2026-07-10" },
    { title: "Q3 Cloud Cost Optimization Report", status: "DRAFT", date: "2026-07-13" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING BRIEFINGS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Executive Briefings</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((b, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded flex justify-between items-center">
            <div>
              <div className="text-xs font-sans font-medium text-slate-200">{b.title}</div>
              <div className="flex items-center space-x-3 mt-1">
                <span className={`text-[9px] font-mono ${b.status === 'PUBLISHED' ? 'text-emerald-400' : 'text-amber-400'}`}>{b.status}</span>
                <span className="text-[9px] text-slate-500 font-mono">{b.date}</span>
              </div>
            </div>
            <button className="text-slate-500 hover:text-indigo-400 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
