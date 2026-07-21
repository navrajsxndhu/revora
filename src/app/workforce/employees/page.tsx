import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Search, ShieldCheck, Mail, Building2, Briefcase, Download } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EmployeeRegistry() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Employee Registry</h1>
            <p className="text-slate-400">The constitutional ledger for all workforce identities, employment statuses, and organizational assignments.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Employees..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* Employee Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Workforce Identities" 
            headers={["Employee ID", "Name & Role", "Department", "Manager", "Clearance", "Status", "Identity Record"]}
          >
            {[
              { id: "EMP-10024", name: "Sarah Jenkins", role: "Principal Systems Engineer", dept: "Platform Eng", mgr: "Michael Chen", clear: "Level 4 (High)", status: "Active", trace: "ID-EV-991" },
              { id: "EMP-14092", name: "David Miller", role: "Regional Sales Director", dept: "EMEA Sales", mgr: "Amanda Wallace", clear: "Level 2 (Standard)", status: "Active", trace: "ID-EV-992" },
              { id: "EMP-15101", name: "Elena Rostova", role: "Information Security Analyst", dept: "Cybersecurity", mgr: "Robert King", clear: "Level 5 (Top Secret)", status: "Onboarding", trace: "ID-EV-993" },
              { id: "EMP-08412", name: "James Wilson", role: "Marketing Coordinator", dept: "Global Marketing", mgr: "Sarah Jenkins", clear: "Level 1 (Basic)", status: "Leave of Absence", trace: "ID-EV-994" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-900/40 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                      {row.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <div className="text-xs text-slate-500">{row.role}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-500" /> {row.dept}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mgr}</td>
                <td className="py-4 px-5">
                   <span className="text-xs font-mono text-slate-400 border border-slate-700 px-2 py-1 rounded bg-slate-900/50">
                      {row.clear}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Onboarding' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Identity Verified" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
