import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Database, CheckCircle2, ShieldAlert } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AIRequestLedger() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ai-governance" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to AI Governance
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">AI Request Ledger</h1>
            <p className="text-slate-400">Immutable trace of every inference request, permanently bound to the Runtime Execution Ledger.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-sm font-medium text-emerald-400">
            <Database className="w-4 h-4" /> Connected to Evidence Ledger
          </div>
        </header>

        {/* Ledger Grid */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Inference Execution Trace" 
            headers={["Execution ID", "Initiator", "Model / Provider", "Prompt Template", "Token Usage", "Status"]}
          >
            {[
              { id: "AI-EX-8902", initiator: "HR System", model: "gpt-4-turbo", provider: "Azure", prompt: "Support Ticket Summarizer v1.0.0", tokens: "4,200", status: "Blocked (Human Review)" },
              { id: "AI-EX-8901", initiator: "S. Chen", model: "claude-3-opus", provider: "Anthropic", prompt: "Code Review Assistant v2.1.4", tokens: "850", status: "Completed" },
              { id: "AI-EX-8900", initiator: "Billing API", model: "gpt-3.5-turbo", provider: "OpenAI", prompt: "Financial Report Generator v1.2.0", tokens: "1,200", status: "Policy Violation" },
              { id: "AI-EX-8899", initiator: "M. Reed", model: "gemini-1.5-pro", provider: "GCP", prompt: "Ad-hoc (Unstructured)", tokens: "12,050", status: "Completed" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <EvidenceBadge evidenceId={row.id} timestamp="Cryptographic Trace" />
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.initiator}</td>
                <td className="py-4 px-5 text-sm">
                  <div className="flex flex-col">
                    <span className="text-slate-300 font-medium">{row.model}</span>
                    <span className="text-slate-500 text-xs">{row.provider}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.prompt}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.tokens}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : row.status.includes('Blocked')
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {row.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
