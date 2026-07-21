import React from "react";
import Link from "next/link";
import { ArrowLeft, Code, Download, Key, BookOpen, Terminal, CheckCircle2 } from "lucide-react";

export default function DeveloperPortal() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/api-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to API Platform
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Developer Portal</h1>
            <p className="text-slate-400">Premium self-service access to Enterprise APIs. All key generation and SDK downloads are audited.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
            <Key className="w-4 h-4" /> Generate API Key
          </button>
        </header>

        {/* Workspace Cards */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="col-span-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Your Applications</h3>
            
            <div className="space-y-4 flex-1">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-200">Mobile CRM App</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                </div>
                <div className="text-xs text-slate-500 mb-3">Consumer ID: app_89x21</div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Keys Valid (Expires in 90d)
                </div>
              </div>

              <button className="w-full py-3 border border-dashed border-slate-700 hover:border-blue-500 hover:text-blue-400 rounded-lg text-sm font-medium text-slate-500 transition-colors flex items-center justify-center gap-2">
                Register New App
              </button>
            </div>
          </div>

          <div className="col-span-2 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Quick Start Resources</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="#" className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-400 mb-3" />
                <h4 className="font-semibold text-slate-200 mb-1">API Documentation</h4>
                <p className="text-xs text-slate-500">Interactive Swagger and GraphQL playgrounds.</p>
              </Link>
              
              <Link href="#" className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors">
                <Terminal className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="font-semibold text-slate-200 mb-1">Integration Guides</h4>
                <p className="text-xs text-slate-500">Authentication flows and Webhook handling.</p>
              </Link>
              
              <Link href="#" className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors">
                <Download className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="font-semibold text-slate-200 mb-1">Download SDKs</h4>
                <p className="text-xs text-slate-500">Official clients for Node.js, Python, and Go.</p>
              </Link>
              
              <Link href="#" className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors">
                <Code className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-semibold text-slate-200 mb-1">Sandbox Environment</h4>
                <p className="text-xs text-slate-500">Test integrations safely without hitting production.</p>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
