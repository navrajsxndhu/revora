import React from "react";
import Link from "next/link";
import { ArrowLeft, BrainCircuit, Search, GitBranch, ShieldCheck, Download, ExternalLink, ShieldAlert, GitCommit, Tags } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ModelRegistry() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Model Registry</h1>
            <p className="text-slate-400">Constitutional registry for all ML models, linking versions directly to EvidenceLedger governance records.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Models..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Registry
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered Models
              <BrainCircuit className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">186</div>
            <div className="text-xs text-indigo-400">Unique ML architectures</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Production Endpoints
              <ExternalLink className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">124</div>
            <div className="text-xs text-emerald-400">Actively serving inference</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Staging / Testing
              <GitBranch className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-blue-400">Awaiting promotion</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Human Approval
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">6</div>
            <div className="text-xs text-amber-400">Require executive signature</div>
          </div>
        </div>

        {/* Model Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Model Directory" 
            headers={["Model Name / Domain", "Latest Version", "Framework", "Current Stage", "Governance Status", "Trace"]}
          >
            {[
              { name: "customer_churn_predictor", domain: "Retention Ops", ver: "v4.2.1", fw: "XGBoost", stage: "Production", status: "Approved", trace: "MOD-EV-101" },
              { name: "fraud_detect_realtime", domain: "Risk & Compliance", ver: "v12.0.0", fw: "PyTorch", stage: "Production", status: "Approved", trace: "MOD-EV-102" },
              { name: "llm_doc_summarizer", domain: "Knowledge Base", ver: "v2.0.0-rc1", fw: "vLLM", stage: "Staging", status: "Pending Eval", trace: "MOD-EV-103" },
              { name: "supply_chain_forecast", domain: "Logistics", ver: "v3.1.4", fw: "TensorFlow", stage: "Production", status: "Approved", trace: "MOD-EV-104" },
              { name: "pricing_optimizer", domain: "Commerce", ver: "v5.0.0", fw: "LightGBM", stage: "Staging", status: "Blocked (Bias)", trace: "MOD-EV-105" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-indigo-400 text-sm flex items-center gap-2">
                       <BrainCircuit className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                     <span className="text-xs text-slate-500 pl-6">{row.domain}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
                      <GitCommit className="w-3 h-3 text-slate-600" />
                      {row.ver}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 w-max">
                      <Tags className="w-3 h-3 text-slate-500" />
                      {row.fw}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.stage === 'Production' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.stage}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Approved' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Approved' && <ShieldCheck className="w-3 h-3" />}
                    {row.status.includes('Blocked') && <ShieldAlert className="w-3 h-3" />}
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
