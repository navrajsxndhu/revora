import React from "react";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, AlertTriangle, Scale, ShieldAlert, Zap, Box, Factory } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterprisePriorities() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/executive/situation-room" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Situation Room
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Priority Engine</h1>
            <p className="text-slate-400">Deterministic ranking of organizational priorities based on financial, operational, and compliance risk.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium text-slate-400">
               <Zap className="w-4 h-4 text-emerald-500" /> Auto-Ranking Enabled
             </div>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Critical Priorities
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-rose-400">Require Immediate Executive Action</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              High Priorities
              <TrendingUp className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">5</div>
            <div className="text-xs text-amber-500">Major Business Impact</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Medium Priorities
              <Scale className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-slate-500">Standard Operational Flow</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Priority Drift
              <Target className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Low</div>
            <div className="text-xs text-emerald-400">Execution aligns with strategy</div>
          </div>
        </div>

        {/* Priority Engine Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Ranked Strategic Action Queue" 
            headers={["Rank", "Strategic Initiative / Risk Event", "Primary Driver", "Composite Score", "Action Required", "Evidence Link"]}
          >
            {[
              { rank: "1", title: "Resolve Tier 1 Vendor Contract Dispute", driver: "Supply Chain Risk", score: "96.5", action: "Executive Escalation", trace: "PR-EV-401" },
              { rank: "2", title: "Approve $15M AWS Migration Budget", driver: "Financial / FinOps", score: "92.0", action: "Board Decision", trace: "PR-EV-402" },
              { rank: "3", title: "Submit Annual CSRD Sustainability Report", driver: "Compliance Exposure", score: "88.4", action: "Compliance Sign-off", trace: "PR-EV-403" },
              { rank: "4", title: "Launch Revora OS v2.5.0", driver: "Strategic Value", score: "84.2", action: "Release Governance Approval", trace: "PR-EV-404" },
              { rank: "5", title: "Hire VP of Engineering", driver: "Human Capital Gap", score: "76.8", action: "Final Interview Panel", trace: "PR-EV-405" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-bold text-lg text-slate-400 text-center w-16">
                   {i === 0 || i === 1 ? <span className="text-rose-500">{row.rank}</span> : 
                    i === 2 || i === 3 ? <span className="text-amber-500">{row.rank}</span> : 
                    <span className="text-slate-500">{row.rank}</span>}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                     {row.driver.includes('Supply') && <Factory className="w-4 h-4 text-amber-500" />}
                     {row.driver.includes('FinOps') && <TrendingUp className="w-4 h-4 text-emerald-500" />}
                     {row.driver.includes('Compliance') && <ShieldAlert className="w-4 h-4 text-purple-500" />}
                     {row.driver.includes('Strategic') && <Box className="w-4 h-4 text-blue-500" />}
                     {row.driver.includes('Human') && <Scale className="w-4 h-4 text-slate-400" />}
                     {row.title}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.driver}</td>
                <td className="py-4 px-5 text-sm font-mono font-bold text-slate-300">
                  <div className="flex items-center gap-2">
                     <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${parseFloat(row.score) > 90 ? 'bg-rose-500' : parseFloat(row.score) > 80 ? 'bg-amber-500' : 'bg-blue-500'}`} style={{width: `${row.score}%`}}></div>
                     </div>
                     {row.score}
                  </div>
                </td>
                <td className="py-4 px-5">
                   <span className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                      {row.action}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Calculated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
