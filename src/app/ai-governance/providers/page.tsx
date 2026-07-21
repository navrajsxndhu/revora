import React from "react";
import Link from "next/link";
import { ArrowLeft, Network, ShieldCheck, Lock, Activity } from "lucide-react";

export default function ProviderMarketplace() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ai-governance" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to AI Governance
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">AI Provider Marketplace</h1>
            <p className="text-slate-400">Manage external AI vendor connections and verify their Security SLAs.</p>
          </div>
        </header>

        {/* Provider Cards */}
        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0 overflow-y-auto pb-12 pr-2">
          
          {/* Azure OpenAI */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col h-[280px]">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200">Azure OpenAI</h3>
                  <p className="text-sm text-emerald-400 font-medium flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> BAA Signed (HIPAA)</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">Active</span>
            </div>
            
            <div className="space-y-3 mb-auto">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Data Residency</span>
                <span className="text-slate-300 font-medium">US-East, EU-West</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Training Opt-out</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1"><Lock className="w-3 h-3" /> Guaranteed</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Active Models</span>
                <span className="text-slate-300 font-medium">3 Registered</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold transition-colors">
              Manage Configuration
            </button>
          </div>

          {/* Anthropic */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col h-[280px]">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Network className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200">Anthropic</h3>
                  <p className="text-sm text-emerald-400 font-medium flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Enterprise SOC2</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">Active</span>
            </div>
            
            <div className="space-y-3 mb-auto">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Data Residency</span>
                <span className="text-slate-300 font-medium">US-West</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Training Opt-out</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1"><Lock className="w-3 h-3" /> Guaranteed</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Active Models</span>
                <span className="text-slate-300 font-medium">1 Registered</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold transition-colors">
              Manage Configuration
            </button>
          </div>

          {/* OpenAI Public (Blocked) */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 flex flex-col h-[280px] opacity-75 grayscale-[50%]">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                  <Network className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200">OpenAI (Public API)</h3>
                  <p className="text-sm text-rose-400 font-medium flex items-center gap-1"><Activity className="w-4 h-4" /> Policy Violation</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold uppercase tracking-wider">Blocked</span>
            </div>
            
            <div className="space-y-3 mb-auto">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Data Residency</span>
                <span className="text-rose-400 font-medium">Unknown</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Training Opt-out</span>
                <span className="text-rose-400 font-medium flex items-center gap-1">Not Guaranteed</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold transition-colors">
              View Blocking Policy
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
