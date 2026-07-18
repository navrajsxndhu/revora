"use client";

import React, { useEffect, useState } from "react";
import { Grid, Check, X, Minus } from "lucide-react";

export function PermissionMatrix() {
  const [loading, setLoading] = useState(false);
  const roles = ["Platform Admin", "SecOps", "Developer", "Finance", "Viewer"];
  const perms = [
    { res: "infrastructure:cluster", act: "deploy", m: ["Y", "N", "N", "N", "N"] },
    { res: "governance:policy", act: "write", m: ["Y", "Y", "N", "N", "N"] },
    { res: "identity:role", act: "assign", m: ["Y", "Y", "N", "N", "N"] },
    { res: "release:production", act: "approve", m: ["Y", "N", "Y", "N", "N"] },
    { res: "billing:invoice", act: "read", m: ["Y", "N", "N", "Y", "N"] },
    { res: "telemetry:logs", act: "read", m: ["Y", "Y", "Y", "N", "I"] },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING MATRIX...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Grid className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Authorization Matrix</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium border-r border-slate-800">Resource : Action</th>
              {roles.map(r => <th key={r} className="px-2 py-2 font-medium text-center border-r border-slate-800 last:border-0">{r}</th>)}
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {perms.map((p, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2 border-r border-slate-800 bg-slate-950">
                  <span className="text-slate-300">{p.res}</span>
                  <span className="text-slate-500 ml-1">:{p.act}</span>
                </td>
                {p.m.map((val, j) => (
                  <td key={j} className="px-2 py-2 text-center border-r border-slate-800 last:border-0">
                    <div className="flex justify-center">
                      {val === 'Y' && <span title="Granted"><Check className="w-4 h-4 text-emerald-500" /></span>}
                      {val === 'N' && <span title="Denied"><X className="w-4 h-4 text-rose-500/50" /></span>}
                      {val === 'I' && <span title="Inherited"><Minus className="w-4 h-4 text-slate-500" /></span>}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
