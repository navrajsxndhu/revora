import React from "react";
import Link from "next/link";
import { Network, Activity, Clock, ShieldAlert, CheckCircle2, ChevronRight, PlayCircle, PauseCircle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function WorkflowDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Workflow Orchestration</h1>
            <p className="text-slate-400">Deterministic process execution. All protected actions require explicit human authorization.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/approvals" className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20 rounded-md text-sm font-medium transition-colors">
              <ShieldAlert className="w-4 h-4" /> Pending Approvals (3)
            </Link>
            <Link href="/workflows/designer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
              <Network className="w-4 h-4" /> Workflow Designer
            </Link>
          </div>
        </header>

        {/* Global SLA KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Executions
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">128</div>
            <div className="text-xs text-blue-400 flex items-center gap-1"><PlayCircle className="w-3 h-3" /> Running normally</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Awaiting Authorization
              <Clock className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-amber-400 flex items-center gap-1"><PauseCircle className="w-3 h-3" /> Blocked by governance</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              SLA Compliance
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">Average completion: 1.2h</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Failed Orchestrations
              <ShieldAlert className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-emerald-500 flex items-center gap-1">Zero critical halts</div>
          </div>
        </div>

        {/* Executions Grid */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Workflow Ledger" 
            headers={["Execution ID", "Process Template", "Initiator", "Current State", "Duration", ""]}
          >
            {[
              { id: "WF-EX-992", template: "Production Release (v12.4)", initiator: "CI/CD Bridge", state: "Waiting for Sign-off", duration: "45m", blocked: true },
              { id: "WF-EX-991", template: "Employee Offboarding", initiator: "HR System", state: "Revoking Access", duration: "12m", blocked: false },
              { id: "WF-EX-990", template: "Database Scaling", initiator: "Telemetry Alert", state: "Waiting for Sign-off", duration: "2h 15m", blocked: true },
              { id: "WF-EX-989", template: "Vendor Onboarding", initiator: "S. Chen", state: "Completed", duration: "1d 4h", blocked: false },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.id} timestamp="Tracked" />
                </td>
                <td className="py-4 px-5 font-medium text-slate-200">{row.template}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.initiator}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${
                    row.state === 'Completed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : row.blocked 
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {row.state}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.duration}</td>
                <td className="py-4 px-5 text-right">
                  <Link href={`/workflows/${row.id}`} className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Trace <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
