import React from "react";
import Link from "next/link";
import { ArrowLeft, FileCheck2, ShieldAlert, AlertCircle, BarChart, BookOpen, Globe, Search } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ESGReportingCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">ESG Reporting Governance</h1>
            <p className="text-slate-400">Unified governance over regulatory disclosures, sustainability reporting, and ESG audits.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
            <BookOpen className="w-4 h-4" /> Initiate Disclosure Review
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Regulatory Frameworks
              <Globe className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">6</div>
            <div className="text-sm font-medium text-blue-400">Actively Managed (CSRD, GRI, etc.)</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Upcoming Deadlines
              <AlertCircle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">2</div>
            <div className="text-sm font-medium text-amber-400">Filings Due Within 30 Days</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Audit Non-Conformances
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">1</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               Third-Party Assurance Finding
            </div>
          </div>
        </div>

        {/* Reporting Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic ESG Disclosures & Filings" 
            headers={["Disclosure Framework", "Reporting Period", "Assigned Owner", "Status", "Governance Control", "Audit Trail"]}
          >
            {[
              { framework: "CSRD (EU) Annual Report", period: "FY2025", owner: "Chief Compliance Officer", status: "Drafting", gov: "Data Collection Phase", trace: "REP-EV-111" },
              { framework: "GRI Sustainability Index", period: "FY2025", owner: "Director of Sustainability", status: "Review", gov: "Pending Board Approval", trace: "REP-EV-114" },
              { framework: "TCFD Climate Risk Filing", period: "FY2025", owner: "Chief Risk Officer", status: "Submitted", gov: "Filed & Audited", trace: "REP-EV-119" },
              { framework: "Supplier Diversity Report (US)", period: "Q2 2026", owner: "Procurement Lead", status: "Data Validation", gov: "Third-Party Assurance", trace: "REP-EV-122" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-slate-500" />
                    {row.framework}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.period}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.status === 'Submitted' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Review' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.gov.includes('Filed') ? 'text-emerald-500' :
                    row.gov.includes('Board') ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.gov.includes('Board') && <ShieldAlert className="w-4 h-4" />}
                    {row.gov.includes('Filed') && <FileCheck2 className="w-4 h-4" />}
                    {row.gov}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Record Locked" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
