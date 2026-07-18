"use client";

import React, { useEffect, useState } from "react";
import { MoveDown, Waypoints } from "lucide-react";

export function OperationalLineage() {
  const [lineage, setLineage] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/lineage")
      .then(res => res.json())
      .then(d => {
        setLineage(d.lineage || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = [
    { level: "Incident", detail: "INC-492: Checkout Latency", type: "trigger" },
    { level: "Service", detail: "payment-gateway-svc", type: "node" },
    { level: "Infrastructure", detail: "k8s-worker-node-04", type: "node" },
    { level: "Release", detail: "REL-2026.4.1", type: "node" },
    { level: "Identity", detail: "svc-deploy-bot (Revoked)", type: "root" }
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING LINEAGE...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Waypoints className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Operational Lineage</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center">
        {data.map((step, i) => (
          <React.Fragment key={i}>
            <div className={`border px-4 py-2 rounded text-center w-64 ${
              step.type === 'trigger' ? 'border-amber-500/50 bg-amber-950/20' :
              step.type === 'root' ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-700 bg-slate-800'
            }`}>
              <div className="text-[10px] font-mono text-slate-400 mb-1">{step.level}</div>
              <div className={`text-sm font-bold font-sans ${step.type === 'root' ? 'text-rose-400' : 'text-slate-200'}`}>{step.detail}</div>
            </div>
            {i < data.length - 1 && <MoveDown className="w-4 h-4 text-slate-600 my-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
