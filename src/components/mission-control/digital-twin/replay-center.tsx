"use client";

import React from "react";
import { FastForward, Play, Square, SkipBack } from "lucide-react";

export function ReplayCenter() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Replay Center</h2>
        <div className="px-2 py-0.5 bg-indigo-900/30 text-indigo-400 text-[9px] font-mono rounded">STATE: LOADED</div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="text-center space-y-2 mb-4">
          <div className="text-xs font-mono text-slate-400">TARGET: <span className="text-slate-200">INCIDENT-1992</span></div>
          <div className="text-[10px] font-mono text-slate-500">TIMESTAMP: 2026-07-10T14:22:00Z</div>
        </div>
        
        <div className="w-full bg-slate-950 border border-slate-800 rounded p-2 mb-4">
          <div className="flex justify-between text-[9px] font-mono text-slate-500 mb-1">
            <span>00:00:00</span>
            <span>-00:45:12</span>
          </div>
          <div className="w-full h-1 bg-slate-800 rounded overflow-hidden flex">
            <div className="w-1/3 bg-indigo-500 h-full"></div>
            <div className="w-2 h-full bg-indigo-300"></div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors">
            <SkipBack className="w-4 h-4" />
          </button>
          <button className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-colors">
            <Play className="w-4 h-4" />
          </button>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors">
            <Square className="w-4 h-4" />
          </button>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors">
            <FastForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
