import React from "react";
import Link from "next/link";
import { BarChart3, TrendingUp, AlertTriangle, Activity, Database, Download } from "lucide-react";

export default function AnalyticsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Executive Analytics</h1>
            <p className="text-slate-400">Deterministic BI derived purely from immutable Runtime Evidence.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/analytics/reports/builder" className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Report Builder
            </Link>
            <Link href="/analytics/explorer" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2">
              <Database className="w-4 h-4" /> Evidence Explorer
            </Link>
          </div>
        </header>

        {/* Global Filter Bar */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-lg flex items-center justify-between text-sm">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium uppercase">Time Range</span>
              <span className="text-slate-200 font-medium">Last 30 Days</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium uppercase">Workspace</span>
              <span className="text-slate-200 font-medium">Global Organization</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium uppercase">Data Source</span>
              <span className="text-blue-400 font-medium">Verified Evidence Ledger</span>
            </div>
          </div>
          <button className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        {/* Primary KPIs */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Evidence
              <BarChart3 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,281,092</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% this month</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Compliance Rate
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.94%</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +0.01% this month</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Mean Resolution Time
              <Activity className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.2 Hrs</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> -1.1 Hrs faster</div>
          </div>

          <div className="bg-slate-900/60 border border-rose-900/30 rounded-xl p-5 shadow-[0_0_15px_rgba(225,29,72,0.05)]">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Violations
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400 flex items-center gap-1">Requires immediate attention</div>
          </div>
        </div>

        {/* Chart Abstractions */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Evidence Volume Timeline */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col h-80">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Evidence Volume Trends</h3>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Daily</span>
            </div>
            <div className="flex-1 relative flex items-end justify-between gap-2 border-b border-l border-slate-800 px-4 pb-0 pt-8">
              {[40, 25, 45, 30, 60, 80, 50, 40, 70, 90, 65, 85].map((val, i) => (
                <div key={i} className="w-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors border-t border-blue-500 rounded-t-sm relative group cursor-pointer" style={{ height: `${val}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                    {val * 1000} events
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2 px-4">
              <span>Aug 1</span>
              <span>Aug 15</span>
              <span>Aug 30</span>
            </div>
          </div>

          {/* Compliance Distribution Heatmap/Grid */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col h-80">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Compliance Distribution</h3>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">By Department</span>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              
              <div className="border border-slate-800 bg-slate-900/50 rounded-lg p-4 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5"></div>
                <div className="relative z-10">
                  <div className="text-sm font-medium text-slate-400 mb-1">Engineering</div>
                  <div className="text-2xl font-bold">99.9%</div>
                </div>
              </div>
              <div className="border border-slate-800 bg-slate-900/50 rounded-lg p-4 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5"></div>
                <div className="relative z-10">
                  <div className="text-sm font-medium text-slate-400 mb-1">Finance</div>
                  <div className="text-2xl font-bold">100%</div>
                </div>
              </div>
              <div className="border border-slate-800 bg-slate-900/50 rounded-lg p-4 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5"></div>
                <div className="relative z-10">
                  <div className="text-sm font-medium text-slate-400 mb-1">Security</div>
                  <div className="text-2xl font-bold">99.8%</div>
                </div>
              </div>
              <div className="border border-rose-900/30 bg-rose-950/20 rounded-lg p-4 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-500/10"></div>
                <div className="relative z-10">
                  <div className="text-sm font-medium text-slate-400 mb-1">External Vendors</div>
                  <div className="text-2xl font-bold text-rose-400">92.4%</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
