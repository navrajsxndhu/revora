import React from "react";
import Link from "next/link";
import { ShieldAlert, AlertTriangle, CheckCircle, ShieldCheck, FileWarning, Target, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function RiskCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Risk & GRC Authority</h1>
            <p className="text-slate-400">Constitutional governance over Enterprise Risk, Regulatory Compliance, and Business Continuity.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/risk/compliance" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <ShieldCheck className="w-4 h-4" /> Compliance Center
            </Link>
            <Link href="/executive/risk" className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-md text-sm font-medium transition-colors text-white">
              <Target className="w-4 h-4" /> Executive Risk Dashboard
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Enterprise Risk Score
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">78/100</div>
            <div className="text-xs text-rose-400">High Risk Threshold: &lt;80</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Critical Risks
              <AlertTriangle className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-amber-400">2 Mitigations Overdue</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Compliance Health
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">94%</div>
            <div className="text-xs text-emerald-400">Across 7 Frameworks</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              DR Readiness
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">B+</div>
            <div className="text-xs text-blue-400">Last test: 14 days ago</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">GRC Vectors</h3>
            
            <Link href="/risk/register" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <FileWarning className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">Risk Register</div>
                <div className="text-xs text-slate-500">Global enterprise risks</div>
              </div>
            </Link>

            <Link href="/risk/compliance" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Compliance Center</div>
                <div className="text-xs text-slate-500">ISO, SOC2, PCI-DSS</div>
              </div>
            </Link>

            <Link href="/risk/business-continuity" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Business Continuity</div>
                <div className="text-xs text-slate-500">BIA & Recovery planning</div>
              </div>
            </Link>
          </div>

          {/* Critical Risks Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Top Enterprise Risks" 
              headers={["Risk ID", "Description", "Owner", "Severity", "Mitigation Status"]}
            >
              {[
                { id: "RSK-091", desc: "Third-Party Data Breach Exposure", owner: "Security Team", sev: "Critical", status: "Overdue" },
                { id: "RSK-104", desc: "Ransomware on Legacy Systems", owner: "Infrastructure", sev: "High", status: "In Progress" },
                { id: "RSK-212", desc: "Non-Compliance with GDPR Article 32", owner: "Legal & Privacy", sev: "High", status: "In Progress" },
                { id: "RSK-084", desc: "Single-Region Database Failure", owner: "Platform Eng", sev: "Medium", status: "Mitigated" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.id}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    {row.desc}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.sev === 'Critical' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.sev === 'High' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.sev}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`text-sm font-medium flex items-center gap-1 ${
                      row.status === 'Overdue' ? 'text-rose-500' :
                      row.status === 'Mitigated' ? 'text-emerald-500' : 'text-slate-400'
                    }`}>
                      {row.status === 'Overdue' && <AlertTriangle className="w-4 h-4" />}
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

        </div>
      </div>
    </div>
  );
}
