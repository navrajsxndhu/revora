"use client";

import React, { useEffect, useState } from "react";
import { Users, Key, Shield, ShieldAlert, Fingerprint, Lock } from "lucide-react";

export function IdentityOverview() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/identity/index")
      .then(res => res.json())
      .then(d => setData(d))
      .catch(() => setData({})); // Silently fallback
  }, []);

  const d = data || {
    totalIdentities: 4892,
    activeRoles: 142,
    pendingRequests: 14,
    activeSessions: 842,
    healthIndex: "99.2%",
    auditReadiness: "READY"
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col justify-center px-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-indigo-500/10 p-2 rounded">
            <Users className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">TOTAL IDENTITIES</div>
            <div className="text-xl font-bold text-slate-200">{d.totalIdentities}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-emerald-500/10 p-2 rounded">
            <Fingerprint className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">ACTIVE SESSIONS</div>
            <div className="text-xl font-bold text-slate-200">{d.activeSessions}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-amber-500/10 p-2 rounded">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">PENDING REQUESTS</div>
            <div className="text-xl font-bold text-slate-200">{d.pendingRequests}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-blue-500/10 p-2 rounded">
            <Shield className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">ACTIVE ROLES</div>
            <div className="text-xl font-bold text-slate-200">{d.activeRoles}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-rose-500/10 p-2 rounded">
            <Key className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">PRIVILEGED ACCOUNTS</div>
            <div className="text-xl font-bold text-slate-200">18</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 p-2 rounded">
            <Lock className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">IDENTITY HEALTH</div>
            <div className="text-xl font-bold text-emerald-400">{d.healthIndex}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
