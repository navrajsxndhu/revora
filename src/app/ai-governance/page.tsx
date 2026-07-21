import React from "react";
import Link from "next/link";
import { Cpu, ShieldAlert, Zap, Server, Network, Database, Brain, Activity, Clock, FileText } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function AIGovernanceCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">AI Governance Authority</h1>
            <p className="text-slate-400">Constitutional oversight for Enterprise AI. No autonomous execution.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/ai-governance/models" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <Server className="w-4 h-4" /> Model Registry
            </Link>
            <Link href="/ai-governance/approvals" className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20 rounded-md text-sm font-medium transition-colors">
              <ShieldAlert className="w-4 h-4" /> Human Review Queue (4)
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered AI Models
              <Cpu className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-blue-400">Across 3 Providers</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Executions (24h)
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24,592</div>
            <div className="text-xs text-emerald-400">100% Policy Bound</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Blocked AI Operations
              <ShieldAlert className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">128</div>
            <div className="text-xs text-emerald-500">Violations prevented</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Model Drift Alerts
              <Zap className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-rose-400">Anomalous outputs detected</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Governance Vectors</h3>
            
            <Link href="/ai-governance/models" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise Model Registry</div>
                <div className="text-xs text-slate-500">Approved models and risk tiers</div>
              </div>
            </Link>

            <Link href="/ai-governance/providers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0">
                <Network className="w-4 h-4 text-slate-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">Provider Marketplace</div>
                <div className="text-xs text-slate-500">Vendor SLAs and Trust Scores</div>
              </div>
            </Link>

            <Link href="/ai-governance/prompts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Prompt Governance</div>
                <div className="text-xs text-slate-500">Version-controlled templates</div>
              </div>
            </Link>

            <Link href="/ai-governance/requests" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">AI Request Ledger</div>
                <div className="text-xs text-slate-500">Immutable execution traces</div>
              </div>
            </Link>
          </div>

          {/* Ledger Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Recent Executions (Runtime Tied)" 
              headers={["Model", "User", "Tokens", "Policy Action", "Timestamp"]}
            >
              {[
                { model: "gpt-4-turbo", user: "HR System", tokens: "4,200", policy: "Requires Human Sign-off", status: "Blocked", time: "2m ago" },
                { model: "claude-3-opus", user: "S. Chen", tokens: "850", policy: "Standard Analysis", status: "Passed", time: "15m ago" },
                { model: "gpt-3.5-turbo", user: "Billing API", tokens: "1,200", policy: "No PII Allowed", status: "Violation", time: "1h ago" },
                { model: "gemini-1.5-pro", user: "M. Reed", tokens: "12,050", policy: "Code Review", status: "Passed", time: "2h ago" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-slate-500" /> {row.model}
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.user}</td>
                  <td className="py-4 px-5 text-sm text-slate-400 font-mono">{row.tokens}</td>
                  <td className="py-4 px-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-300">{row.policy}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium w-max border ${
                        row.status === 'Passed'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : row.status === 'Blocked'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.time}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>

        </div>
      </div>
    </div>
  );
}
