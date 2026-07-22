import React from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Database, Network, LineChart, Cpu, ShieldCheck, PlayCircle, History, Brain, Layers, GitMerge } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function MLOpsCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise ML Command</h1>
            <p className="text-slate-400">Constitutional governance over the enterprise Machine Learning lifecycle, models, and features.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/ml-platform/models" className="flex items-center gap-2 px-4 py-2 bg-indigo-900/40 text-indigo-400 border border-indigo-900/50 hover:bg-indigo-900/60 rounded-md text-sm font-medium transition-colors">
              <BrainCircuit className="w-4 h-4" /> Go to Model Registry
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Models (Production)
              <BrainCircuit className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">124</div>
            <div className="text-xs text-indigo-400">Governed inferencing</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Feature Store Assets
              <Layers className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,812</div>
            <div className="text-xs text-emerald-400">Certified reusable features</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Training Pipelines
              <Network className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">32</div>
            <div className="text-xs text-blue-400">Active jobs running</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Drift Alerts (24h)
              <LineChart className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Requires human review</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">MLOps Lifecycle</h3>
            
            <Link href="/ml-platform/datasets" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                <Database className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Dataset Governance</div>
                <div className="text-xs text-slate-500">Governed training data</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </Link>

            <Link href="/ml-platform/features" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Feature Store</div>
                <div className="text-xs text-slate-500">Reusable model features</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/ml-platform/experiments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Experiments</div>
                <div className="text-xs text-slate-500">ML Tracking workspace</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/ml-platform/training" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Network className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Training Pipelines</div>
                <div className="text-xs text-slate-500">Orchestration & compute</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/ml-platform/deployments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <GitMerge className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Deployments</div>
                <div className="text-xs text-slate-500">Production promotion</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
            
            <div className="border-t border-slate-800 my-2 pt-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-3">Observability</h3>
              <Link href="/ml-platform/inference" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Inference Monitoring</div>
                </div>
              </Link>
              <Link href="/ml-platform/monitoring" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <LineChart className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Model Drift Detection</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Active Platform Activity Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Global ML Operations" 
              headers={["Timestamp", "Entity", "Operation", "Governance State"]}
            >
              {[
                { time: "2026-07-22 10:15:22", entity: "Model: churn-pred-v4", op: "Promote to Production", status: "Pending Human Sign" },
                { time: "2026-07-22 10:10:05", entity: "Pipeline: Llama3-Finetune", op: "Training Job Started", status: "Running (GPU x8)" },
                { time: "2026-07-22 09:45:00", entity: "Dataset: customer_tx_2026", op: "Schema Validation", status: "Passed" },
                { time: "2026-07-22 08:30:44", entity: "Feature: avg_spend_30d", op: "Feature Store Sync", status: "Blocked (Data Drift)" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    {row.entity}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.op}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status.includes('Pending') ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' :
                      row.status.includes('Running') ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
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
