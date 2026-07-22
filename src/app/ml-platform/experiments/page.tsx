import React from "react";
import Link from "next/link";
import { ArrowLeft, Brain, Search, PlusCircle, Activity, BarChart, FileCode, CheckCircle2, GitMerge } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ExperimentTracking() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Experiment Tracking</h1>
            <p className="text-slate-400">Central repository for ML experimentation, evaluation metrics, and hyperparameter logs.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Experiments..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> New Run
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Experiments
              <Brain className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,405</div>
            <div className="text-xs text-blue-400">Across 42 projects</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Best Model Accuracy
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98.2%</div>
            <div className="text-xs text-emerald-400">fraud_detect_realtime</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Parameters
              <FileCode className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14B+</div>
            <div className="text-xs text-purple-400">Combined LLM weights</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Promoted to Model Registry
              <GitMerge className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12%</div>
            <div className="text-xs text-amber-400">Promotion rate</div>
          </div>
        </div>

        {/* Experiments Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Recent Experiment Runs" 
            headers={["Experiment ID / Run Name", "Dataset Hash", "Key Metric", "Duration", "Status", "Experiment Trace"]}
          >
            {[
              { id: "EXP-8890", name: "xgboost_tune_lr_0.01", dataset: "hash_a9f1b2...", metric: "AUC: 0.942", dur: "45m", status: "Completed", trace: "EXP-EV-401" },
              { id: "EXP-8889", name: "llama3_lora_finance", dataset: "hash_c4e8d3...", metric: "Loss: 0.82", dur: "Running", status: "Running", trace: "EXP-EV-402" },
              { id: "EXP-8888", name: "resnet50_augmentation", dataset: "hash_99a8b1...", metric: "Acc: 0.72", dur: "2h 14m", status: "Completed", trace: "EXP-EV-403" },
              { id: "EXP-8887", name: "prophet_demand_fcast", dataset: "hash_f8e2d1...", metric: "MAPE: 14.2", dur: "12m", status: "Failed (OOM)", trace: "EXP-EV-404" },
              { id: "EXP-8886", name: "kmeans_cluster_k12", dataset: "hash_b1c2a3...", metric: "Silhouette: 0.65", dur: "5m", status: "Completed", trace: "EXP-EV-405" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-blue-400 text-sm flex items-center gap-2">
                       <Brain className="w-4 h-4 text-slate-500" />
                       {row.id}
                     </span>
                     <span className="text-xs text-slate-400 pl-6">{row.name}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.dataset}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-emerald-400">
                   <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 w-max">
                      <BarChart className="w-3 h-3 text-slate-500" />
                      {row.metric}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.dur}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Completed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Failed') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    row.status === 'Running' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
