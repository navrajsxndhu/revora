import React from "react";
import Link from "next/link";
import { Network, Database, ShieldAlert, GitMerge, FileText, Search, Activity, User, Users } from "lucide-react";
import { EnterpriseKnowledgeGraph } from "@/components/knowledge/enterprise-knowledge-graph";

export default function KnowledgeCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-[1600px] mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Knowledge Graph</h1>
            <p className="text-slate-400">Discover interconnected assets, policies, runtime executions, and personnel across the organization.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/knowledge/organization" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <Users className="w-4 h-4" /> Organizational Topology
            </Link>
            <Link href="/knowledge/dependencies" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <GitMerge className="w-4 h-4" /> Dependency Mapping
            </Link>
            <Link href="/knowledge/explorer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
              <Search className="w-4 h-4" /> Global Knowledge Explorer
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-5 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Mapped Nodes
              <Network className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14,292</div>
            <div className="text-xs text-blue-400">Expanding actively</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Relationship Density
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">High</div>
            <div className="text-xs text-emerald-400">Avg 4.2 edges per node</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Knowledge Freshness
              <Database className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-emerald-400">Real-time Runtime integration</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Orphaned Assets
              <FileText className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-amber-400">Missing policy coverage</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Broken Dependencies
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Action Required</div>
          </div>
        </div>

        {/* Graph Area */}
        <div className="flex-1 min-h-0 flex gap-6">
          <div className="flex-1">
            <EnterpriseKnowledgeGraph />
          </div>
          
          <div className="w-96 flex flex-col gap-6 shrink-0">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex-1">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6">Recent Additions</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200 text-sm">Customer Database Cluster</h4>
                    <p className="text-xs text-slate-500 mt-1 mb-2">New infrastructure node discovered via AWS Integration.</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Infrastructure</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">12 Dependencies</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200 text-sm">Policy: Data Encryption (Rest)</h4>
                    <p className="text-xs text-slate-500 mt-1 mb-2">Attached to `Customer Database Cluster` by S. Chen.</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Governance</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200 text-sm">Runtime Execution: SEC-SCAN</h4>
                    <p className="text-xs text-slate-500 mt-1 mb-2">Validating policy compliance across 14 linked nodes.</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Evidence Ledger</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
