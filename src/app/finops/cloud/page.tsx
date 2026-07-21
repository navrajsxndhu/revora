import React from "react";
import Link from "next/link";
import { ArrowLeft, Cloud, Server, AlertTriangle, Layers, Database, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function CloudCostIntelligence() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/finops" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to FinOps Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Cloud Cost Intelligence</h1>
            <p className="text-slate-400">Deterministic tracking of AWS, Azure, and GCP spend linked to constitutional business owners.</p>
          </div>
        </header>

        {/* Cloud Costs Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Managed Cloud Resources" 
            headers={["Resource ID", "Provider", "Service Class", "Business Owner", "MTD Cost", "Forecast", "Efficiency"]}
          >
            {[
              { id: "i-09a8b7c6d5e4f3210", provider: "AWS", svc: "EC2 (r5.4xlarge)", owner: "Data Platform", mtd: "$1,240", fcst: "$1,850", eff: "Optimized" },
              { id: "db-postgres-prod-1", provider: "AWS", svc: "RDS (Multi-AZ)", owner: "Platform Eng", mtd: "$3,450", fcst: "$4,100", eff: "Warning (Over-provisioned)" },
              { id: "gke-cluster-eu-west1", provider: "GCP", svc: "Kubernetes Engine", owner: "EMEA Ops", mtd: "$4,210", fcst: "$5,000", eff: "Optimized" },
              { id: "blob-storage-cold", provider: "Azure", svc: "Blob Storage (Archive)", owner: "Legal", mtd: "$412", fcst: "$420", eff: "Critical (Unused Object Traces)" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-sm text-slate-300">{row.id}</td>
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-blue-400" />
                    {row.provider}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.svc}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm font-mono font-bold text-slate-200">{row.mtd}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.fcst}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.eff.includes('Optimized') ? 'text-emerald-500' :
                    row.eff.includes('Critical') ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.eff.includes('Optimized') && <ShieldCheck className="w-4 h-4" />}
                    {row.eff.includes('Warning') && <AlertTriangle className="w-4 h-4" />}
                    {row.eff.includes('Critical') && <AlertTriangle className="w-4 h-4" />}
                    {row.eff}
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
