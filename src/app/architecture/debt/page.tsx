import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, AlertTriangle, Activity, AlertOctagon, Info, FileWarning, ArrowDownToLine, Download, Flame, ShieldAlert, Shield } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function TechnicalDebtGovernance() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Technical Debt Governance</h1>
            <p className="text-slate-400">Tracks enterprise technical debt, legacy dependencies, architecture violations, and remediation plans.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Debt Items..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Register
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Tech Debt Value
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$42.5M</div>
            <div className="text-xs text-rose-400">Estimated remediation cost</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Critical Violations
              <Flame className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18</div>
            <div className="text-xs text-amber-400">P1 Architecture Exceptions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              End-of-Life Systems
              <AlertOctagon className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">34</div>
            <div className="text-xs text-purple-400">Active EOL components</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Remediation Velocity
              <ArrowDownToLine className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12.4%</div>
            <div className="text-xs text-emerald-400">Debt reduced this FY</div>
          </div>
        </div>

        {/* Tech Debt Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Technical Debt Register" 
            headers={["Debt Item / Asset", "Debt Category", "Severity", "Est. Remediation", "Status", "Governance Trace"]}
          >
            {[
              { item: "Legacy Payment Gateway Integration", asset: "APP-0142", cat: "Architecture Violation (Point-to-Point)", sev: "Critical (P1)", cost: "$1.2M / 6mo", status: "Remediation Planned", trace: "DBT-EV-6001" },
              { item: "Deprecated AngularJS Frontend", asset: "APP-0551", cat: "End-of-Life Framework", sev: "High (P2)", cost: "$850k / 4mo", status: "In Progress", trace: "DBT-EV-6002" },
              { item: "Hardcoded Service Credentials", asset: "APP-0294", cat: "Security Debt", sev: "Critical (P1)", cost: "$50k / 2w", status: "Overdue", trace: "DBT-EV-6003" },
              { item: "Monolithic Database (Missing Isolation)", asset: "APP-1102", cat: "Design Debt", sev: "Medium (P3)", cost: "$4.5M / 18mo", status: "Accepted (Exception)", trace: "DBT-EV-6004" },
              { item: "Missing Test Coverage Core Libs", asset: "APP-0822", cat: "Code Debt", sev: "Low (P4)", cost: "$120k / 1mo", status: "Backlog", trace: "DBT-EV-6005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-rose-400 text-sm">{row.item}</span>
                     <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                       <FileWarning className="w-3 h-3" /> {row.asset}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.cat}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.sev.includes('Critical') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.sev.includes('High') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.sev.includes('Medium') ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.sev.includes('Critical') && <ShieldAlert className="w-3 h-3" />}
                    {row.sev}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.cost}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-medium px-2 py-1 rounded w-max block ${
                    row.status.includes('Progress') ? 'text-blue-400' : 
                    row.status === 'Overdue' ? 'text-rose-400' :
                    row.status.includes('Accepted') ? 'text-emerald-400' :
                    'text-slate-400'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Registered" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
