import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, ShieldAlert, AlertCircle, Rocket, FileCheck2, Search, CalendarSync } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function RoadmapGovernanceCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Product Portfolio
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Roadmap & Release Governance</h1>
            <p className="text-slate-400">Unified governance over product roadmaps, innovation proposals, and strategic launch approvals.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium transition-colors text-white">
            <Rocket className="w-4 h-4" /> Propose New Initiative
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              On-Time Delivery Rate
              <CalendarSync className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">88.5%</div>
            <div className="text-sm font-medium text-emerald-400">Roadmap Milestones Hit</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Critical Launch Blockers
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">2</div>
            <div className="text-sm font-medium text-rose-400">Affecting Q4 Flagship Release</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Pending Release Approvals
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">5</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               Awaiting Product Leadership Sign-off
            </div>
          </div>
        </div>

        {/* Governance Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Roadmap Delivery & Release Pipeline" 
            headers={["Initiative / Epic", "Target Release", "Product Owner", "Delivery Status", "Release Governance", "Audit Trail"]}
          >
            {[
              { id: "EPIC-902", init: "Unified Search Architecture", rel: "v2.5.0 (Q3)", owner: "Sarah Jenkins", status: "In Development", gov: "Cleared for Engineering", trace: "RD-EV-311" },
              { id: "EPIC-915", init: "Kubernetes Edge Expansion", rel: "v3.2.0 (Q4)", owner: "Michael Chen", status: "Delayed (Resource Constraint)", gov: "Executive Escalation", trace: "RD-EV-315" },
              { id: "EPIC-880", init: "Regulatory Compliance Engine", rel: "v1.1.0-beta", owner: "Amanda Voss", status: "Testing Complete", gov: "Pending Launch Approval", trace: "RD-EV-320" },
              { id: "INIT-101", init: "Quantum Cryptography R&D", rel: "TBD (2027)", owner: "Dr. Robert Vance", status: "Research Phase", gov: "Innovation Board Approved", trace: "RD-EV-325" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex flex-col">
                    <span>{row.init}</span>
                    <span className="text-xs font-mono text-slate-500">{row.id}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.rel}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.status.includes('Delayed') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.status.includes('Testing') || row.status.includes('Research') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.gov.includes('Cleared') || row.gov.includes('Approved') ? 'text-emerald-500' :
                    row.gov.includes('Escalation') ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.gov.includes('Escalation') && <AlertCircle className="w-4 h-4" />}
                    {row.gov.includes('Cleared') && <FileCheck2 className="w-4 h-4" />}
                    {row.gov.includes('Approved') && <ShieldAlert className="w-4 h-4" />}
                    {row.gov}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="State Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
