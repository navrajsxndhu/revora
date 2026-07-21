import React from "react";
import Link from "next/link";
import { ArrowLeft, FileCheck2, ShieldAlert, AlertCircle, Play, ShieldCheck, FileWarning, Search } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function QualityAssuranceCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/manufacturing" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Manufacturing Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Quality Assurance & Governance</h1>
            <p className="text-slate-400">Unified governance over quality inspections, non-conformances, and corrective actions (CAPA).</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md text-sm font-medium transition-colors text-white">
            <FileWarning className="w-4 h-4" /> Log Quality Issue
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Final Inspection Pass Rate
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">98.2%</div>
            <div className="text-sm font-medium text-emerald-400">Exceeds 95% Quality Target</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Non-Conformances (NCR)
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">12</div>
            <div className="text-sm font-medium text-rose-400">3 Critical Escalations</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Open CAPA Workflows
              <FileWarning className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">4</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               Awaiting Root Cause Analysis
            </div>
          </div>
        </div>

        {/* Quality Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Quality Control & Inspection Queue" 
            headers={["Inspection / Issue ID", "Product & Order", "Inspector / Owner", "Severity", "Quality Gate Status", "Governance Check"]}
          >
            {[
              { id: "NCR-9912", prod: "Enterprise Router (PROD-2441)", owner: "Quality Engineering", sev: "Critical", status: "Hold (Executive Approval Required)", trace: "QA-EV-771" },
              { id: "CAPA-042", prod: "Switch Chassis (PROD-2445)", owner: "Process Engineer", sev: "High", status: "Under Investigation", trace: "QA-EV-775" },
              { id: "INSP-410", prod: "Power Supply Unit (PROD-2420)", owner: "QC Technician", sev: "Routine", status: "Passed (Cleared for Shipment)", trace: "QA-EV-780" },
              { id: "INSP-415", prod: "Incoming Material (Steel)", owner: "Receiving Inspector", sev: "Routine", status: "Failed (Return to Vendor)", trace: "QA-EV-782" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-slate-200 text-sm">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.prod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.sev === 'Critical' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.sev === 'High' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.sev}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status.includes('Passed') ? 'text-emerald-500' :
                    row.status.includes('Hold') || row.status.includes('Failed') ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {(row.status.includes('Hold') || row.status.includes('Failed')) && <ShieldAlert className="w-4 h-4" />}
                    {row.status.includes('Passed') && <FileCheck2 className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Audit Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
