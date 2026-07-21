import React from "react";
import Link from "next/link";
import { ArrowLeft, Monitor, Database, Network, Server, ArrowDown, Search } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DependencyExplorer() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/assets" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Asset Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Dependency & Impact Explorer</h1>
            <p className="text-slate-400">Cryptographically verifiable blast radius mappings for Configuration Items.</p>
          </div>
          <div className="relative w-64">
             <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
             <input type="text" placeholder="Search CI ID (e.g. CI-891)" className="w-full bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
        </header>

        {/* Explorer Canvas */}
        <div className="flex-1 min-h-0 bg-slate-900/30 border border-slate-800 rounded-2xl p-8 relative overflow-hidden flex flex-col items-center justify-center">
          
          <div className="flex flex-col items-center w-full max-w-lg z-10 relative">
            
            {/* Top Node */}
            <div className="bg-slate-950 border border-slate-700 w-full p-5 rounded-xl shadow-lg relative group hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-purple-900/20 border border-purple-500/30 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">Customer Portal UI</h3>
                  <p className="text-xs text-slate-500">Business Service &bull; CI-APP-102</p>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="py-2 flex flex-col items-center opacity-50">
               <div className="w-px h-6 bg-slate-700"></div>
               <ArrowDown className="w-4 h-4 text-slate-600 -mt-1" />
            </div>

            {/* Middle Node 1 */}
            <div className="bg-slate-950 border border-slate-700 w-full p-5 rounded-xl shadow-lg relative group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-blue-900/20 border border-blue-500/30 flex items-center justify-center">
                  <Network className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">API Gateway (us-east)</h3>
                  <p className="text-xs text-slate-500">Infrastructure Node &bull; CI-NET-114</p>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="py-2 flex flex-col items-center opacity-50">
               <div className="w-px h-6 bg-slate-700"></div>
               <ArrowDown className="w-4 h-4 text-slate-600 -mt-1" />
            </div>

            {/* Middle Node 2 */}
            <div className="bg-slate-950 border border-slate-700 w-full p-5 rounded-xl shadow-lg relative group hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center">
                  <Server className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">Payment Processing Worker</h3>
                  <p className="text-xs text-slate-500">Microservice &bull; CI-APP-331</p>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="py-2 flex flex-col items-center opacity-50">
               <div className="w-px h-6 bg-slate-700"></div>
               <ArrowDown className="w-4 h-4 text-slate-600 -mt-1" />
            </div>

            {/* Bottom Node */}
            <div className="bg-slate-950 border border-rose-500/50 w-full p-5 rounded-xl shadow-xl relative group shadow-rose-900/10 scale-105">
              <div className="absolute -left-3 -top-3">
                 <span className="flex items-center justify-center w-6 h-6 bg-rose-500 rounded-full text-[10px] font-bold text-white shadow-lg border-2 border-slate-950">!</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-rose-900/20 border border-rose-500/30 flex items-center justify-center">
                  <Database className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">Primary Postgres Cluster</h3>
                  <p className="text-xs text-slate-500">Database &bull; CI-DB-892</p>
                  <p className="text-[10px] font-bold text-rose-400 mt-1 uppercase tracking-wider">Target of Change Proposal</p>
                </div>
              </div>
            </div>

          </div>
          
          {/* Details Overlay */}
          <div className="absolute top-8 right-8 w-80 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-5 shadow-2xl">
             <h4 className="text-sm font-bold text-slate-200 mb-4 border-b border-slate-800 pb-2">Impact Analysis Report</h4>
             
             <div className="space-y-4">
               <div>
                 <div className="text-xs text-slate-500 mb-1">Target CI</div>
                 <div className="text-sm font-mono text-slate-300">CI-DB-892 (Postgres)</div>
               </div>
               
               <div>
                 <div className="text-xs text-slate-500 mb-1">Proposed Change</div>
                 <div className="text-sm text-rose-400">Parameter: max_connections=2000</div>
               </div>
               
               <div>
                 <div className="text-xs text-slate-500 mb-1">Upstream Blast Radius</div>
                 <div className="text-sm font-bold text-amber-500">3 Dependent Services</div>
                 <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Applying this change to the database will force a connection pool restart, impacting the Payment Worker, API Gateway, and Customer Portal.</p>
               </div>
               
               <div className="pt-2">
                 <EvidenceBadge evidenceId="CHG-IMPACT-02" timestamp="Calculated via Knowledge Graph" />
               </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
