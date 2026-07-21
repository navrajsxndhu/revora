import React from "react";
import Link from "next/link";
import { ArrowLeft, Leaf, Search, Play, CheckCircle2, Download, ArrowUpRight, ShieldCheck, TreePine, Droplets, Users } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ESGRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/esg" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ESG Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise ESG Registry</h1>
            <p className="text-slate-400">The constitutional ledger for all sustainability objectives, environmental metrics, and social programs.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Initiatives & Metrics..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export ESG Catalog
             </button>
          </div>
        </header>

        {/* ESG Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Sustainability & Governance Programs" 
            headers={["Identifier", "Initiative Name", "ESG Pillar", "Target Metric", "Lifecycle Stage", "Governance Record"]}
          >
            {[
              { id: "ESG-ENV-101", name: "Scope 1 Emissions Tracking", pillar: "Environmental", metric: "-25% by 2028", stage: "Active Tracking", trace: "ESG-EV-601" },
              { id: "ESG-ENV-104", name: "Water Stewardship Policy", pillar: "Environmental", metric: "Net Positive (NPI)", stage: "Policy Formulation", trace: "ESG-EV-605" },
              { id: "ESG-SOC-201", name: "Diversity & Inclusion Framework", pillar: "Social", metric: "50% Leadership Eq.", stage: "Implementation", trace: "ESG-EV-611" },
              { id: "ESG-GOV-305", name: "Supplier Code of Conduct Audit", pillar: "Governance", metric: "100% Tier 1 Audits", stage: "Active Execution", trace: "ESG-EV-615" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                      {row.pillar === 'Environmental' ? <Leaf className="w-4 h-4 text-emerald-500" /> : 
                       row.pillar === 'Social' ? <Users className="w-4 h-4 text-blue-500" /> : 
                       <ShieldCheck className="w-4 h-4 text-purple-500" />}
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <Link href={`/esg/registry/${row.id}`} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5">
                        View Constitution <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.pillar}
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded">
                      {row.metric}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.stage.includes('Active') || row.stage.includes('Execution') ? 'text-emerald-500' : 
                    'text-amber-500'
                  }`}>
                    {(row.stage.includes('Active') || row.stage.includes('Execution')) && <CheckCircle2 className="w-4 h-4" />}
                    {(!row.stage.includes('Active') && !row.stage.includes('Execution')) && <Play className="w-4 h-4" />}
                    {row.stage}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="State Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
