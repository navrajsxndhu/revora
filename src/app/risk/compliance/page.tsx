import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2, AlertTriangle, FileText, Database, Lock } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ComplianceCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/risk" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Risk Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Compliance & Control Center</h1>
            <p className="text-slate-400">Governance over ISO 27001, SOC 2, and PCI-DSS. Every control maps directly to constitutional evidence.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
            <ShieldCheck className="w-4 h-4" /> Export Compliance Report
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              SOC 2 Type II
              <Lock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">98%</div>
            <div className="text-sm font-medium text-emerald-400">124 of 126 Controls Passing</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              ISO 27001:2022
              <FileText className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">86%</div>
            <div className="text-sm font-medium text-amber-400">14 Controls At Risk</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              GDPR Compliance
              <Database className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">100%</div>
            <div className="text-sm font-medium text-emerald-400">All DSARs Resolved within SLA</div>
          </div>
        </div>

        {/* Compliance Controls Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Monitored Controls" 
            headers={["Control ID", "Framework", "Description", "Owner", "Automated Validation", "Status", "Evidence"]}
          >
            {[
              { id: "CC6.1", fw: "SOC 2", desc: "Logical access is restricted by MFA.", owner: "Identity Team", val: "Continuous (Prisma Auth)", status: "Passing", trace: "CTRL-CC61-90" },
              { id: "A.12.1.2", fw: "ISO 27001", desc: "Change management procedures are enforced.", owner: "Platform Eng", val: "Continuous (Evidence Ledger)", status: "Passing", trace: "CTRL-A12-42" },
              { id: "PCI-Req-8", fw: "PCI-DSS", desc: "Identify and authenticate access to system components.", owner: "Security Team", val: "Manual Review", status: "Exception Requested", trace: "CTRL-PCI-11" },
              { id: "A.9.2.3", fw: "ISO 27001", desc: "Management of privileged access rights.", owner: "Identity Team", val: "Continuous", status: "Failing", trace: "CTRL-A09-14" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-sm font-bold text-slate-200">{row.id}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.fw === 'SOC 2' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    row.fw === 'ISO 27001' ? 'bg-purple-900/20 text-purple-400 border-purple-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.fw}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.desc}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.val}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status === 'Passing' ? 'text-emerald-500' :
                    row.status === 'Failing' ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.status === 'Passing' && <CheckCircle2 className="w-4 h-4" />}
                    {row.status === 'Failing' && <AlertTriangle className="w-4 h-4" />}
                    {row.status === 'Exception Requested' && <AlertTriangle className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Last Validation" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
