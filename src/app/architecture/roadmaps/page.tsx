import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, MapPin, Calendar, Clock, Download, PlusCircle, LayoutList, Target, TrendingUp } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseRoadmap() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/architecture" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Architecture Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Roadmap Planner</h1>
            <p className="text-slate-400">Unified visualization of architecture initiatives, strategic alignment, and delivery timelines.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Roadmaps..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Create Roadmap
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Roadmaps
              <MapPin className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-xs text-amber-400">Enterprise planning views</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Q3 Deliverables
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-emerald-400">Scheduled for completion</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Strategic Value (ROI)
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$145M</div>
            <div className="text-xs text-blue-400">Projected business impact</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Cross-Dependencies
              <LayoutList className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-purple-400">Managed architecture links</div>
          </div>
        </div>

        {/* Roadmaps Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Roadmaps" 
            headers={["Roadmap Title", "Domain Owner", "Time Horizon", "Status", "Completion", "Governance Trace"]}
          >
            {[
              { title: "Enterprise Cloud Migration FY26", owner: "Cloud Platform Eng", time: "FY26 Q1 - Q4", status: "In Progress", comp: "45%", trace: "RMP-EV-5001" },
              { title: "Core Banking Modernization", owner: "Financial Systems", time: "2025 - 2028", status: "In Progress", comp: "15%", trace: "RMP-EV-5002" },
              { title: "AI/ML Platform Capabilities", owner: "Data Science AI", time: "FY26 Q2 - Q3", status: "Planning", comp: "0%", trace: "RMP-EV-5003" },
              { title: "Zero Trust Network Access", owner: "CISO Office", time: "FY26 Q1 - Q2", status: "Nearing Completion", comp: "90%", trace: "RMP-EV-5004" },
              { title: "Data Center Decommissioning", owner: "IT Infrastructure", time: "FY25 Q4", status: "Completed", comp: "100%", trace: "RMP-EV-5005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-amber-400 text-sm flex items-center gap-2">
                       <MapPin className="w-4 h-4 text-slate-500" />
                       {row.title}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.owner}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    {row.time}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Completed' || row.status.includes('Nearing') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Planning' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: row.comp }}></div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{row.comp}</span>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Published" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
