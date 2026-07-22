import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, LineChart, AlertTriangle, Scale, Target, Settings2, Bell, ShieldAlert } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ModelMonitoring() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ml-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ML Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Model Monitoring & Drift</h1>
            <p className="text-slate-400">Continuous governance tracking Data Drift, Concept Drift, Bias, and SLA compliance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Models..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Settings2 className="w-4 h-4" /> Alert Settings
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Drift Alerts
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Exceeds governance thresholds</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data Drift Warnings
              <LineChart className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-amber-400">Distribution shifts detected</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Bias Indicators
              <Scale className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-purple-400">Fairness metric violation</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Healthy Models
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">108</div>
            <div className="text-xs text-emerald-400">Operating within SLA</div>
          </div>
        </div>

        {/* Monitoring Alerts Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Drift & Governance Observations" 
            headers={["Model Version", "Metric Type", "Deviation / Status", "Threshold", "Governance Action", "Evidence"]}
          >
            {[
              { model: "pricing_optimizer@v5.0.0", metric: "Concept Drift", status: "Critical Shift Detected", val: "+15% err", thresh: "Max 5%", action: "Requires Retraining", trace: "MON-EV-701" },
              { model: "customer_churn_predictor@v4.2.1", metric: "Data Drift", status: "Feature Shift (age_demographic)", val: "0.22 KS", thresh: "0.15 KS", action: "Investigate", trace: "MON-EV-702" },
              { model: "hr_resume_screener@v2.0.0", metric: "Bias Indicator", status: "Fairness Violation (Gender)", val: "0.74 DI", thresh: "Min 0.80", action: "Blocked in Staging", trace: "MON-EV-703" },
              { model: "fraud_detect_realtime@v12.0.0", metric: "Performance Drift", status: "Healthy", val: "F1 0.94", thresh: "Min 0.90", action: "None", trace: "MON-EV-704" },
              { model: "supply_chain_forecast@v3.1.4", metric: "Data Quality", status: "Missing Values Spike", val: "4.2%", thresh: "Max 1%", action: "Alert Data Eng", trace: "MON-EV-705" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <span className="font-mono text-blue-400 text-sm">{row.model}</span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.metric}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium ${
                    row.status.includes('Healthy') ? 'text-emerald-400' : 
                    row.status.includes('Critical') || row.status.includes('Violation') ? 'text-rose-400' : 'text-amber-400'
                  }`}>
                    {row.status}
                    <div className="text-xs font-mono text-slate-500 mt-1">{row.val} (Limit: {row.thresh})</div>
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.thresh}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.action === 'None' ? 'bg-slate-800 text-slate-400 border-slate-700' : 
                    row.action.includes('Blocked') || row.action.includes('Retraining') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {(row.action.includes('Blocked') || row.action.includes('Retraining')) && <ShieldAlert className="w-3 h-3" />}
                    {row.action}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
