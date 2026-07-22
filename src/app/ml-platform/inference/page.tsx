import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Activity, Zap, ServerCrash, Download, Crosshair, BarChart2, ShieldCheck, TerminalSquare } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function InferenceMonitoring() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ml-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ML Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Inference Monitoring Center</h1>
            <p className="text-slate-400">Operational observability for production inference. Every request is linked to RuntimeExecution evidence.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Request Trace IDs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Telemetry
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Request Volume (24h)
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84.2M</div>
            <div className="text-xs text-emerald-400">Across all production models</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Avg Latency (P95)
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42ms</div>
            <div className="text-xs text-amber-400">Optimal performance</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Success Rate
              <Crosshair className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.98%</div>
            <div className="text-xs text-blue-400">Meeting SLAs</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Timeouts / Errors
              <ServerCrash className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0.02%</div>
            <div className="text-xs text-rose-400">Within acceptable limits</div>
          </div>
        </div>

        {/* Inference Trace Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Real-Time Inference Telemetry" 
            headers={["Timestamp", "Model / Endpoint", "Request Caller", "Latency", "Policy Validation", "Inference Trace"]}
          >
            {[
              { time: "2026-07-22 10:45:12.443", model: "customer_churn_predictor@v4.2.1", caller: "Billing Service API", lat: "24ms", val: "Passed", trace: "INF-EV-601" },
              { time: "2026-07-22 10:45:12.210", model: "fraud_detect_realtime@v12.0.0", caller: "Payment Gateway", lat: "18ms", val: "Passed", trace: "INF-EV-602" },
              { time: "2026-07-22 10:45:11.905", model: "llm_doc_summarizer@v1.9.0", caller: "Knowledge Base UI", lat: "850ms", val: "Passed", trace: "INF-EV-603" },
              { time: "2026-07-22 10:45:11.844", model: "supply_chain_forecast@v3.1.4", caller: "ERP Sync Job", lat: "145ms", val: "Passed", trace: "INF-EV-604" },
              { time: "2026-07-22 10:45:11.002", model: "fraud_detect_realtime@v12.0.0", caller: "Unknown Origin", lat: "N/A", val: "Blocked (Auth)", trace: "INF-EV-605" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm font-mono text-emerald-400">
                   {row.model}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                     <TerminalSquare className="w-4 h-4 text-slate-500" />
                     {row.caller}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.lat === 'N/A' ? 'text-slate-500' : row.lat.includes('850') ? 'text-amber-400' : 'text-emerald-400'}>
                     {row.lat}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.val === 'Passed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.val === 'Passed' && <ShieldCheck className="w-3 h-3" />}
                    {row.val}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
