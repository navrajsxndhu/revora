"use client";
import React from "react";
import { GitMerge } from "lucide-react";

export function ProgressiveRolloutCenter() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Progressive Rollout Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto flex items-center justify-center text-slate-500 font-mono text-xs">
        <GitMerge className="w-4 h-4 mr-2" /> Rollouts tracking
      </div>
    </div>
  );
}
