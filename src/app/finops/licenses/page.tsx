import React from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Users, ShieldAlert, CheckCircle2, History } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function SaaSGovernance() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">SaaS License Governance</h1>
            <p className="text-slate-400">Inventory of enterprise subscriptions. Unused licenses are flagged for constitutional reclamation.</p>
          </div>
        </header>

        {/* SaaS Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Managed Software Subscriptions" 
            headers={["Vendor", "Plan Type", "Allocated Seats", "Active Seats", "Annual Cost", "Renewal Date", "Action", "Audit"]}
          >
            {[
              { vendor: "Microsoft 365", plan: "E5 Enterprise", alloc: "4,500", active: "4,210", cost: "$1.94M", renew: "2026-12-01", action: "Optimized", trace: "LIC-891" },
              { vendor: "Datadog", plan: "Pro Tier", alloc: "Unlimited", active: "124 Hosts", cost: "$412K", renew: "2027-01-15", action: "Optimized", trace: "LIC-892" },
              { vendor: "GitHub Enterprise", plan: "Enterprise Cloud", alloc: "800", active: "800", cost: "$201K", renew: "2026-09-30", action: "Capacity Warning", trace: "LIC-893" },
              { vendor: "Figma", plan: "Organization", alloc: "200", active: "42", cost: "$108K", renew: "2026-11-20", action: "Reclaim Licenses", trace: "LIC-894" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    {row.vendor}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.plan}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.alloc}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.active}</td>
                <td className="py-4 px-5 text-sm font-mono font-bold text-slate-200">{row.cost}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.renew}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.action.includes('Reclaim')
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                      : row.action.includes('Warning')
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {row.action.includes('Reclaim') && <ShieldAlert className="w-3 h-3" />}
                    {row.action}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Utilization Scan" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
