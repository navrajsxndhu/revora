"use client";

import React, { useEffect, useState } from "react";
import { Shield, ChevronRight } from "lucide-react";

export function RoleManagement() {
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/roles")
      .then(res => res.json())
      .then(d => {
        setRoles(d.roles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = roles.length > 0 ? roles : [
    { id: "ROLE-001", name: "Platform Administrator", users: 12, permissions: 145, criticality: "CRITICAL", approvalReq: true, inherited: ["Developer", "Viewer"] },
    { id: "ROLE-002", name: "Security Auditor", users: 8, permissions: 92, criticality: "HIGH", approvalReq: true, inherited: ["Viewer"] },
    { id: "ROLE-003", name: "Senior Developer", users: 145, permissions: 45, criticality: "MEDIUM", approvalReq: false, inherited: ["Developer"] },
    { id: "ROLE-004", name: "Finance Viewer", users: 24, permissions: 12, criticality: "LOW", approvalReq: false, inherited: [] },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING ROLES...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Role Management</h2>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500 rounded px-3 py-1 text-[10px] font-mono">
          NEW ROLE
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map(r => (
          <div key={r.id} className="border border-slate-800 rounded bg-slate-950 p-3 hover:border-slate-700 cursor-pointer transition-colors group">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-400/10 px-1.5 py-0.5 rounded border border-indigo-500/20">{r.id}</span>
                <span className="text-sm text-slate-200 font-sans font-medium">{r.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            
            <div className="flex space-x-6 text-[10px] font-mono text-slate-400">
              <div>Users: <span className="text-slate-200">{r.users}</span></div>
              <div>Perms: <span className="text-slate-200">{r.permissions}</span></div>
              <div>
                Criticality: <span className={`${r.criticality === 'CRITICAL' ? 'text-rose-400' : r.criticality === 'HIGH' ? 'text-amber-400' : 'text-emerald-400'}`}>{r.criticality}</span>
              </div>
            </div>

            {r.inherited.length > 0 && (
              <div className="mt-3 pt-2 border-t border-slate-800/50 flex space-x-2 items-center">
                <span className="text-[9px] font-mono text-slate-500">INHERITS:</span>
                {r.inherited.map((i: string) => (
                  <span key={i} className="text-[9px] text-slate-400 bg-slate-800 px-1 py-0.5 rounded">{i}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
