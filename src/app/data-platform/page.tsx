import React from "react";
import Link from "next/link";
import { Database, GitMerge, ShieldAlert, Activity, CheckCircle2, Lock, AlertTriangle, FileText, DatabaseZap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function DataCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Data Fabric</h1>
            <p className="text-slate-400">Constitutional governance over every dataset, pipeline, and warehouse.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/data-platform/catalog" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <Database className="w-4 h-4" /> Enterprise Catalog
            </Link>
            <Link href="/data-platform/lineage" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <GitMerge className="w-4 h-4" /> Data Lineage
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data Quality Score
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">94.2%</div>
            <div className="text-xs text-emerald-400">Target &gt; 90%</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered Datasets
              <DatabaseZap className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,092</div>
            <div className="text-xs text-blue-400">Fully Certified</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Sensitive Data Assets
              <Lock className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">240</div>
            <div className="text-xs text-amber-500">HIPAA / PII Locked</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Failed Data Pipelines
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-rose-400">Violations detected</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Fabric Topography</h3>
            
            <Link href="/data-platform/pipelines" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise Pipelines</div>
                <div className="text-xs text-slate-500">Governed ETL orchestrations</div>
              </div>
            </Link>

            <Link href="/data-platform/quality" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Data Quality Center</div>
                <div className="text-xs text-slate-500">Schema and Completeness rules</div>
              </div>
            </Link>

            <Link href="/data-platform/privacy" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Sensitive Data Governance</div>
                <div className="text-xs text-slate-500">PII and Regulatory boundaries</div>
              </div>
            </Link>
          </div>

          {/* Active Job Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Critical Pipeline Health" 
              headers={["Pipeline ID", "Target Domain", "Last Run", "Validation", "Status"]}
            >
              {[
                { id: "PL-DW-SYNC", domain: "Finance Warehouse", run: "12m ago", validation: "Missing Records", status: "Failed" },
                { id: "PL-CRM-INGEST", domain: "Customer Lake", run: "45m ago", validation: "Passed (100%)", status: "Active" },
                { id: "PL-RISK-CALC", domain: "Treasury DataMart", run: "1h ago", validation: "Passed (100%)", status: "Active" },
                { id: "PL-USER-AUTH", domain: "Security Lake", run: "2h ago", validation: "Schema Drift", status: "Failed" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-slate-500" /> {row.id}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.run}</td>
                  <td className="py-4 px-5">
                    <span className={`text-sm flex items-center gap-1 ${row.status === 'Failed' ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {row.status === 'Failed' ? <ShieldAlert className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                      {row.validation}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border w-max block ${
                      row.status === 'Active'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
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
