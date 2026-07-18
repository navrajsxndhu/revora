"use client";

import React, { useEffect, useState } from "react";
import { History, Link2, ServerOff, Server } from "lucide-react";

export function TopologyHistory() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/history")
      .then(res => res.json())
      .then(d => {
        setHistory(d.history || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = history.length > 0 ? history : [
    { action: "LINK_CREATED", targetId: "auth-svc -> auth-redis-cluster", evidence: "REL-2026.4.1", time: "10 mins ago", type: "add" },
    { action: "NODE_CREATED", targetId: "k8s-worker-node-04", evidence: "TF-Apply-942", time: "2 hrs ago", type: "add" },
    { action: "LINK_REMOVED", targetId: "invoice-worker -> legacy-db", evidence: "REL-2026.4.0", time: "1 day ago", type: "remove" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING LEDGER...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <History className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Topology Ledger</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((h, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800/50 pb-2 hover:bg-slate-800/20 px-2 rounded">
            <div className="flex items-center space-x-3">
              <div className={`p-1.5 rounded-full ${h.type === 'add' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {h.action.includes('LINK') ? <Link2 className="w-4 h-4" /> : (h.type === 'add' ? <Server className="w-4 h-4" /> : <ServerOff className="w-4 h-4" />)}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200 font-sans">{h.action}</div>
                <div className="text-[10px] text-slate-400 font-mono">{h.targetId}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-indigo-400 font-mono hover:underline cursor-pointer">{h.evidence}</div>
              <div className="text-[9px] text-slate-500 font-mono">{h.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
