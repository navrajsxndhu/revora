"use client";

import React, { useEffect, useState } from "react";
import { Network, Link2 } from "lucide-react";

export function EvidenceCorrelation() {
  const [correlations, setCorrelations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/correlations")
      .then(res => res.json())
      .then(d => {
        setCorrelations(d.correlations || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = correlations.length > 0 ? correlations : [
    { src: "INC-492", tgt: "REL-2026.4.1", type: "CAUSED_BY", conf: 0.98 },
    { src: "REL-2026.4.1", tgt: "PR-1042", type: "CONTAINS", conf: 1.0 },
    { src: "PR-1042", tgt: "SEC-FINDING-02", type: "RESOLVES", conf: 0.85 },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING CORRELATIONS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Network className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Evidence Correlation</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col space-y-4 justify-center items-center">
        {data.map((c, i) => (
          <div key={i} className="flex items-center space-x-4 w-full justify-center">
            <div className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded text-[10px] font-mono w-28 text-center">{c.src}</div>
            <div className="flex flex-col items-center w-24">
              <span className="text-[8px] text-indigo-400 font-mono mb-1">{c.type}</span>
              <div className="w-full h-[1px] bg-indigo-500/50 relative">
                <Link2 className="w-3 h-3 text-indigo-400 absolute -top-1.5 left-1/2 -translate-x-1/2 bg-slate-900 px-0.5" />
              </div>
              <span className="text-[8px] text-slate-500 font-mono mt-1">CONF: {c.conf}</span>
            </div>
            <div className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded text-[10px] font-mono w-28 text-center">{c.tgt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
