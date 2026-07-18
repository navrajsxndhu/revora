"use client";

import React, { useEffect, useState } from "react";
import { Wifi, ShieldAlert } from "lucide-react";

export function NetworkTopology() {
  const [network, setNetwork] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/network")
      .then(res => res.json())
      .then(d => {
        setNetwork(d.zones || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = network.length > 0 ? network : [
    { zone: "Public DMZ", level: "Low", ingress: "Open", egress: "Strict", status: "HEALTHY" },
    { zone: "App Tier", level: "Medium", ingress: "Internal", egress: "Restricted", status: "HEALTHY" },
    { zone: "Data Vault", level: "Maximum", ingress: "App Tier Only", egress: "None", status: "HEALTHY" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING NETWORK...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Network Topology</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-3 space-y-3">
        {data.map((z, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded">
            <div>
              <div className="text-xs text-slate-200 font-sans font-medium flex items-center">
                {z.zone}
                <span className={`ml-2 text-[9px] font-mono px-1.5 py-0.5 rounded ${z.level === 'Maximum' ? 'bg-rose-900/30 text-rose-400' : 'bg-slate-800 text-slate-400'}`}>{z.level} Sec</span>
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-1">In: {z.ingress} | Out: {z.egress}</div>
            </div>
            <div className="text-[10px] text-emerald-400 font-mono">{z.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
