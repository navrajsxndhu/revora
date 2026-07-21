import React from "react";
import Link from "next/link";
import { ArrowLeft, Bell, AlertTriangle, Cpu, HardDrive, Network, CheckCircle2, ShieldAlert } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseAlertCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Alert Center</h1>
            <p className="text-slate-400">Policy-driven operational telemetry. Alert resolutions are cryptographically bound to the Runtime Ledger.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600/20 text-amber-500 hover:bg-amber-600/30 border border-amber-600/50 rounded-md text-sm font-medium transition-colors">
            <Bell className="w-4 h-4" /> Configure Alert Policies
          </button>
        </header>

        {/* Alerts Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Operational Alerts" 
            headers={["Alert ID", "Resource", "Metric / Policy", "Trigger Value", "Severity", "Status"]}
          >
            {[
              { id: "ALT-9281", resource: "auth-service-gw (API Gateway)", metric: "Memory Utilization > 90%", val: "98%", sev: "Critical", status: "Active" },
              { id: "ALT-9280", resource: "us-east-cluster-1 (Node 4)", metric: "CPU Utilization > 80%", val: "84%", sev: "Warning", status: "Active" },
              { id: "ALT-9279", resource: "prod-db-primary (Postgres)", metric: "Connection Pool Exhaustion", val: "100%", sev: "Critical", status: "Active" },
              { id: "ALT-9278", resource: "payments-queue (Kafka)", metric: "Consumer Lag > 5m", val: "0m", sev: "Warning", status: "Resolved" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <EvidenceBadge evidenceId={row.id} timestamp="Alert Triggered" />
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    {row.resource.includes('Postgres') ? <HardDrive className="w-4 h-4 text-blue-400" /> : 
                     row.resource.includes('Gateway') ? <Network className="w-4 h-4 text-purple-400" /> :
                     <Cpu className="w-4 h-4 text-emerald-400" />}
                    {row.resource}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.metric}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">
                  <span className={`${row.sev === 'Critical' ? 'text-rose-400' : 'text-amber-400'}`}>
                    {row.val}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.sev === 'Critical'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {row.sev === 'Critical' ? <ShieldAlert className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {row.sev}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status === 'Resolved' ? 'text-emerald-500' : 'text-slate-300'
                  }`}>
                    {row.status === 'Resolved' && <CheckCircle2 className="w-4 h-4" />}
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
