import React from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Award, TrendingUp, AlertCircle, FileCheck2, ShieldCheck, Target } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function TalentCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/workforce" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Human Capital
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Talent, Performance & Learning Center</h1>
            <p className="text-slate-400">Unified governance over performance evaluations, succession planning, and compliance certifications.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md text-sm font-medium transition-colors text-white">
            <Target className="w-4 h-4" /> Start Evaluation Cycle
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Q2 Performance Reviews
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">94%</div>
            <div className="text-sm font-medium text-emerald-400">Completion Rate</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Succession Coverage
              <Award className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">82%</div>
            <div className="text-sm font-medium text-blue-400">Critical Roles with Identified Successors</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Mandatory Certifications
              <ShieldCheck className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">114</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               <AlertCircle className="w-3 h-3" /> Expiring in 30 days
            </div>
          </div>
        </div>

        {/* Talent & Compliance Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Talent Actions & Certifications" 
            headers={["Employee / Subject", "Action Type", "Department", "Due Date", "Status", "Evaluation Evidence"]}
          >
            {[
              { subj: "Marcus Johnson (VP Sales)", type: "Executive Succession Plan", dept: "Global Sales", due: "2026-07-30", status: "In Review", trace: "TLN-EV-012" },
              { subj: "Annual Data Privacy Training", type: "Mandatory Compliance", dept: "Enterprise-Wide", due: "2026-08-15", status: "In Progress (84%)", trace: "TLN-EV-044" },
              { subj: "Sarah Jenkins (Principal Eng)", type: "AWS Solutions Architect Renewal", dept: "Platform Eng", due: "2026-07-25", status: "Overdue", trace: "TLN-EV-091" },
              { subj: "Q2 Engineering Promotions", type: "Performance Calibration", dept: "Engineering", due: "2026-07-15", status: "Completed", trace: "TLN-EV-104" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.subj}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.type.includes('Compliance') || row.type.includes('Renewal') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.type.includes('Succession') ? 'bg-purple-900/20 text-purple-400 border-purple-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.type}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.dept}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.due}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status === 'Completed' ? 'text-emerald-500' :
                    row.status === 'Overdue' ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.status === 'Overdue' && <AlertCircle className="w-4 h-4" />}
                    {row.status === 'Completed' && <FileCheck2 className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Record Updated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
