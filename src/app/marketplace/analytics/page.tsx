import React from "react";
import Link from "next/link";
import { ArrowLeft, BarChart2, Search, Download, TrendingUp, Users, Box, PlayCircle, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function MarketplaceAnalytics() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Marketplace Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Ecosystem Analytics</h1>
            <p className="text-slate-400">Enterprise intelligence for extension adoption, operational health, and workflow efficiency.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Metrics..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Analytics Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Extension Adoption
              <TrendingUp className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">+24.1%</div>
            <div className="text-xs text-indigo-400">Month-over-month growth</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Workflow Executions
              <PlayCircle className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.2M</div>
            <div className="text-xs text-blue-400">Past 30 days across enterprise</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Upgrade Success Rate
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-emerald-400">Zero-downtime deployments</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Unused Extensions
              <Box className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-amber-400">Candidates for deprecation</div>
          </div>
        </div>

        {/* Analytics Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Top Performing Ecosystem Assets" 
            headers={["Asset Name (Extension / App)", "Asset Type", "Owning Department", "Monthly Executions", "Reliability Score", "Analytics ID"]}
          >
            {[
              { name: "Salesforce CRM Core", type: "Marketplace Extension", dept: "Sales Operations", exec: "1.2M", score: "99.9%", trace: "ANX-EV-201" },
              { name: "Employee Onboarding Form", type: "Low-Code App", dept: "Human Resources", exec: "4,200", score: "100%", trace: "ANX-EV-202" },
              { name: "Routine Security Scan", type: "Automation Template", dept: "InfoSec", exec: "140k", score: "99.9%", trace: "ANX-EV-203" },
              { name: "Global Procurement Portal", type: "Low-Code App", dept: "Supply Chain", exec: "84k", score: "99.5%", trace: "ANX-EV-204" },
              { name: "Workday HR Sync", type: "Marketplace Extension", dept: "Human Resources", exec: "420k", score: "99.8%", trace: "ANX-EV-205" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <BarChart2 className="w-4 h-4 text-slate-500" />
                     {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.type}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      {row.dept}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.exec}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-emerald-400">
                   {row.score}
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
