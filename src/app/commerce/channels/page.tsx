import React from "react";
import Link from "next/link";
import { ArrowLeft, Globe, Search, Download, Smartphone, MonitorSmartphone, Store, Server, ShieldCheck, Activity, TrendingUp, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function OmnichannelOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/commerce" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Commerce Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Omnichannel Operations Center</h1>
            <p className="text-slate-400">Unified operational governance across website, mobile app, B2B portals, and retail stores.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Channels..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-72 transition-colors focus:ring-1 focus:ring-emerald-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Channel Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Uptime (All Channels)
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.99%</div>
            <div className="text-xs text-emerald-400">Exceeding 99.9% SLA</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              D2C E-Commerce
              <Globe className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42.8%</div>
            <div className="text-xs text-blue-400">Share of Total GMV</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Retail Point-of-Sale (POS)
              <Store className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24.1%</div>
            <div className="text-xs text-indigo-400">Share of Total GMV</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              B2B Enterprise Portal
              <Server className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">33.1%</div>
            <div className="text-xs text-purple-400">Share of Total GMV</div>
          </div>
        </div>

        {/* Channels Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Channel Operations Matrix" 
            headers={["Sales Channel", "Platform Type", "Sync Latency", "Active Sessions", "Operational Health", "Governance Trace"]}
          >
            {[
              { channel: "Global E-Commerce Web", type: "Headless D2C (Next.js)", sync: "12 ms", sessions: "142k", status: "Nominal", trace: "CHN-EV-401" },
              { channel: "iOS / Android App", type: "Native Mobile Commerce", sync: "45 ms", sessions: "84k", status: "Nominal", trace: "CHN-EV-402" },
              { channel: "B2B Procurement Portal", type: "Enterprise Wholesale", sync: "18 ms", sessions: "4.2k", status: "Nominal", trace: "CHN-EV-403" },
              { channel: "Flagship Retail POS (NYC)", type: "Edge Physical Store", sync: "120 ms", sessions: "89 (Registers)", status: "Degraded (High Latency)", trace: "CHN-EV-404" },
              { channel: "Global API (Partners)", type: "Headless B2B2C API", sync: "8 ms", sessions: "12M (Reqs/hr)", status: "Nominal", trace: "CHN-EV-405" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.type.includes('D2C') && <Globe className="w-4 h-4 text-blue-500" />}
                     {row.type.includes('Mobile') && <Smartphone className="w-4 h-4 text-indigo-500" />}
                     {row.type.includes('B2B') && <Server className="w-4 h-4 text-purple-500" />}
                     {row.type.includes('Physical') && <Store className="w-4 h-4 text-amber-500" />}
                     {row.channel}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.type}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.sync}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.sessions}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Nominal' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Nominal' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Live" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
