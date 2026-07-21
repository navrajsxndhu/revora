"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Plus, MousePointer2, Move, ShieldAlert, GitCommit, Settings, Save, PlayCircle } from "lucide-react";

export default function WorkflowDesigner() {
  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="h-16 border-b border-slate-900 bg-slate-950 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/workflows" className="p-2 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="h-6 w-px bg-slate-800"></div>
          <div>
            <h1 className="text-sm font-bold">Production Release (Standard)</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Template: TPL-PROD-REL</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 mr-4">Last saved 2 mins ago</span>
          <button className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-md transition-colors">
            Discard
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-sm font-medium rounded-md transition-colors shadow-lg shadow-blue-900/20">
            <Save className="w-4 h-4" /> Publish Configuration
          </button>
        </div>
      </header>

      {/* Main Designer Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Toolbar (Left) */}
        <div className="w-16 border-r border-slate-900 bg-slate-950 flex flex-col items-center py-4 space-y-4 shrink-0 z-10">
          <button className="p-3 bg-blue-900/30 text-blue-400 rounded-xl border border-blue-900/50 hover:bg-blue-900/50 transition-colors" title="Select Tool">
            <MousePointer2 className="w-5 h-5" />
          </button>
          <button className="p-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl transition-colors" title="Pan Canvas">
            <Move className="w-5 h-5" />
          </button>
          <div className="w-8 h-px bg-slate-800 my-2"></div>
          <button className="p-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl transition-colors" title="Add Execution Node">
            <PlayCircle className="w-5 h-5" />
          </button>
          <button className="p-3 text-amber-500 hover:text-amber-400 hover:bg-slate-800 rounded-xl transition-colors" title="Add Human Approval Gate">
            <ShieldAlert className="w-5 h-5" />
          </button>
          <button className="p-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl transition-colors" title="Add Logic Branch">
            <GitCommit className="w-5 h-5" />
          </button>
        </div>

        {/* Canvas (Center) */}
        <div className="flex-1 bg-slate-900/20 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          
          {/* Simulated Nodes */}
          <div className="absolute top-[100px] left-[100px] w-64 bg-slate-950 border-2 border-emerald-500/50 rounded-xl shadow-2xl p-4 cursor-grab">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center">
                <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-sm font-bold text-slate-200">Webhook Trigger</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">Listens for incoming payloads on `/api/webhooks/github`.</p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-full"></div>
          </div>

          <div className="absolute top-[280px] left-[100px] w-64 bg-slate-950 border border-slate-700 rounded-xl shadow-2xl p-4 cursor-grab">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-full"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-px h-24 bg-slate-700 border-l border-dashed"></div>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <span className="text-sm font-bold text-slate-200">Executive Approval</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">Halts execution until VP or Lead signs execution trace.</p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-full"></div>
          </div>

          {/* Configuration Overlay Panel */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-slate-800 rounded-xl p-4 w-72 shadow-2xl text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" /> Guardrail Active
            </div>
            <p className="text-slate-300 leading-relaxed">
              You cannot remove the Executive Approval node from this template. Policy <span className="font-mono text-emerald-400">POL-042</span> requires all Production deployments to have human sign-off.
            </p>
          </div>

        </div>
        
        {/* Properties Inspector (Right) */}
        <div className="w-80 border-l border-slate-900 bg-slate-950 flex flex-col shrink-0 z-10">
          <div className="p-4 border-b border-slate-900 flex items-center gap-2 font-semibold text-sm">
            <Settings className="w-4 h-4 text-slate-400" /> Node Properties
          </div>
          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            
            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Node Name</label>
              <input type="text" defaultValue="Executive Approval" className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Authorized Roles</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded border-slate-800 bg-slate-900 text-blue-500" />
                  <span className="text-sm text-slate-300">VP of Engineering</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded border-slate-800 bg-slate-900 text-blue-500" />
                  <span className="text-sm text-slate-300">Lead Architect</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-slate-800 bg-slate-900 text-blue-500" />
                  <span className="text-sm text-slate-500">Project Manager</span>
                </label>
              </div>
            </div>

            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-200 mb-2">Runtime Evidence</h4>
              <p className="text-xs text-slate-400">
                When this node executes, a cryptographic signature will be enforced requiring the actor's active JWT session to match the exact roles listed above.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
