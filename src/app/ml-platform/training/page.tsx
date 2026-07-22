import React from "react";
import Link from "next/link";
import { ArrowLeft, Network, Search, PlayCircle, Cpu, Clock, CheckCircle2, XCircle, PauseCircle, Timer } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function TrainingPipelineCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Training Pipeline Center</h1>
            <p className="text-slate-400">Governed orchestration for ML training pipelines, generating immutable RuntimeExecution evidence.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Pipelines..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md text-sm font-medium transition-colors text-white">
               <PlayCircle className="w-4 h-4" /> Trigger Pipeline
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Jobs
              <PlayCircle className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">32</div>
            <div className="text-xs text-purple-400">Currently executing</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Completed (24h)
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">148</div>
            <div className="text-xs text-emerald-400">Successful executions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              GPU Utilization
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84%</div>
            <div className="text-xs text-blue-400">Across training cluster</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Failed Pipelines
              <XCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-rose-400">Halted at quality gates</div>
          </div>
        </div>

        {/* Pipelines Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Pipeline Executions" 
            headers={["Pipeline ID / Model", "Trigger", "Duration", "Compute Config", "Status", "Execution Trace"]}
          >
            {[
              { id: "pipe-8821a", model: "customer_churn_predictor", trigger: "Schedule (Daily)", dur: "Running (45m)", comp: "4x NVIDIA A100", status: "Running", trace: "TRN-EV-301" },
              { id: "pipe-8820b", model: "fraud_detect_realtime", trigger: "Manual (jdoe)", dur: "1h 12m", comp: "8x NVIDIA V100", status: "Completed", trace: "TRN-EV-302" },
              { id: "pipe-8819c", model: "llm_doc_summarizer", trigger: "Data Drift Alert", dur: "14m", comp: "16x NVIDIA A100", status: "Failed (Data Quality)", trace: "TRN-EV-303" },
              { id: "pipe-8818d", model: "supply_chain_forecast", trigger: "Schedule (Weekly)", dur: "3h 45m", comp: "2x NVIDIA T4", status: "Completed", trace: "TRN-EV-304" },
              { id: "pipe-8817e", model: "pricing_optimizer", trigger: "GitOps (Merge main)", dur: "Pending", comp: "4x NVIDIA V100", status: "Queued", trace: "TRN-EV-305" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-purple-400 text-sm flex items-center gap-2">
                       <Network className="w-4 h-4 text-slate-500" />
                       {row.id}
                     </span>
                     <span className="text-xs text-slate-400 pl-6">{row.model}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.trigger}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   <div className="flex items-center gap-2">
                      <Timer className="w-3 h-3 text-slate-500" />
                      {row.dur}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.comp}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Completed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Failed') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    row.status === 'Running' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status.includes('Failed') && <XCircle className="w-3 h-3" />}
                    {row.status === 'Running' && <PlayCircle className="w-3 h-3 animate-pulse" />}
                    {row.status === 'Queued' && <PauseCircle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp={row.status === 'Completed' ? 'Sealed' : 'Active'} />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
