import React from "react";
import Link from "next/link";
import { Server, Activity, ShieldAlert, Code, CheckCircle2, Lock, AlertTriangle, Network, Zap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function APICommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">API Governance Authority</h1>
            <p className="text-slate-400">Constitutional oversight for the Enterprise API Ecosystem and Gateway telemetry.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/api-platform/catalog" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <Server className="w-4 h-4" /> API Catalog
            </Link>
            <Link href="/api-platform/developers" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
              <Code className="w-4 h-4" /> Developer Portal
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              SLA Compliance
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.98%</div>
            <div className="text-xs text-emerald-400">Across 128 Services</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Consumers
              <Network className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,892</div>
            <div className="text-xs text-blue-400">Registered Applications</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              API Traffic (24h)
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18.4M</div>
            <div className="text-xs text-emerald-500">Gateway Requests</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Security Violations
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">34</div>
            <div className="text-xs text-rose-400">Blocked JWTs / OAuth</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Ecosystem Vectors</h3>
            
            <Link href="/api-platform/catalog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Server className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise API Catalog</div>
                <div className="text-xs text-slate-500">Service contracts and lifecycle</div>
              </div>
            </Link>

            <Link href="/api-platform/gateway" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Gateway & Traffic Center</div>
                <div className="text-xs text-slate-500">Latency and throughput telemetry</div>
              </div>
            </Link>

            <Link href="/api-platform/developers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Code className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Developer Portal</div>
                <div className="text-xs text-slate-500">Self-service SDKs and sandbox</div>
              </div>
            </Link>
          </div>

          {/* Active Services Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Critical Service Health" 
              headers={["API Service", "Version", "Latency (P99)", "Error Rate", "Status"]}
            >
              {[
                { service: "Customer Core API", version: "v2.1.4", latency: "142ms", errors: "0.01%", status: "Healthy" },
                { service: "Payments Gateway", version: "v4.0.0", latency: "210ms", errors: "0.00%", status: "Healthy" },
                { service: "Inventory Sync API", version: "v1.1.2", latency: "890ms", errors: "2.40%", status: "Degraded" },
                { service: "Legacy Billing REST", version: "v0.9 (Dep)", latency: "1,204ms", errors: "5.10%", status: "Critical" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-slate-500" /> {row.service}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400 font-mono">{row.version}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.latency}</td>
                  <td className="py-4 px-5">
                    <span className={`text-sm font-mono flex items-center gap-1 ${
                      row.status === 'Critical' ? 'text-rose-400' :
                      row.status === 'Degraded' ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {row.errors}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border w-max block ${
                      row.status === 'Healthy'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : row.status === 'Degraded'
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
