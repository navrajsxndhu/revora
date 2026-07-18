"use client";

import React, { useEffect, useState } from "react";
import { Cloud, CheckCircle, RefreshCcw } from "lucide-react";

export function IdentityProviderStatus() {
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/providers")
      .then(res => res.json())
      .then(d => {
        setProviders(d.providers || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = providers.length > 0 ? providers : [
    { name: "Okta Enterprise", type: "OIDC", status: "SYNCED", latency: "42ms", users: 3412, lastSync: "1 min ago" },
    { name: "Azure AD", type: "SAML", status: "SYNCED", latency: "84ms", users: 1205, lastSync: "5 mins ago" },
    { name: "Legacy LDAP", type: "LDAP", status: "DEGRADED", latency: "1450ms", users: 275, lastSync: "2 hrs ago" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING PROVIDERS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Cloud className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Identity Providers</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-3 space-y-3">
        {data.map((p, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="flex items-center space-x-3">
              <div className={`p-1.5 rounded ${p.status === 'SYNCED' ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
                {p.status === 'SYNCED' ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <RefreshCcw className="w-4 h-4 text-amber-400 animate-spin-slow" />}
              </div>
              <div>
                <div className="text-xs text-slate-200 font-sans font-medium">{p.name}</div>
                <div className="text-[9px] text-slate-500 font-mono">{p.type} • {p.users} Users</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-[10px] font-mono ${p.status === 'SYNCED' ? 'text-emerald-400' : 'text-amber-400'}`}>{p.status}</div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">{p.latency}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
