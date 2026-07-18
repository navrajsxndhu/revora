"use client";

import React, { useEffect, useState } from "react";
import { Cloud, ServerCrash, DollarSign } from "lucide-react";

export function CloudResourceCenter() {
  const [cloud, setCloud] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/cloud")
      .then(res => res.json())
      .then(d => {
        setCloud(d.accounts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = cloud.length > 0 ? cloud : [
    { provider: "AWS", account: "Prod-Core-01", region: "us-east-1", services: 142, cost: "$42.1k", health: "OPTIMAL" },
    { provider: "Azure", account: "Corp-Identity", region: "westus2", services: 18, cost: "$8.4k", health: "OPTIMAL" },
    { provider: "GCP", account: "DataLake-Prod", region: "us-central1", services: 45, cost: "$112.5k", health: "WARNING" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING CLOUD...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Cloud className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Cloud Resource Topology</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Provider / Account</th>
              <th className="px-3 py-2 font-medium">Region</th>
              <th className="px-3 py-2 font-medium">Services</th>
              <th className="px-3 py-2 font-medium">Cost/Mo</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((c, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium flex items-center">
                    {c.health === 'WARNING' ? <ServerCrash className="w-3 h-3 text-amber-500 mr-1" /> : null}
                    {c.provider} • {c.account}
                  </div>
                </td>
                <td className="px-3 py-2 text-slate-500">{c.region}</td>
                <td className="px-3 py-2 text-slate-300">{c.services}</td>
                <td className="px-3 py-2 text-slate-400 flex items-center">
                  <DollarSign className="w-3 h-3 mr-0.5 text-emerald-500" />{c.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
