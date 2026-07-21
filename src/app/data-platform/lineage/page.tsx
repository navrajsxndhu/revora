import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, GitMerge, LayoutDashboard, Activity, DatabaseZap } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DataLineageExplorer() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/data-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Data Platform
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Data Lineage Explorer</h1>
            <p className="text-slate-400">End-to-end deterministic tracing of data movement across the enterprise.</p>
          </div>
        </header>

        {/* Visual Map (Simulated Lineage Flow) */}
        <div className="flex-1 min-h-0 bg-slate-900/30 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center relative overflow-hidden">
          
          <div className="flex items-center justify-between w-full max-w-5xl relative">
            
            {/* The Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-700 -z-10"></div>
            
            {/* Source */}
            <div className="flex flex-col items-center gap-4 relative z-10 group cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-lg shadow-black">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm text-slate-200">CRM Postgres</h3>
                <p className="text-xs text-slate-500">Source Database</p>
              </div>
            </div>

            {/* Ingestion Pipeline */}
            <div className="flex flex-col items-center gap-4 relative z-10 group cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors shadow-lg shadow-black">
                <Activity className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm text-slate-200">Customer Sync</h3>
                <p className="text-xs text-slate-500">Airflow DAG</p>
              </div>
            </div>

            {/* Data Lakehouse */}
            <div className="flex flex-col items-center gap-4 relative z-10 group cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-blue-950/40 border border-blue-500/50 flex items-center justify-center group-hover:bg-blue-900/60 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.15)] shadow-black">
                <DatabaseZap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm text-blue-300">Enterprise Lake</h3>
                <p className="text-xs text-slate-500">Snowflake (Raw Zone)</p>
              </div>
            </div>

            {/* Transform Pipeline */}
            <div className="flex flex-col items-center gap-4 relative z-10 group cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors shadow-lg shadow-black">
                <GitMerge className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm text-slate-200">dbt Transform</h3>
                <p className="text-xs text-slate-500">Daily Aggregation</p>
              </div>
            </div>

            {/* Executive Dashboard */}
            <div className="flex flex-col items-center gap-4 relative z-10 group cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center group-hover:border-purple-500 transition-colors shadow-lg shadow-black">
                <LayoutDashboard className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm text-slate-200">ARR Exec View</h3>
                <p className="text-xs text-slate-500">BI Tool</p>
              </div>
            </div>

          </div>

          {/* Details Panel */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 shadow-2xl flex items-center justify-between">
             <div>
                <h4 className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                  Selected Node: <span className="text-blue-400">Enterprise Lake (Snowflake)</span>
                </h4>
                <p className="text-xs text-slate-400 mb-3">Schema: `prod.raw.customer_events`. Retention: 7 Years.</p>
                <EvidenceBadge evidenceId="DATA-NODE-891" timestamp="Lineage Certified" />
             </div>
             <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-md transition-colors">
               View Quality Metrics
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}
