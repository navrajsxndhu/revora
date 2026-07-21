import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, History, Link as LinkIcon, AlertTriangle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function PromptGovernanceCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Prompt Governance Center</h1>
            <p className="text-slate-400">Strict version control and policy bindings for all Generative AI templates.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
            <FileText className="w-4 h-4" /> Register New Prompt
          </button>
        </header>

        {/* Prompts Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Governed Enterprise Prompts" 
            headers={["Prompt Signature", "Owner", "Version", "Bound Policy", "Status", ""]}
          >
            {[
              { name: "Code Review Assistant", owner: "Platform Team", version: "v2.1.4", policy: "No External Source Leaks", status: "Approved" },
              { name: "Support Ticket Summarizer", owner: "Customer Exp", version: "v1.0.0", policy: "PII Masking Required", status: "Approved" },
              { name: "Financial Report Generator", owner: "Treasury", version: "v1.2.0", policy: "Human Sign-off Mandatory", status: "Approved" },
              { name: "Security Audit Parser", owner: "SecOps", version: "v0.9.0", policy: "Restricted Access (SecOps Only)", status: "Draft" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-purple-400" />
                    </div>
                    {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm">
                  <span className="flex items-center gap-1 text-slate-300 font-mono">
                    <History className="w-3 h-3 text-slate-500" /> {row.version}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm">
                  <span className="flex items-center gap-1 text-slate-400">
                    <LinkIcon className="w-3 h-3 text-emerald-500" /> {row.policy}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status === 'Approved'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {row.status === 'Approved' ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="text-sm text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Immutable Source
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
