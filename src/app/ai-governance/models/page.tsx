import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldAlert, CheckCircle2, AlertTriangle, Key } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ModelRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ai-governance" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to AI Governance
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Model Registry</h1>
            <p className="text-slate-400">Inventory of all approved Generative AI assets and their restricted use cases.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
            <Cpu className="w-4 h-4" /> Register New Model
          </button>
        </header>

        {/* Models Grid */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Approved AI Models" 
            headers={["Model Name", "Provider", "Risk Tier", "Allowed Scope", "Status", ""]}
          >
            {[
              { name: "gpt-4-turbo", provider: "Azure OpenAI", risk: "Tier 1 (High)", scope: "Strictly Internal", status: "Approved" },
              { name: "claude-3-opus", provider: "Anthropic", risk: "Tier 2 (Med)", scope: "Engineering Only", status: "Approved" },
              { name: "llama-3-70b", provider: "Internal Cluster", risk: "Tier 3 (Low)", scope: "Unrestricted", status: "Approved" },
              { name: "gpt-3.5-turbo", provider: "OpenAI Public", risk: "Tier 1 (High)", scope: "None", status: "Blocked" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4 text-blue-400" />
                    </div>
                    {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.provider}</td>
                <td className="py-4 px-5 text-sm">
                  <span className={`flex items-center gap-1 ${
                    row.risk.includes('High') ? 'text-rose-400' :
                    row.risk.includes('Med') ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {row.risk.includes('High') && <AlertTriangle className="w-3 h-3" />}
                    {row.risk}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.scope}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status === 'Approved'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {row.status === 'Approved' ? <CheckCircle2 className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="text-sm text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Configure Policies
                  </button>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
