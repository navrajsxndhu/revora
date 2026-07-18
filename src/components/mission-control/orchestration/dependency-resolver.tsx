"use client";

import React from "react";
import { Link2, AlertTriangle } from "lucide-react";

export function DependencyResolver() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Dependency Engine</h2>
        <span className="text-[9px] text-rose-400 font-mono border border-rose-900/50 bg-rose-950/30 px-1 rounded">1 BLOCKED</span>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <div className="border border-slate-800 p-2 rounded bg-slate-950 mb-2">
          <div className="flex items-center text-xs font-mono text-slate-300 mb-1">
            <Link2 className="w-3 h-3 mr-2 text-indigo-400" />
            TASK-814 <span className="text-slate-600 mx-2">requires</span> AUTH_DB_MIGRATION
          </div>
          <div className="text-[10px] text-rose-400 font-mono flex items-center mt-1">
            <AlertTriangle className="w-3 h-3 mr-1" /> BLOCKED BY TOPOLOGY
          </div>
        </div>
      </div>
    </div>
  );
}
