"use client";

import React, { useEffect, useState } from "react";
import { DollarSign, ShieldAlert, TrendingDown } from "lucide-react";

export function BusinessImpactCenter() {
  const [impacts, setImpacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/business-impact")
      .then(res => res.json())
      .then(d => {
        setImpacts(d.impacts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = impacts.length > 0 ? impacts : [
    { target: "Payment API Latency", type: "Revenue Risk", exposure: 45000, trend: "up" },
    { target: "Unoptimized S3 Buckets", type: "Operational Cost", exposure: 12400, trend: "down" },
    { target: "Legacy Auth Deprecation", type: "Security Exposure", exposure: 250000, trend: "flat" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING IMPACTS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <TrendingDown className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Business Impact Center</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((imp, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded">
            <div>
              <div className="text-xs font-sans font-medium text-slate-200">{imp.target}</div>
              <div className="text-[9px] font-mono text-slate-500">{imp.type}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold font-mono text-rose-400 flex items-center justify-end">
                <DollarSign className="w-3 h-3 mr-0.5" />{imp.exposure.toLocaleString()}
              </div>
              <div className="text-[9px] text-slate-600 font-mono">FINANCIAL EXPOSURE</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
