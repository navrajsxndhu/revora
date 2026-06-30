import React from "react";

export function CopilotPanel({ summary, title, icon }: { summary: string | null, title: string, icon?: string }) {
  if (!summary) return null;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-sm text-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-emerald-400">{icon || '✨'}</span>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <div className="prose prose-sm prose-invert max-w-none whitespace-pre-wrap font-mono text-sm leading-relaxed">
        {summary}
      </div>
      <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
        <span>Grounded in deterministic operational memory.</span>
        <button className="text-slate-400 hover:text-white transition-colors">View Citations</button>
      </div>
    </div>
  );
}
