"use client";

import React, { useEffect, useState } from "react";
import { Network, Server, Cloud, Link2, GitFork, Activity } from "lucide-react";

export function TopologyOverview() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/topology/index")
      .then(res => res.json())
      .then(d => setData(d))
      .catch(() => setData({}));
  }, []);

  const d = data || {
    assets: 12405,
    services: 342,
    applications: 89,
    microservices: 1450,
    activeDependencies: 8942,
    criticalDependencies: 145,
    cloudResources: 85,
    healthIndex: "98.5%"
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col justify-center px-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-indigo-500/10 p-2 rounded">
            <Server className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">ENTERPRISE ASSETS</div>
            <div className="text-xl font-bold text-slate-200">{d.assets?.toLocaleString() || 0}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-emerald-500/10 p-2 rounded">
            <Network className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">SERVICES & APPS</div>
            <div className="text-xl font-bold text-slate-200">{(d.services + d.applications)?.toLocaleString() || 0}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-amber-500/10 p-2 rounded">
            <GitFork className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">MICROSERVICES</div>
            <div className="text-xl font-bold text-slate-200">{d.microservices?.toLocaleString() || 0}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-blue-500/10 p-2 rounded">
            <Link2 className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">DEPENDENCIES</div>
            <div className="text-xl font-bold text-slate-200">{d.activeDependencies?.toLocaleString() || 0}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-rose-500/10 p-2 rounded">
            <Cloud className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">CLOUD RESOURCES</div>
            <div className="text-xl font-bold text-slate-200">{d.cloudResources?.toLocaleString() || 0}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 p-2 rounded">
            <Activity className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">TOPOLOGY HEALTH</div>
            <div className="text-xl font-bold text-emerald-400">{d.healthIndex}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
