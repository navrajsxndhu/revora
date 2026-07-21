import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, ShieldCheck, ShieldAlert, GitCompare, HardDrive, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseCMDB() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/assets" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Asset Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise CMDB</h1>
            <p className="text-slate-400">The constitutional ledger for all Configuration Items (CIs). No unverified configuration may execute.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
            <Layers className="w-4 h-4" /> Register New CI
          </button>
        </header>

        {/* CMDB Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Managed Configuration Items" 
            headers={["CI ID", "Classification", "Business Owner", "Lifecycle", "Environment", "Config Hash", "Status"]}
          >
            {[
              { id: "CI-DB-892", class: "Postgres Cluster", owner: "Data Platform", lifecycle: "Active", env: "Production", hash: "a8f9...2b1", status: "Compliant" },
              { id: "CI-NET-114", class: "Ingress Gateway", owner: "Cloud Platform", lifecycle: "Active", env: "Production", hash: "c41a...9f0", status: "Compliant" },
              { id: "CI-APP-331", class: "Payment Worker", owner: "Finance Team", lifecycle: "Deploying", env: "Staging", hash: "PENDING", status: "Validating" },
              { id: "CI-SEC-091", class: "Identity Firewall", owner: "Security Team", lifecycle: "Active", env: "Production", hash: "UNKNOWN", status: "Drift Detected" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="font-mono text-sm">{row.id}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.class}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.lifecycle}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.env === 'Production' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.env}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">
                  {row.hash}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status === 'Compliant' ? 'text-emerald-500' :
                    row.status === 'Drift Detected' ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.status === 'Compliant' && <ShieldCheck className="w-4 h-4" />}
                    {row.status === 'Drift Detected' && <GitCompare className="w-4 h-4" />}
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
