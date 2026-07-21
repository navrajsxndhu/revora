import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, ShieldAlert, CheckCircle2, AlertTriangle, GitMerge, Network } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function APIGatewayCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/api-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to API Platform
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Gateway & Traffic Center</h1>
            <p className="text-slate-400">Live telemetry of enterprise API traffic. SLA degradations and security blocks are immediately captured as evidence.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-sm font-medium text-emerald-400">
            <Activity className="w-4 h-4" /> Gateway Online
          </div>
        </header>

        {/* Telemetry Grid */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Traffic Streams" 
            headers={["Endpoint", "Consumer", "RPM", "Latency (P99)", "Error Rate", "Action", "Trace"]}
          >
            {[
              { endpoint: "POST /v2/payments", consumer: "Mobile App", rpm: "4,250", latency: "210ms", errors: "0.01%", action: "Allowed", traceId: "GW-EX-9921" },
              { endpoint: "GET /v1/users/self", consumer: "Internal Portal", rpm: "12,400", latency: "45ms", errors: "0.00%", action: "Allowed", traceId: "GW-EX-9920" },
              { endpoint: "PUT /v1/inventory", consumer: "Supplier B2B", rpm: "85", latency: "1,450ms", errors: "4.20%", action: "Throttled (Rate Limit)", traceId: "GW-EX-9919" },
              { endpoint: "DELETE /v1/accounts", consumer: "Unknown", rpm: "12", latency: "12ms", errors: "100%", action: "Blocked (Invalid JWT)", traceId: "GW-EX-9918" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <Network className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-mono text-sm">{row.endpoint}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.consumer}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.rpm}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">
                  <span className={`${parseInt(row.latency.replace(/\D/g, '')) > 1000 ? 'text-amber-400' : ''}`}>
                    {row.latency}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">
                  <span className={`${parseFloat(row.errors) > 0 ? 'text-rose-400' : ''}`}>
                    {row.errors}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.action === 'Allowed'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : row.action.includes('Blocked')
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {row.action === 'Allowed' && <CheckCircle2 className="w-3 h-3" />}
                    {row.action.includes('Throttled') && <AlertTriangle className="w-3 h-3" />}
                    {row.action.includes('Blocked') && <ShieldAlert className="w-3 h-3" />}
                    {row.action}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.traceId} timestamp="Gateway Trace" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
