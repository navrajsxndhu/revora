import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Search, FileCheck2, Fingerprint, Lock, ShieldAlert, Activity, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function MarketplaceCertificationCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Marketplace Certification Center</h1>
            <p className="text-slate-400">The constitutional validation engine for enterprise extensions, ensuring security and policy compliance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Audit Reports..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-md text-sm font-medium transition-colors text-white">
               <FileCheck2 className="w-4 h-4" /> Submit for Review
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Extensions in Review
              <Activity className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-amber-400">Currently undergoing scan</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Certified
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,192</div>
            <div className="text-xs text-emerald-400">Historically approved</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Rejected Submissions
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-rose-400">Failed constitutional policy</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Automated Pass Rate
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">91.4%</div>
            <div className="text-xs text-blue-400">Without manual intervention</div>
          </div>
        </div>

        {/* Certification Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Certification Pipeline" 
            headers={["Submission (App vX)", "Security Scan", "Dependency Audit", "Policy & RBAC Check", "Final Status", "Audit Trace"]}
          >
            {[
              { sub: "Salesforce CRM Core (v4.3)", sec: "Pass (0 CVEs)", dep: "Pass", pol: "Pass", status: "Gold Certified", trace: "CRT-EV-801" },
              { sub: "Internal Leave App (v1.0)", sec: "Pass (0 CVEs)", dep: "Pass", pol: "Pending Sign-off", status: "Review Required", trace: "CRT-EV-802" },
              { sub: "Legacy SAP Bridge (v1.1)", sec: "Warning (1 Low)", dep: "Pass", pol: "Pass", status: "Silver Certified", trace: "CRT-EV-803" },
              { sub: "Third-Party Data Miner (v2.0)", sec: "Failed (3 Critical)", dep: "Failed (Vulnerable)", pol: "Blocked (Egress)", status: "Rejected", trace: "CRT-EV-804" },
              { sub: "Slack Notifications (v5.3)", sec: "Scanning...", dep: "Scanning...", pol: "Queued", status: "In Progress", trace: "CRT-EV-805" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  {row.sub}
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <div className="flex items-center gap-2">
                      {row.sec.includes('Pass') ? <ShieldCheck className="w-3 h-3 text-emerald-500" /> : 
                       row.sec.includes('Failed') ? <ShieldAlert className="w-3 h-3 text-rose-500" /> :
                       <Activity className="w-3 h-3 text-amber-500" />}
                      <span className={row.sec.includes('Pass') ? 'text-emerald-400' : row.sec.includes('Failed') ? 'text-rose-400' : 'text-amber-400'}>{row.sec}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.dep.includes('Pass') ? 'text-emerald-400' : row.dep.includes('Failed') ? 'text-rose-400' : 'text-slate-400'}>{row.dep}</span>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <div className="flex items-center gap-2">
                      {row.pol.includes('Blocked') && <Lock className="w-3 h-3 text-rose-500" />}
                      {row.pol.includes('Sign-off') && <Fingerprint className="w-3 h-3 text-amber-500" />}
                      <span className={row.pol.includes('Pass') ? 'text-emerald-400' : row.pol.includes('Blocked') ? 'text-rose-400' : 'text-amber-400'}>{row.pol}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status.includes('Gold') ? 'bg-yellow-900/20 text-yellow-400 border-yellow-900/50' : 
                    row.status.includes('Silver') ? 'bg-slate-800 text-slate-300 border-slate-600' :
                    row.status.includes('Rejected') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
