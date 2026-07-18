"use client";

import React from "react";
import { RefreshCcw, CheckCircle } from "lucide-react";

export function FailbackCenter() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Failback Operations</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto flex items-center justify-center">
        <div className="text-center">
          <RefreshCcw className="w-6 h-6 text-slate-600 mx-auto mb-2" />
          <div className="text-[10px] text-slate-500 font-mono">NO ACTIVE FAILBACK OPERATIONS</div>
        </div>
      </div>
    </div>
  );
}
