import React from "react";
import Link from "next/link";
import { ArrowLeft, BrainCircuit, Search, Download, Bot, Users, Database, ShieldAlert, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AgentRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/agents" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Agent Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Agent Registry</h1>
            <p className="text-slate-400">Constitutional ledger of all approved autonomous models operating within the enterprise boundary.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Agents..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Registry
             </button>
          </div>
        </header>

        {/* Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Governed Autonomous Agents" 
            headers={["Agent Identity", "Department Owner", "Risk Tier", "Allowed Systems", "Runtime Status", "Constitutional Record"]}
          >
            {[
              { id: "AGT-FIN-01", name: "FinOps Optimization Bot", dept: "Finance & Accounting", risk: "Low (Read-Only)", systems: "AWS Billing, CMDB", status: "Active", trace: "AGT-REG-001" },
              { id: "AGT-CSM-04", name: "Customer Support Copilot", dept: "Customer Success", risk: "Medium (Drafts)", systems: "Zendesk, CRM", status: "Active", trace: "AGT-REG-002" },
              { id: "AGT-SEC-02", name: "Security Threat Analyzer", dept: "Cybersecurity", risk: "High (Investigation)", systems: "SIEM, Identity", status: "Active", trace: "AGT-REG-003" },
              { id: "AGT-INF-01", name: "Infrastructure Auto-Scaler", dept: "Platform Engineering", risk: "Critical (Execution)", systems: "AWS, Kubernetes", status: "Suspended", trace: "AGT-REG-004" },
              { id: "AGT-LGL-01", name: "Legal Contract Analyzer", dept: "Legal & Compliance", risk: "Low (Read-Only)", systems: "Contract Repo", status: "Active", trace: "AGT-REG-005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-blue-400 mb-0.5">{row.id}</span>
                    <span className="font-bold flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                       <Bot className="w-4 h-4 text-slate-500 mr-1" />
                       {row.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      {row.dept}
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className={`text-sm font-medium flex items-center gap-1 ${
                      row.risk.includes('Low') ? 'text-emerald-400' :
                      row.risk.includes('Medium') ? 'text-amber-400' :
                      row.risk.includes('High') ? 'text-rose-400' : 'text-purple-400'
                   }`}>
                      {row.risk.includes('High') || row.risk.includes('Critical') ? <ShieldAlert className="w-4 h-4" /> : null}
                      {row.risk}
                   </span>
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Database className="w-4 h-4" />
                      {row.systems}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
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
