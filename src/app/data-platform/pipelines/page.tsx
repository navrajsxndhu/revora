import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, PlayCircle, Clock, ShieldAlert, GitMerge, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function EnterprisePipelines() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Data Pipelines</h1>
            <p className="text-slate-400">Governed orchestration of ETL/ELT workflows. Failures generate immutable evidence.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
            <Activity className="w-4 h-4" /> Register Pipeline
          </button>
        </header>

        {/* Pipelines Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Data Orchestrations" 
            headers={["Pipeline ID", "Source → Destination", "Schedule", "Owner", "Last Execution", "Status", ""]}
          >
            {[
              { id: "PL-CRM-SYNC", flow: "Postgres → Snowflake", schedule: "Hourly", owner: "Data Eng", lastRun: "12m ago", status: "Healthy" },
              { id: "PL-FIN-REPORT", flow: "Snowflake → PowerBI", schedule: "Daily (00:00)", owner: "Finance", lastRun: "14h ago", status: "Healthy" },
              { id: "PL-HR-INGEST", flow: "Workday → S3 Lake", schedule: "Weekly", owner: "HR", lastRun: "3d ago", status: "Failed" },
              { id: "PL-LOG-STREAM", flow: "Kafka → BigQuery", schedule: "Continuous", owner: "Platform", lastRun: "Live", status: "Degraded" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <GitMerge className="w-4 h-4 text-blue-400" />
                    </div>
                    {row.id}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.flow}</td>
                <td className="py-4 px-5 text-sm text-slate-400 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-slate-500" /> {row.schedule}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.lastRun}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status === 'Healthy'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : row.status === 'Degraded'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {row.status === 'Healthy' && <CheckCircle2 className="w-3 h-3" />}
                    {(row.status === 'Degraded' || row.status === 'Failed') && <ShieldAlert className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="text-sm text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ml-auto">
                    <PlayCircle className="w-4 h-4" /> Trigger
                  </button>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
