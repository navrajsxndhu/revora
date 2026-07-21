"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Filter, ShieldAlert, GitCommit, Database, Link as LinkIcon, Download } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function KnowledgeExplorer() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/knowledge" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Knowledge Graph
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Knowledge Explorer</h1>
            <p className="text-slate-400">Deep tabular query interface for locating disconnected Runtime Evidence and Assets.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md text-sm font-medium transition-colors">
              <Filter className="w-4 h-4" /> Advanced Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md text-sm font-medium transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="relative shrink-0">
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search across Projects, Evidence, Policies, APIs, and Users..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors shadow-lg"
          />
        </div>

        {/* Results Grid */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Global Discovery Results" 
            headers={["Asset Name", "Node Type", "Owner", "Direct Connections", "Risk Level", "Status"]}
          >
            {[
              { name: "Payment Gateway Core", type: "Project", owner: "Finance", conn: "14 Nodes", risk: "Critical", status: "Active" },
              { name: "POL-042 (Deployment Guardrail)", type: "Policy", owner: "SecOps", conn: "208 Nodes", risk: "Low", status: "Enforced" },
              { name: "Stripe Billing v2", type: "API / Integration", owner: "Billing Team", conn: "3 Nodes", risk: "Moderate", status: "Active" },
              { name: "Runtime Evidence (0x8F92)", type: "Ledger Log", owner: "System Engine", conn: "2 Nodes", risk: "None", status: "Immutable" },
              { name: "Legacy OAuth Bridge", type: "Infrastructure", owner: "Unknown (Orphaned)", conn: "0 Nodes", risk: "High", status: "Deprecated" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    {row.type === 'Policy' ? <ShieldAlert className="w-4 h-4 text-emerald-400" /> : 
                     row.type === 'Project' ? <GitCommit className="w-4 h-4 text-blue-400" /> :
                     row.type === 'Ledger Log' ? <Database className="w-4 h-4 text-amber-400" /> :
                     <LinkIcon className="w-4 h-4 text-slate-400" />
                    }
                    {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className={`py-4 px-5 text-sm ${row.owner.includes('Orphaned') ? 'text-rose-400' : 'text-slate-300'}`}>{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400 font-mono">{row.conn}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${
                    row.risk === 'Critical' || row.risk === 'High'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                      : row.risk === 'Moderate'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {row.risk}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${
                    row.status === 'Active' || row.status === 'Enforced' || row.status === 'Immutable'
                      ? 'bg-slate-800 text-slate-300 border-slate-700' 
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
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
