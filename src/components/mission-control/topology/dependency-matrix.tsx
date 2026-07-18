"use client";

import React, { useEffect, useState } from "react";
import { Grid, ArrowRight, ShieldAlert, Link2 } from "lucide-react";

export function DependencyMatrix() {
  const [loading, setLoading] = useState(false);
  
  // Matrix representing dependencies between domains
  const domains = ["Auth", "Pay", "User", "Notif", "Data"];
  const matrix = [
    [null, "D", "D", "I", "C"],
    ["-", null, "D", "-", "C"],
    ["D", "-", null, "D", "C"],
    ["-", "-", "-", null, "D"],
    ["-", "-", "-", "-", null],
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING MATRIX...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Grid className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Dependency Matrix</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse table-fixed">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-2 py-2 font-medium border-r border-slate-800 w-16">SRC \ TGT</th>
              {domains.map(d => <th key={d} className="px-2 py-2 font-medium text-center border-r border-slate-800 last:border-0">{d}</th>)}
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {matrix.map((row, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-2 py-2 border-r border-slate-800 bg-slate-950 font-bold text-slate-300">
                  {domains[i]}
                </td>
                {row.map((cell, j) => (
                  <td key={j} className={`px-2 py-2 text-center border-r border-slate-800 last:border-0 ${cell === 'C' ? 'bg-rose-950/20' : ''}`}>
                    <div className="flex justify-center items-center h-full">
                      {cell === 'D' && <span className="text-indigo-400 font-bold" title="Direct">D</span>}
                      {cell === 'I' && <span className="text-slate-500" title="Indirect">I</span>}
                      {cell === 'C' && <span className="text-rose-500 font-bold" title="Critical"><ShieldAlert className="w-3 h-3"/></span>}
                      {cell === '-' && <span className="text-slate-700">-</span>}
                      {cell === null && <div className="w-full h-full bg-slate-800/50 pattern-diagonal-lines pattern-slate-800 pattern-bg-transparent pattern-size-2"></div>}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-2 border-t border-slate-800 bg-slate-950 flex items-center space-x-4 text-[9px] font-mono text-slate-500">
        <div className="flex items-center"><span className="text-indigo-400 font-bold mr-1 w-3">D</span> Direct</div>
        <div className="flex items-center"><span className="text-slate-500 font-bold mr-1 w-3">I</span> Indirect</div>
        <div className="flex items-center"><ShieldAlert className="w-3 h-3 text-rose-500 mr-1"/> Critical</div>
      </div>
    </div>
  );
}
