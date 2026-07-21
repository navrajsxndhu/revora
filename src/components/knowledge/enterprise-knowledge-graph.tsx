"use client";

import React from "react";
import { ZoomIn, ZoomOut, Maximize, Share2 } from "lucide-react";

export function EnterpriseKnowledgeGraph() {
  return (
    <div className="w-full h-full bg-slate-900/40 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col">
      
      {/* Graph Toolbar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <div className="pointer-events-auto bg-slate-950/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Live Topology</span>
        </div>
        
        <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-slate-700 p-1.5 rounded-lg shadow-xl">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" title="Zoom In"><ZoomIn className="w-4 h-4" /></button>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" title="Zoom Out"><ZoomOut className="w-4 h-4" /></button>
          <div className="w-px h-4 bg-slate-700 mx-1"></div>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors" title="Reset View"><Maximize className="w-4 h-4" /></button>
          <button className="p-2 text-blue-400 hover:text-blue-300 hover:bg-slate-800 rounded transition-colors" title="Share View"><Share2 className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Canvas Area (Mocked Graph rendering) */}
      <div className="flex-1 relative cursor-grab" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        
        {/* Mock Node 1: Project */}
        <div className="absolute top-[20%] left-[40%] w-48 bg-slate-950 border-2 border-blue-500 rounded-xl p-3 shadow-2xl z-10 transition-transform hover:scale-105 cursor-pointer">
          <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Project</div>
          <div className="font-semibold text-sm text-slate-200">Payment Gateway</div>
          <div className="text-xs text-slate-500 mt-1">Owner: Finance</div>
        </div>

        {/* Mock Edge (Uses) */}
        <div className="absolute top-[30%] left-[46%] h-24 w-px bg-slate-600">
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300 border border-slate-700">uses</div>
        </div>

        {/* Mock Node 2: API */}
        <div className="absolute top-[45%] left-[40%] w-48 bg-slate-950 border border-slate-700 rounded-xl p-3 shadow-xl z-10 transition-transform hover:scale-105 cursor-pointer">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">API</div>
          <div className="font-semibold text-sm text-slate-200">Stripe Billing v2</div>
        </div>

        {/* Mock Edge (Protected By) */}
        <div className="absolute top-[50%] left-[55%] w-32 h-px bg-slate-600">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-800 px-2 py-0.5 rounded text-[10px] text-emerald-400 border border-emerald-900/50">protected by</div>
        </div>

        {/* Mock Node 3: Policy */}
        <div className="absolute top-[45%] left-[70%] w-48 bg-emerald-950 border-2 border-emerald-500/50 rounded-xl p-3 shadow-xl z-10 transition-transform hover:scale-105 cursor-pointer">
          <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Policy</div>
          <div className="font-semibold text-sm text-emerald-200">PCI-DSS Isolation</div>
          <div className="text-xs text-emerald-500/70 mt-1">POL-882</div>
        </div>

        {/* Mock Edge (Validated By) */}
        <div className="absolute top-[60%] left-[46%] h-24 w-px bg-slate-600">
          <div className="absolute top-1/2 -translate-y-1/2 -left-10 bg-slate-800 px-2 py-0.5 rounded text-[10px] text-amber-400 border border-amber-900/50">validated by</div>
        </div>

        {/* Mock Node 4: Evidence */}
        <div className="absolute top-[75%] left-[40%] w-48 bg-amber-950 border-2 border-amber-500/50 rounded-xl p-3 shadow-xl z-10 transition-transform hover:scale-105 cursor-pointer">
          <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">Evidence</div>
          <div className="font-semibold text-sm text-amber-200">Runtime Signature</div>
          <div className="text-[10px] text-amber-500/70 font-mono mt-1">0x8F92...B3C1</div>
        </div>

      </div>

      {/* Legend Overlay */}
      <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-2xl pointer-events-none">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Graph Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500"></div><span className="text-xs text-slate-300">Project / Asset</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-emerald-500/20 border border-emerald-500"></div><span className="text-xs text-slate-300">Governance Policy</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-amber-500/20 border border-amber-500"></div><span className="text-xs text-slate-300">Immutable Evidence</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-transparent border border-slate-600"></div><span className="text-xs text-slate-300">Infrastructure / API</span></div>
        </div>
      </div>

    </div>
  );
}
