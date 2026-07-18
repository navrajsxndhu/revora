"use client";

import React, { useEffect, useState } from "react";
import { KeyRound, RefreshCw, AlertTriangle } from "lucide-react";

export function ApiCredentialCenter() {
  const [creds, setCreds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/api-credentials")
      .then(res => res.json())
      .then(d => {
        setCreds(d.credentials || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = creds.length > 0 ? creds : [
    { name: "prod-stripe-key-v2", owner: "Payment Team", expires: "7 days", rotated: "83 days ago", status: "EXPIRING", risk: "HIGH" },
    { name: "staging-aws-deploy", owner: "Platform Eng", expires: "45 days", rotated: "15 days ago", status: "ACTIVE", risk: "LOW" },
    { name: "legacy-billing-api", owner: "Unknown", expires: "Expired", rotated: "365+ days ago", status: "EXPIRED", risk: "CRITICAL" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING CREDENTIALS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <KeyRound className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">API Credentials</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Credential</th>
              <th className="px-3 py-2 font-medium">Owner</th>
              <th className="px-3 py-2 font-medium">Expires</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((c, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{c.name}</div>
                  <div className="text-[9px] text-slate-500 flex items-center mt-0.5">
                    <RefreshCw className="w-2 h-2 mr-1" /> {c.rotated}
                  </div>
                </td>
                <td className="px-3 py-2 text-slate-400">
                  {c.owner === 'Unknown' ? <span className="text-rose-400 bg-rose-500/10 px-1 py-0.5 rounded">Orphaned</span> : c.owner}
                </td>
                <td className="px-3 py-2">
                  <span className={`${c.status === 'EXPIRED' ? 'text-rose-500' : c.status === 'EXPIRING' ? 'text-amber-500' : 'text-emerald-500'} flex items-center`}>
                    {c.status === 'EXPIRED' && <AlertTriangle className="w-3 h-3 mr-1" />}
                    {c.expires}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
