import React from "react";
import Link from "next/link";
import { ArrowLeft, Server, Activity, Database, GitMerge, AlertTriangle } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DependencyMapping() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Blast-Radius Dependency Map</h1>
            <p className="text-slate-400">Evaluate what breaks if infrastructure mutates. Powered by immutable topology snapshots.</p>
          </div>
        </header>

        {/* Visual Map (Simulated Flow) */}
        <div className="flex-1 min-h-0 bg-slate-900/30 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center relative overflow-hidden">
          
          <div className="absolute top-4 left-4 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
            <AlertTriangle className="w-4 h-4" /> Incident Simulation Active: "Database Disconnect"
          </div>

          <div className="flex flex-col items-center space-y-6 max-w-2xl w-full">
            
            {/* Tier 1: Infrastructure */}
            <div className="w-full bg-slate-950 border-2 border-rose-500/50 rounded-xl p-4 flex items-center justify-between shadow-[0_0_30px_rgba(225,29,72,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-500/10 rounded flex items-center justify-center">
                  <Database className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-200">Customer Database Cluster</h3>
                  <p className="text-xs text-rose-400 font-medium">Simulated Failure Point</p>
                </div>
              </div>
              <EvidenceBadge evidenceId="NODE-DB-01" timestamp="Infrastructure Asset" />
            </div>

            <div className="w-px h-8 bg-rose-500/50"></div>

            {/* Tier 2: Services */}
            <div className="w-full grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-6 left-1/4 w-1/2 h-px bg-rose-500/50"></div>
              
              <div className="bg-slate-950 border border-amber-500/50 rounded-xl p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm text-slate-200">Billing Microservice</span>
                </div>
                <p className="text-xs text-amber-500">Service Degraded</p>
              </div>

              <div className="bg-slate-950 border border-amber-500/50 rounded-xl p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm text-slate-200">Identity Provisioning API</span>
                </div>
                <p className="text-xs text-amber-500">Service Degraded</p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-6 relative">
               <div className="w-px h-8 bg-amber-500/50 mx-auto"></div>
               <div className="w-px h-8 bg-amber-500/50 mx-auto"></div>
            </div>

            {/* Tier 3: Workflows / Business Capabilities */}
            <div className="w-full grid grid-cols-2 gap-6">
              
              <div className="bg-slate-950 border border-rose-500/50 rounded-xl p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <GitMerge className="w-4 h-4 text-rose-400" />
                  <span className="font-bold text-sm text-slate-200">Workflow: Invoice Generation</span>
                </div>
                <p className="text-xs text-rose-500">Halted. Depends on Billing Microservice.</p>
              </div>

              <div className="bg-slate-950 border border-emerald-500/50 rounded-xl p-4 flex flex-col opacity-50">
                <div className="flex items-center gap-2 mb-2">
                  <GitMerge className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-sm text-slate-200">Workflow: Password Reset</span>
                </div>
                <p className="text-xs text-emerald-500">Operational. Uses cached identity nodes.</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
