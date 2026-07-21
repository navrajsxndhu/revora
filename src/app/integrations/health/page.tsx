import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, AlertTriangle, RefreshCw, CheckCircle2, Server } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function IntegrationHealthCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="mb-6 flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/integrations" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Marketplace
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Integration Health Dashboard</h1>
            <p className="text-slate-400">Executive overview of external API bridging, webhook delivery, and deterministic synchronization queues.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              <RefreshCw className="w-4 h-4" /> Force Sync Queue
            </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Connected Systems
              <Server className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> All systems active</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Sync Success Rate
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.98%</div>
            <div className="text-xs text-slate-500 flex items-center gap-1">Last 24 hours</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Webhook Delivery Latency
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142ms</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">Highly performant</div>
          </div>

          <div className="bg-slate-900/60 border border-amber-900/30 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Retry Queue
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-amber-400 flex items-center gap-1">Jira API Rate-limit</div>
          </div>
        </div>

        {/* Sync Ledger */}
        <div>
          <PremiumTable 
            title="Recent Synchronization Events" 
            description="All external data transfers generate immutable Runtime Evidence to ensure strict deterministic auditing."
            headers={["Execution ID", "Connector", "Event Type", "Payload Size", "Latency", "Status"]}
          >
            {[
              { id: "SYNC-A10", conn: "GitHub", type: "Push Webhook", size: "12 KB", latency: "105ms", status: "Success" },
              { id: "SYNC-A09", conn: "GitHub", type: "PR Review Submitted", size: "8 KB", latency: "110ms", status: "Success" },
              { id: "SYNC-A08", conn: "Jira", type: "Issue Status Update", size: "4 KB", latency: "TIMEOUT", status: "Failed (Retrying)" },
              { id: "SYNC-A07", conn: "Datadog", type: "Metrics Alert", size: "22 KB", latency: "240ms", status: "Success" },
              { id: "SYNC-A06", conn: "Okta", type: "Identity Provisioning", size: "14 KB", latency: "89ms", status: "Success" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.id} timestamp="Logged" />
                </td>
                <td className="py-4 px-5 font-medium text-slate-200">{row.conn}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-500 font-mono">{row.size}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.latency}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>
      </div>
    </div>
  );
}
