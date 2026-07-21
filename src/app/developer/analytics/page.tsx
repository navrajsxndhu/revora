import React from "react";
import Link from "next/link";
import { ArrowLeft, BarChart2, Search, Download, Activity, Code2, Terminal, Webhook, Zap, Users, ShieldCheck, Box } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DeveloperAnalytics() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/developer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Developer Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Developer Analytics</h1>
            <p className="text-slate-400">Operational intelligence for platform adoption, API utilization, and ecosystem health.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Metrics..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total API Calls (30d)
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">426M</div>
            <div className="text-xs text-purple-400">+12% from last month</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              SDK Downloads
              <Code2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2k</div>
            <div className="text-xs text-blue-400">Node.js is most popular</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Error Rate
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0.04%</div>
            <div className="text-xs text-emerald-400">Strictly enforced compliance</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Avg Latency
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42ms</div>
            <div className="text-xs text-amber-400">P95 across all zones</div>
          </div>
        </div>

        {/* Analytics Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Top Consumed Ecosystem Services" 
            headers={["Service / Endpoint", "Traffic Volume (30d)", "Consumer Demographics", "Error Rate", "Performance (P95)", "Analytics Trace"]}
          >
            {[
              { svc: "GET /api/v1/users/profile", vol: "142M requests", demo: "Web UI, Mobile, Scripts", err: "0.01%", lat: "24ms", trace: "ANX-DEV-101" },
              { svc: "POST /api/v1/ledger/query", vol: "84M requests", demo: "Analytics Apps, CLI", err: "0.05%", lat: "120ms", trace: "ANX-DEV-102" },
              { svc: "Webhook: invoice.created", vol: "14M deliveries", demo: "Finance Integrations", err: "0.10%", lat: "Async", trace: "ANX-DEV-103" },
              { svc: "CLI: revora deploy", vol: "420k executions", demo: "CI/CD Pipelines", err: "1.20% (Auth Rejects)", lat: "N/A", trace: "ANX-DEV-104" },
              { svc: "Node.js SDK Installs", vol: "12k downloads", demo: "Frontend / BFF Teams", err: "N/A", lat: "N/A", trace: "ANX-DEV-105" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.svc.includes('GET') || row.svc.includes('POST') ? <Activity className="w-4 h-4 text-purple-500" /> : 
                      row.svc.includes('Webhook') ? <Webhook className="w-4 h-4 text-amber-500" /> :
                      row.svc.includes('CLI') ? <Terminal className="w-4 h-4 text-emerald-500" /> :
                      <Code2 className="w-4 h-4 text-blue-500" />}
                     {row.svc}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.vol}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-600" />
                      {row.demo}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.err === 'N/A' ? 'text-slate-500' : row.err.includes('1.20') ? 'text-rose-400' : 'text-emerald-400'}>{row.err}</span>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.lat === 'N/A' || row.lat === 'Async' ? 'text-slate-500' : row.lat.includes('120') ? 'text-amber-400' : 'text-emerald-400'}>{row.lat}</span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Aggregated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
