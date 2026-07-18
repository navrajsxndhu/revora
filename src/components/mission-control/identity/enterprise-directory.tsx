"use client";

import React, { useEffect, useState } from "react";
import { Users, Filter, Search, ChevronDown, CheckCircle, XCircle } from "lucide-react";

export function EnterpriseDirectory() {
  const [identities, setIdentities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/identities")
      .then(res => res.json())
      .then(d => {
        setIdentities(d.identities || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = identities.length > 0 ? identities : [
    { id: "ID-9001", name: "Sarah Connor", email: "s.connor@enterprise.local", dept: "Engineering", team: "Platform", provider: "Okta", status: "ACTIVE", roles: 4, mfa: true, risk: "LOW" },
    { id: "ID-9002", name: "John Smith", email: "j.smith@enterprise.local", dept: "Finance", team: "Treasury", provider: "Azure AD", status: "ACTIVE", roles: 2, mfa: true, risk: "LOW" },
    { id: "ID-9003", name: "Deploy Bot", email: "svc.deploy@enterprise.local", dept: "System", team: "Automation", provider: "Local", status: "ACTIVE", roles: 1, mfa: false, risk: "HIGH" },
    { id: "ID-9004", name: "Alice Zhang", email: "a.zhang@enterprise.local", dept: "Security", team: "SecOps", provider: "Okta", status: "SUSPENDED", roles: 0, mfa: true, risk: "CRITICAL" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING DIRECTORY...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Directory</h2>
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="w-3 h-3 absolute left-2 top-2 text-slate-500" />
            <input type="text" placeholder="Search identities..." className="bg-slate-950 border border-slate-700 text-slate-300 text-[10px] font-mono rounded pl-7 pr-2 py-1.5 focus:outline-none focus:border-indigo-500 w-48" />
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded px-2 py-1 text-[10px] font-mono flex items-center">
            <Filter className="w-3 h-3 mr-1" /> FILTER
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Identity</th>
              <th className="px-3 py-2 font-medium">Department</th>
              <th className="px-3 py-2 font-medium">Provider</th>
              <th className="px-3 py-2 font-medium">Roles</th>
              <th className="px-3 py-2 font-medium">Risk</th>
              <th className="px-3 py-2 font-medium">MFA</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map(i => (
              <tr key={i.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{i.name}</div>
                  <div className="text-[9px] text-indigo-400">{i.email}</div>
                </td>
                <td className="px-3 py-2">
                  <div className="text-slate-400">{i.dept}</div>
                  <div className="text-[9px] text-slate-500">{i.team}</div>
                </td>
                <td className="px-3 py-2 text-slate-500">{i.provider}</td>
                <td className="px-3 py-2 text-slate-300">{i.roles}</td>
                <td className="px-3 py-2">
                  <span className={`${
                    i.risk === 'CRITICAL' ? 'text-rose-500 bg-rose-500/10' :
                    i.risk === 'HIGH' ? 'text-amber-500 bg-amber-500/10' : 'text-emerald-500 bg-emerald-500/10'
                  } px-1.5 py-0.5 rounded text-[10px]`}>{i.risk}</span>
                </td>
                <td className="px-3 py-2">
                  {i.mfa ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <XCircle className="w-3 h-3 text-rose-500" />}
                </td>
                <td className="px-3 py-2">
                  <span className={`${i.status === 'ACTIVE' ? 'text-emerald-400' : 'text-rose-400'}`}>{i.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
