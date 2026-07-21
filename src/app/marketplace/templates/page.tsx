import React from "react";
import Link from "next/link";
import { ArrowLeft, GitMerge, Search, Download, ShieldCheck, Workflow, FolderGit2, CheckCircle2, PlayCircle, Settings2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AutomationTemplatesCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Automation Templates</h1>
            <p className="text-slate-400">A governed library of reusable, evidence-bound enterprise automation workflows.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Templates..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded-md text-sm font-medium transition-colors text-white">
               <Workflow className="w-4 h-4" /> Import Blueprint
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Certified Blueprints
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-emerald-400">Approved by Architecture Council</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Executions
              <PlayCircle className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-blue-400">Instances running globally</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Time Saved (YTD)
              <Settings2 className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14,200h</div>
            <div className="text-xs text-indigo-400">Via automated orchestration</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Human In-Loop Tasks
              <GitMerge className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">450</div>
            <div className="text-xs text-amber-400">Pending required signatures</div>
          </div>
        </div>

        {/* Templates Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Automation Blueprint Registry" 
            headers={["Template Name / Department", "Complexity", "Required Approvals", "Execution Volume", "Governance Status", "Policy Trace"]}
          >
            {[
              { name: "Employee Onboarding (Global)", dept: "HR / IT Operations", comp: "High", app: "IT Manager, HR Admin", vol: "420 Executions", status: "Certified", trace: "TPL-EV-501" },
              { name: "New Vendor Approval Process", dept: "Procurement", comp: "Medium", app: "Financial Controller", vol: "84 Executions", status: "Certified", trace: "TPL-EV-502" },
              { name: "Cloud Infrastructure Spin-up", dept: "Cloud Architecture", comp: "Critical", app: "Security Lead, Arch Board", vol: "12 Executions", status: "Pending Review", trace: "TPL-EV-503" },
              { name: "Routine Security Scan", dept: "InfoSec", comp: "Low", app: "Auto (Policy Exempt)", vol: "14,000 Executions", status: "Certified", trace: "TPL-EV-504" },
              { name: "Executive Offboarding", dept: "Legal & HR", comp: "Critical", app: "General Counsel", vol: "1 Execution", status: "Certified", trace: "TPL-EV-505" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                       <Workflow className="w-4 h-4 text-emerald-500" />
                       {row.name}
                     </span>
                     <span className="text-xs font-mono text-slate-500 pl-6">{row.dept}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.comp === 'Low' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.comp === 'Critical' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                   }`}>
                      {row.comp}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <GitMerge className="w-4 h-4 text-slate-500" />
                      {row.app}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.vol}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Certified' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Certified' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Active" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
