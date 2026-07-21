import React from "react";
import Link from "next/link";
import { Server, ShieldAlert, CheckCircle2, Box, Layers, Monitor, HardDrive, GitCompare } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function AssetCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Asset & CMDB Authority</h1>
            <p className="text-slate-400">Constitutional governance over Configuration Items, hardware, and infrastructure states.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/assets/inventory" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <Box className="w-4 h-4" /> Global Inventory
            </Link>
            <Link href="/assets/cmdb" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
              <Layers className="w-4 h-4" /> Enterprise CMDB
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              CMDB Compliance
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.4%</div>
            <div className="text-xs text-emerald-400">Target &gt; 98%</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Managed Assets
              <Server className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12,402</div>
            <div className="text-xs text-blue-400">Governed Configurations</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Configuration Drift
              <GitCompare className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-rose-400">Unauthorized Changes</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Orphaned Resources
              <ShieldAlert className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18</div>
            <div className="text-xs text-amber-500">Missing Owner Metadata</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Governance Vectors</h3>
            
            <Link href="/assets/cmdb" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise CMDB</div>
                <div className="text-xs text-slate-500">Master configuration registry</div>
              </div>
            </Link>

            <Link href="/assets/inventory" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Box className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Asset Inventory</div>
                <div className="text-xs text-slate-500">Hardware and software endpoints</div>
              </div>
            </Link>

            <Link href="/assets/drift" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <GitCompare className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">Configuration Drift</div>
                <div className="text-xs text-slate-500">Detect unauthorized mutability</div>
              </div>
            </Link>

            <Link href="/assets/dependencies" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Monitor className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Dependency Explorer</div>
                <div className="text-xs text-slate-500">Blast radius analysis</div>
              </div>
            </Link>
          </div>

          {/* Critical Assets Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Critical Infrastructure Items" 
              headers={["CI ID", "Name", "Type", "Owner", "Compliance"]}
            >
              {[
                { id: "CI-891-V", name: "prod-db-primary", type: "Database Cluster", owner: "Data Platform Team", status: "Compliant" },
                { id: "CI-892-V", name: "us-east-1a-nat", type: "Network Gateway", owner: "Cloud Platform Team", status: "Compliant" },
                { id: "CI-893-X", name: "redis-cache-04", type: "In-Memory Datastore", owner: "Unknown", status: "Orphaned" },
                { id: "CI-894-D", name: "auth-worker-node", type: "Compute Instance", owner: "Security Team", status: "Drift Detected" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.id}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm flex items-center gap-2">
                    {row.type.includes('Database') ? <HardDrive className="w-3.5 h-3.5 text-slate-500" /> : <Server className="w-3.5 h-3.5 text-slate-500" />}
                    {row.name}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border w-max block ${
                      row.status === 'Compliant'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : row.status === 'Orphaned'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

        </div>
      </div>
    </div>
  );
}
