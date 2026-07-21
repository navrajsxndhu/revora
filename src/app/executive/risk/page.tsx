import React from "react";
import Link from "next/link";
import { ArrowLeft, Target, TrendingDown, ShieldAlert, ShieldCheck, Activity, Users } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveRiskDashboard() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Risk Board</h1>
            <p className="text-slate-400">Board-level transparency into Enterprise Risk, Compliance Readiness, and Resilience.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Enterprise Risk Score
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">78<span className="text-xl text-slate-500 font-normal">/100</span></div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               <TrendingDown className="w-3 h-3" /> Deteriorated 2pts this quarter
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Audit Readiness
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">94%</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               ISO 27001 & SOC 2 Type II
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              BC/DR Health
              <Activity className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">Tier 1</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               All Critical Systems Tested
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Vendor Risk Exposure
              <Users className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$14.2M</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               Value tied to high-risk suppliers
            </div>
          </div>
        </div>

        {/* Risk Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Top 5 Enterprise Risks" 
              headers={["Risk Topic", "Severity", "Trend"]}
            >
              {[
                { name: "Third-Party Data Breach", sev: "Critical", trend: "Increasing" },
                { name: "Regulatory Fine (GDPR)", sev: "High", trend: "Stable" },
                { name: "Datacenter Outage", sev: "High", trend: "Decreasing" },
                { name: "Key Personnel Attrition", sev: "Medium", trend: "Stable" },
                { name: "Supply Chain Disruption", sev: "Medium", trend: "Increasing" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.name}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.sev === 'Critical' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.sev === 'High' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.sev}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.trend}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Executive Approvals" 
              headers={["Request Type", "Target", "Financial Impact"]}
            >
              {[
                { type: "Risk Acceptance", target: "RSK-091 (Legacy DB)", impact: "$2.4M Exposure" },
                { type: "Control Exception", target: "SOC2-CC6.1 (MFA)", impact: "Compliance Risk" },
                { type: "Vendor Onboarding", target: "DataDog (High Risk)", impact: "$840K Contract" },
                { type: "DR Failover Test", target: "US-East-1 Production", impact: "$40K Cost" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">{row.type}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.target}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.impact}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
