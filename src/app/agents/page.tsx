import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, ShieldCheck, Activity, BrainCircuit, Lock, ShieldAlert, Cpu, FileSignature, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function AgentCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Autonomous Agent Command Center</h1>
            <p className="text-slate-400">Enterprise governance and human oversight over all autonomous AI operations.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/agents/approvals" className="flex items-center gap-2 px-4 py-2 bg-rose-900/40 text-rose-400 border border-rose-900/50 hover:bg-rose-900/60 rounded-md text-sm font-medium transition-colors">
              <FileSignature className="w-4 h-4" /> Human Approval Queue (3)
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered Agents
              <Bot className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-blue-400">Constitutionally Governed</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Agent Sessions
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-emerald-500">Executing within limits</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Suspended Agents
              <Lock className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-amber-400">Policy Violation Detected</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Compliance Score
              <ShieldCheck className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-purple-400">Zero Autonomous Executions</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Agent Governance</h3>
            
            <Link href="/agents/registry" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <BrainCircuit className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise Agent Registry</div>
                <div className="text-xs text-slate-500">Governed AI models</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/agents/capabilities" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors">Agent Capabilities</div>
                <div className="text-xs text-slate-500">Explicit permission boundaries</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </Link>

            <Link href="/agents/executions" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Execution Ledger</div>
                <div className="text-xs text-slate-500">Immutable runtime logs</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/agents/approvals" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <FileSignature className="w-4 h-4 text-rose-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">Human Approval Center</div>
                <div className="text-xs text-slate-500">Authorization boundaries</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-rose-400 transition-colors" />
            </Link>

            <Link href="/agents/policies" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Agent Policy Center</div>
                <div className="text-xs text-slate-500">Constitutional rulesets</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/agents/audit" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Audit & Compliance</div>
                <div className="text-xs text-slate-500">Violation & exception tracking</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
          </div>

          {/* Active Enterprise Operations Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Recent Autonomous AI Executions" 
              headers={["Execution ID", "Agent Identity", "Domain Context", "Outcome"]}
            >
              {[
                { id: "EXEC-AI-901", agent: "FinOps Optimization Bot", context: "Analyzed AWS Billing Export (Read-Only)", status: "Completed" },
                { id: "EXEC-AI-902", agent: "Customer Support Copilot", context: "Drafted Email Response to ACME Corp", status: "Pending Human Review" },
                { id: "EXEC-AI-903", agent: "Infrastructure Auto-Scaler", context: "Attempted to modify Production VPC", status: "Blocked (Policy Violation)" },
                { id: "EXEC-AI-904", agent: "Legal Contract Analyzer", context: "Summarized 42-page NDA Agreement", status: "Completed" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.id}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Bot className="w-4 h-4 text-blue-500" />
                       {row.agent}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.context}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block flex items-center gap-1 ${
                      row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                    }`}>
                      {row.status.includes('Completed') && <CheckCircle2 className="w-3 h-3" />}
                      {row.status.includes('Blocked') && <ShieldAlert className="w-3 h-3" />}
                      {row.status.includes('Pending') && <FileSignature className="w-3 h-3" />}
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
