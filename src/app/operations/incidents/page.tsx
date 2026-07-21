import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, CheckCircle2, History, MessageSquare, AlertTriangle, GitMerge } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function IncidentManagementCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/operations" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Operations Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Incident Management Center</h1>
            <p className="text-slate-400">Constitutional governance over outages. All recovery actions and RCAs are bound to the Evidence Ledger.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-md text-sm font-medium transition-colors">
            <ShieldAlert className="w-4 h-4" /> Declare Major Incident
          </button>
        </header>

        {/* Incidents Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active & Recent Incidents" 
            headers={["Incident ID", "Description", "Severity", "Impacted Services", "Status", "Resolution Time"]}
          >
            {[
              { id: "INC-2026-081", desc: "Auth Gateway Memory Leak", sev: "SEV-1", impact: "API Gateway, Identity", status: "Investigating", time: "Ongoing (42m)" },
              { id: "INC-2026-080", desc: "Stripe API Latency Spikes", sev: "SEV-2", impact: "Payment Processing", status: "Resolved", time: "1h 14m" },
              { id: "INC-2026-079", desc: "Kafka Consumer Lag", sev: "SEV-3", impact: "Logging Pipeline", status: "Resolved", time: "4h 10m" },
              { id: "INC-2026-078", desc: "Database Failover Triggered", sev: "SEV-1", impact: "Primary Postgres Cluster", status: "Resolved (RCA Complete)", time: "12m" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <EvidenceBadge evidenceId={row.id} timestamp="Incident Declared" />
                </td>
                <td className="py-4 px-5 text-sm text-slate-300 font-medium">{row.desc}</td>
                <td className="py-4 px-5 text-sm">
                  <span className={`flex items-center gap-1 font-bold ${
                    row.sev === 'SEV-1' ? 'text-rose-500' :
                    row.sev === 'SEV-2' ? 'text-amber-500' : 'text-blue-500'
                  }`}>
                    {row.sev === 'SEV-1' && <ShieldAlert className="w-4 h-4" />}
                    {row.sev}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.impact}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status.includes('Resolved')
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {row.status.includes('Resolved') ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.time}</td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
