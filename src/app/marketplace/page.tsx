import React from "react";
import Link from "next/link";
import { ArrowRight, Puzzle, ShieldCheck, Box, PackageOpen, DownloadCloud, Blocks, Code2, Activity, PlayCircle, History, BarChart2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function MarketplaceCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Marketplace Command</h1>
            <p className="text-slate-400">Constitutional governance over the enterprise extension ecosystem, low-code automation, and plugin integration.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/marketplace/installed" className="flex items-center gap-2 px-4 py-2 bg-emerald-900/40 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-900/60 rounded-md text-sm font-medium transition-colors">
              <ShieldCheck className="w-4 h-4" /> Platform Integrity: Nominal
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Extensions
              <Puzzle className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-blue-400">Running in production</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Marketplace Trust Score
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-emerald-400">Constitutional compliance</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Certified Packages
              <PackageOpen className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-indigo-400">Approved for enterprise use</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Disabled Extensions
              <Box className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Policy violations detected</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Ecosystem Management</h3>
            
            <Link href="/marketplace/catalog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Puzzle className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Extension Catalog</div>
                <div className="text-xs text-slate-500">Discover governed apps</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/marketplace/installed" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <DownloadCloud className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Installed Extensions</div>
                <div className="text-xs text-slate-500">Manage active deployments</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/marketplace/low-code" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Blocks className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors">Low-Code Builder</div>
                <div className="text-xs text-slate-500">Visual application studio</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </Link>

            <Link href="/marketplace/sdk" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Plugin SDK Center</div>
                <div className="text-xs text-slate-500">Developer experience</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/marketplace/certification" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Certification Center</div>
                <div className="text-xs text-slate-500">Security & compliance review</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
            
            <div className="border-t border-slate-800 my-2 pt-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-3">Observability</h3>
              <Link href="/marketplace/runtime" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Runtime Monitor</div>
                </div>
              </Link>
              <Link href="/marketplace/analytics" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Ecosystem Analytics</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Active Platform Activity Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Recent Ecosystem Activity" 
              headers={["Event Timestamp", "Extension / App", "Operation", "Governance State"]}
            >
              {[
                { time: "2026-07-21 15:01:22", app: "Salesforce CRM Connector v4", op: "Marketplace Install", status: "Installed (Active)" },
                { time: "2026-07-21 14:45:00", app: "Custom Leave Request App", op: "Low-Code Publish", status: "Pending Human Sign" },
                { time: "2026-07-21 13:12:00", app: "Legacy SAP Bridge", op: "Runtime Execution", status: "Blocked (Policy Violation)" },
                { time: "2026-07-21 10:30:44", app: "Workday HR Integrator", op: "Version Upgrade (v2.1)", status: "Installed (Active)" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Puzzle className="w-4 h-4 text-blue-500" />
                       {row.app}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.op}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status.includes('Pending') ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
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
