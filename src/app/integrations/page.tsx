import React from "react";
import Link from "next/link";
import { Search, Server, Cloud, Database, Shield, Zap, Filter } from "lucide-react";

export default function IntegrationsMarketplace() {
  const integrations = [
    { id: "github", name: "GitHub Enterprise", category: "DevOps", icon: <Cloud className="w-6 h-6 text-slate-200" />, status: "Installed" },
    { id: "aws", name: "Amazon Web Services", category: "Infrastructure", icon: <Server className="w-6 h-6 text-amber-500" />, status: "Available" },
    { id: "okta", name: "Okta Identity", category: "Security", icon: <Shield className="w-6 h-6 text-blue-500" />, status: "Installed" },
    { id: "datadog", name: "Datadog", category: "Observability", icon: <ActivityIcon />, status: "Available" },
    { id: "jira", name: "Jira Software", category: "Productivity", icon: <Cloud className="w-6 h-6 text-blue-400" />, status: "Installed" },
    { id: "postgres", name: "PostgreSQL Engine", category: "Database", icon: <Database className="w-6 h-6 text-blue-300" />, status: "Available" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-6 gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Integration Marketplace</h1>
            <p className="text-slate-400">Securely connect external systems. Every webhook is bound to deterministic Runtime Evidence.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/integrations/health" className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Connection Health
            </Link>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2">
              <Zap className="w-4 h-4" /> Build Automation
            </button>
          </div>
        </header>

        {/* Global Filter Bar */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search native connectors (e.g. ServiceNow, Splunk, Azure)..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-slate-600 transition-colors" 
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
            <Filter className="w-4 h-4" /> Categories
          </button>
        </div>

        {/* Marketplace Grid */}
        <div>
          <h2 className="text-lg font-semibold mb-6">Featured Enterprise Connectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((app) => (
              <Link key={app.id} href={`/integrations/${app.id}`} className="block group">
                <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-700 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden">
                  
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      {app.icon}
                    </div>
                    {app.status === "Installed" ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                        Installed
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium">
                        Available
                      </span>
                    )}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{app.name}</h3>
                    <p className="text-sm text-slate-500 mb-4">{app.category}</p>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      Securely stream events and manage configuration drift using Revora's deterministic API bridge.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
