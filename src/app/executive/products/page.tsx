import React from "react";
import Link from "next/link";
import { ArrowLeft, Box, TrendingUp, Lightbulb, Rocket, ShieldAlert, LineChart } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveProductDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Product Portfolio
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Product Board</h1>
            <p className="text-slate-400">Board-level transparency into portfolio health, roadmap execution, and innovation investments.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Portfolio Health
              <LineChart className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">92%</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               Strategic Alignment
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Product Revenue
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$840M</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Annual Run Rate (ARR)
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Innovation R&D
              <Lightbulb className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$42.5M</div>
            <div className="text-sm font-medium text-purple-400 flex items-center gap-1">
               Active Investment
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Roadmap Risks
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">3</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               Delayed Deliverables
            </div>
          </div>
        </div>

        {/* Product Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Strategic Product Portfolio" 
              headers={["Product Family", "ARR Contribution", "Lifecycle", "Health"]}
            >
              {[
                { name: "Revora Enterprise OS", rev: "$420.5M", stage: "Growth", status: "Excellent" },
                { name: "Cloud Compute Fabric", rev: "$280.0M", stage: "Mature", status: "Nominal" },
                { name: "AI Governance Platform", rev: "$85.2M", stage: "Introduction", status: "Accelerating" },
                { name: "Legacy Analytics Suite", rev: "$54.3M", stage: "End of Life", status: "Deprecating" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Box className="w-4 h-4 text-slate-500" />
                       {row.name}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.rev}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.stage}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Excellent' || row.status === 'Accelerating' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.status === 'Deprecating' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Executive Product Approvals" 
              headers={["Strategic Request", "Impact Assessment", "Executive Sponsor"]}
            >
              {[
                { req: "Q4 Roadmap Commitment", impact: "Major Release Launch", sponsor: "Chief Product Officer" },
                { req: "Platform Pricing Adjustment", impact: "+15% Enterprise Tier", sponsor: "Chief Revenue Officer" },
                { req: "Legacy Suite Retirement (Sunset)", impact: "Mandatory Migration", sponsor: "VP Product Strategy" },
                { req: "New AI Architecture Investment", impact: "$12M R&D Allocation", sponsor: "Chief Technology Officer" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">
                    <div className="flex items-center gap-2">
                       <Rocket className="w-4 h-4" />
                       {row.req}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.impact}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.sponsor}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
