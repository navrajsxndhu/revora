import React from "react";
import Link from "next/link";
import { ArrowLeft, Server, Network, Database, Cpu, Activity, Share2 } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function InfrastructureTopology() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/operations" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Operations Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Infrastructure Topology</h1>
            <p className="text-slate-400">Visual dependency mapping of all enterprise clusters, instances, and databases.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
            <Share2 className="w-4 h-4" /> Export Architecture Diagram
          </button>
        </header>

        {/* Visual Map */}
        <div className="flex-1 min-h-0 bg-slate-900/30 border border-slate-800 rounded-2xl p-8 relative overflow-hidden flex flex-col items-center justify-center">
          
          <div className="grid grid-cols-3 gap-16 w-full max-w-5xl relative z-10">
            
            {/* Column 1: Load Balancers & Ingress */}
            <div className="space-y-8 flex flex-col items-center justify-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-center w-full border-b border-slate-800 pb-2">Edge Layer</div>
              
              <div className="bg-slate-950 border border-slate-700 w-full p-4 rounded-xl flex items-center gap-4 hover:border-blue-500 transition-colors cursor-pointer group shadow-lg shadow-black/50">
                <div className="w-12 h-12 rounded-lg bg-blue-900/20 border border-blue-500/30 flex items-center justify-center">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Global CDN</h3>
                  <p className="text-xs text-slate-500">Cloudflare &bull; Edge</p>
                </div>
              </div>
              
              <div className="bg-slate-950 border border-slate-700 w-full p-4 rounded-xl flex items-center gap-4 hover:border-purple-500 transition-colors cursor-pointer group shadow-lg shadow-black/50">
                <div className="w-12 h-12 rounded-lg bg-purple-900/20 border border-purple-500/30 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">API Gateway</h3>
                  <p className="text-xs text-slate-500">Kong &bull; us-east-1</p>
                </div>
              </div>
            </div>

            {/* Column 2: Compute Layer */}
            <div className="space-y-8 flex flex-col items-center justify-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-center w-full border-b border-slate-800 pb-2">Compute Layer</div>
              
              <div className="bg-slate-950 border border-slate-700 w-full p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500 transition-colors cursor-pointer group shadow-lg shadow-black/50">
                <div className="w-12 h-12 rounded-lg bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center">
                  <Server className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">K8s Core Cluster</h3>
                  <p className="text-xs text-slate-500">24 Nodes &bull; EKS</p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-700 w-full p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500 transition-colors cursor-pointer group shadow-lg shadow-black/50">
                <div className="w-12 h-12 rounded-lg bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">ML Inference Nodes</h3>
                  <p className="text-xs text-slate-500">8 GPU Instances</p>
                </div>
              </div>
            </div>

            {/* Column 3: Data Layer */}
            <div className="space-y-8 flex flex-col items-center justify-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-center w-full border-b border-slate-800 pb-2">Data Layer</div>
              
              <div className="bg-slate-950 border border-rose-900/50 w-full p-4 rounded-xl flex items-center gap-4 hover:border-rose-500 transition-colors cursor-pointer group shadow-lg shadow-rose-900/10">
                <div className="w-12 h-12 rounded-lg bg-rose-900/20 border border-rose-500/30 flex items-center justify-center relative">
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-pulse border-2 border-slate-950"></span>
                  <Database className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">Primary Postgres</h3>
                  <p className="text-xs text-rose-400 font-medium">Warning: 95% CPU</p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-700 w-full p-4 rounded-xl flex items-center gap-4 hover:border-blue-500 transition-colors cursor-pointer group shadow-lg shadow-black/50">
                <div className="w-12 h-12 rounded-lg bg-blue-900/20 border border-blue-500/30 flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Redis Cache Cluster</h3>
                  <p className="text-xs text-slate-500">Multi-AZ Setup</p>
                </div>
              </div>
            </div>

          </div>

          {/* Details Panel */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-slate-950/90 backdrop-blur-md border border-rose-900/50 rounded-xl p-6 shadow-2xl flex items-center justify-between">
             <div>
                <h4 className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                  Selected Component: <span className="text-rose-400">Primary Postgres (prod-db-primary)</span>
                </h4>
                <p className="text-xs text-slate-400 mb-3">Active Incident <span className="font-mono text-slate-300">INC-2026-078</span> mapped to this resource. CPU at 95%.</p>
                <EvidenceBadge evidenceId="NODE-DB-01" timestamp="Topology Verified" />
             </div>
             <button className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-sm font-semibold rounded-md transition-colors shadow-lg shadow-rose-900/20">
               View Telemetry Dashboards
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}
