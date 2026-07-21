import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Search, PlusCircle, Globe, Users, Clock, AlertTriangle, ShieldAlert, Key } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AgentPolicyCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Agent Policy Center</h1>
            <p className="text-slate-400">The constitutional governance engine controlling enterprise AI behavior, access rules, and runtime constraints.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Policies..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-72 transition-colors focus:ring-1 focus:ring-purple-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Draft New Policy
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Policies
              <ShieldCheck className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">48</div>
            <div className="text-xs text-purple-400">Enforced globally at runtime</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Restrictions
              <Globe className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-slate-500">Applies to all agents universally</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Department Overrides
              <Users className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-slate-500">Approved local exceptions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Policy Updates
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-amber-400">Awaiting Board Approval</div>
          </div>
        </div>

        {/* Policy Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Constitutional Policy Rulesets" 
            headers={["Policy Directive", "Target Scope", "Constraint / Limit", "Violation Escalation", "Governance Ledger"]}
          >
            {[
              { rule: "Zero Autonomous Mutation", scope: "Global (All Agents)", limit: "No Write Access without Signature", action: "Immediate Suspension", trace: "POL-001" },
              { rule: "Maximum Context Window", scope: "Global (All Agents)", limit: "128,000 Tokens per session", action: "Truncation / Warning", trace: "POL-002" },
              { rule: "PII & Financial Data Masking", scope: "Customer Success, Marketing", limit: "Redact SSN, CC, Balances", action: "Event Audit Log", trace: "POL-003" },
              { rule: "Infrastructure Mod Approval", scope: "Platform Engineering", limit: "VP Engineering Signature Required", action: "Execution Blocked", trace: "POL-004" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.rule.includes('Zero Autonomous') && <ShieldAlert className="w-4 h-4 text-rose-500" />}
                     {row.rule.includes('Context Window') && <Key className="w-4 h-4 text-amber-500" />}
                     {row.rule.includes('Data Masking') && <ShieldCheck className="w-4 h-4 text-emerald-500" />}
                     {row.rule.includes('Approval') && <Users className="w-4 h-4 text-blue-500" />}
                     {row.rule}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.scope}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.limit}
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                      row.action.includes('Suspension') || row.action.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      row.action.includes('Audit') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                   }`}>
                      {row.action.includes('Suspension') && <AlertTriangle className="w-3 h-3" />}
                      {row.action}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Active" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
