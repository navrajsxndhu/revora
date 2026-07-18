"use client";

import React, { useEffect, useState } from "react";
import { Server, Activity } from "lucide-react";

export function ServiceAccountRegistry() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/service-accounts")
      .then(res => res.json())
      .then(d => {
        setAccounts(d.accounts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = accounts.length > 0 ? accounts : [
    { name: "svc-github-actions", owner: "Platform Team", app: "CI/CD Pipeline", health: "HEALTHY", lastUsed: "2 mins ago" },
    { name: "svc-db-migrator", owner: "Data Eng", app: "Prisma Migrations", health: "DORMANT", lastUsed: "45 days ago" },
    { name: "svc-grafana-read", owner: "SRE Team", app: "Observability", health: "HEALTHY", lastUsed: "1 min ago" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING ACCOUNTS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Server className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Service Accounts</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Account</th>
              <th className="px-3 py-2 font-medium">Owner</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((a, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{a.name}</div>
                  <div className="text-[9px] text-slate-500">{a.app}</div>
                </td>
                <td className="px-3 py-2 text-slate-400">{a.owner}</td>
                <td className="px-3 py-2">
                  <div className="flex flex-col">
                    <span className={`${a.health === 'HEALTHY' ? 'text-emerald-400' : 'text-amber-400'}`}>{a.health}</span>
                    <span className="text-[9px] text-slate-500 flex items-center"><Activity className="w-2 h-2 mr-1"/>{a.lastUsed}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
