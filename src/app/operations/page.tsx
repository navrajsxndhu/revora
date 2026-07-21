import React from "react";
import Link from "next/link";
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, Cpu, HardDrive, Share2, GitMerge } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function OperationsCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Operations Center</h1>
            <p className="text-slate-400">Constitutional observability, tracking incidents and infrastructure health directly to the Runtime Ledger.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/operations/topology" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <Share2 className="w-4 h-4" /> Infrastructure Topology
            </Link>
            <Link href="/operations/incidents" className="flex items-center gap-2 px-4 py-2 bg-rose-900/20 hover:bg-rose-900/30 text-rose-400 border border-rose-900/50 rounded-md text-sm font-medium transition-colors">
              <ShieldAlert className="w-4 h-4" /> Active Incidents (1)
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              System Health Score
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.92%</div>
            <div className="text-xs text-emerald-400">Target &gt; 99.9%</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Alerts
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-amber-500">2 Critical Priorities</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Major Incidents
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-rose-400">SEV-1 Ongoing</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Distributed Traces (24h)
              <GitMerge className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2M</div>
            <div className="text-xs text-blue-400">100% Policy Captured</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">AIOps Vectors</h3>
            
            <Link href="/operations/incidents" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">Incident Management</div>
                <div className="text-xs text-slate-500">Active SEVs and RCA traces</div>
              </div>
            </Link>

            <Link href="/operations/alerts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Enterprise Alerts</div>
                <div className="text-xs text-slate-500">Governed operational limits</div>
              </div>
            </Link>

            <Link href="/operations/traces" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <GitMerge className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Distributed Traces</div>
                <div className="text-xs text-slate-500">End-to-end execution logs</div>
              </div>
            </Link>

            <Link href="/operations/topology" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Share2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Infrastructure Topology</div>
                <div className="text-xs text-slate-500">Visual dependencies</div>
              </div>
            </Link>
          </div>

          {/* Active Infrastructure Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Infrastructure Health Overview" 
              headers={["Component", "Type", "Uptime", "CPU", "Memory", "Status"]}
            >
              {[
                { name: "us-east-cluster-1", type: "Kubernetes", uptime: "99.9%", cpu: "82%", mem: "75%", status: "Healthy" },
                { name: "prod-db-primary", type: "PostgreSQL", uptime: "99.9%", cpu: "95%", mem: "92%", status: "Warning" },
                { name: "redis-cache-layer", type: "Redis", uptime: "100%", cpu: "20%", mem: "40%", status: "Healthy" },
                { name: "auth-service-gw", type: "API Gateway", uptime: "99.5%", cpu: "100%", mem: "98%", status: "Critical" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm flex items-center gap-2">
                    {row.type === 'PostgreSQL' || row.type === 'Redis' ? <HardDrive className="w-3.5 h-3.5 text-slate-500" /> : <Cpu className="w-3.5 h-3.5 text-slate-500" />}
                    {row.name}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.uptime}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.cpu}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.mem}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border w-max block ${
                      row.status === 'Healthy'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : row.status === 'Warning'
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
