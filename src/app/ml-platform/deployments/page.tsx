import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, CheckCircle2, Server, Globe, GitMerge, RotateCcw, PlayCircle, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ModelDeployments() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Model Deployment Governance</h1>
            <p className="text-slate-400">Enterprise governance for production endpoints. All deployments require authenticated Human Approval.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Deployments..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded-md text-sm font-medium transition-colors text-white">
               <GitMerge className="w-4 h-4" /> Request Promotion
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Production Endpoints
              <Server className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">124</div>
            <div className="text-xs text-emerald-400">Stable environments</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Canary Deployments
              <PlayCircle className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18</div>
            <div className="text-xs text-blue-400">Active traffic splitting</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Staging Environments
              <Globe className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-purple-400">Pending QA validation</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Recent Rollbacks (7d)
              <RotateCcw className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-amber-400">Automated safety net</div>
          </div>
        </div>

        {/* Deployments Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Deployment Registry" 
            headers={["Deployment ID / Target", "Model Version", "Environment", "Status", "Governance Signature", "Deployment Trace"]}
          >
            {[
              { id: "DEP-prod-us-east-1", model: "customer_churn_predictor@v4.2.1", env: "Production", status: "Healthy", gov: "Signed (J. Doe)", trace: "DPL-EV-501" },
              { id: "DEP-canary-eu-west", model: "fraud_detect_realtime@v12.1.0", env: "Canary (10%)", status: "Monitoring", gov: "Signed (A. Smith)", trace: "DPL-EV-502" },
              { id: "DEP-stage-global", model: "llm_doc_summarizer@v2.0.0-rc1", env: "Staging", status: "Healthy", gov: "Auto (CI/CD)", trace: "DPL-EV-503" },
              { id: "DEP-prod-ap-south-1", model: "supply_chain_forecast@v3.1.4", env: "Production", status: "Healthy", gov: "Signed (M. Patel)", trace: "DPL-EV-504" },
              { id: "DEP-prod-us-west-2", model: "pricing_optimizer@v5.0.0", env: "Production", status: "Rollback Complete", gov: "Emergency Override", trace: "DPL-EV-505" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-emerald-400 text-sm flex items-center gap-2">
                       <Server className="w-4 h-4 text-slate-500" />
                       {row.id}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.model}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-purple-300">
                   {row.env}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Healthy' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Rollback') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.status === 'Healthy' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status.includes('Rollback') && <RotateCcw className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.gov.includes('Signed') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.gov.includes('Emergency') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.gov.includes('Signed') && <ShieldCheck className="w-3 h-3" />}
                    {row.gov}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Sealed" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
