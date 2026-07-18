"use client";

import React, { useEffect, useState } from "react";
import { Network, Search, XCircle, CheckCircle2, HelpCircle, AlertTriangle } from "lucide-react";

export function GovernanceControlsMatrix() {
  const [controls, setControls] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedControl, setSelectedControl] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/governance/controls")
      .then(res => res.json())
      .then(d => {
        setControls(d.controls || []);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  const domains = ["Policies", "Security", "Releases", "Platform", "Workflow", "FinOps", "Observability", "Reliability", "CMDB"];
  
  const data = controls.length > 0 ? controls : [
    { id: "CTRL-101", name: "Multi-factor Auth Enforcement", matrix: { "Policies": "C", "Security": "C", "Releases": "P", "Platform": "C", "Workflow": "U", "FinOps": "U", "Observability": "C", "Reliability": "U", "CMDB": "C" } },
    { id: "CTRL-102", name: "Automated Rollback Gates", matrix: { "Policies": "C", "Security": "U", "Releases": "C", "Platform": "P", "Workflow": "C", "FinOps": "U", "Observability": "C", "Reliability": "C", "CMDB": "U" } },
    { id: "CTRL-103", name: "Resource Tagging Compliance", matrix: { "Policies": "C", "Security": "U", "Releases": "P", "Platform": "C", "Workflow": "U", "FinOps": "C", "Observability": "C", "Reliability": "U", "CMDB": "C" } },
    { id: "CTRL-104", name: "Vulnerability Scanning", matrix: { "Policies": "C", "Security": "C", "Releases": "V", "Platform": "C", "Workflow": "U", "FinOps": "U", "Observability": "P", "Reliability": "P", "CMDB": "C" } },
  ];

  if (loading) {
    return <div className="h-64 border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING MATRIX...</div>;
  }

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Network className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Controls Matrix</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium w-48 border-r border-slate-800">Control</th>
              {domains.map(d => <th key={d} className="px-3 py-2 font-medium text-center border-r border-slate-800 last:border-0">{d}</th>)}
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((c) => (
              <React.Fragment key={c.id}>
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer" onClick={() => setSelectedControl(selectedControl === c.id ? null : c.id)}>
                  <td className="px-3 py-2 border-r border-slate-800 bg-slate-900/50">
                    <div className="text-slate-300 font-sans font-medium truncate" title={c.name}>{c.name}</div>
                    <div className="text-[9px] text-indigo-500/70">{c.id}</div>
                  </td>
                  {domains.map(d => {
                    const status = c.matrix[d];
                    return (
                      <td key={d} className="px-3 py-2 text-center border-r border-slate-800 last:border-0">
                        <div className="flex justify-center">
                          {status === 'C' && <span title="Compliant"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></span>}
                          {status === 'P' && <span title="Partial"><AlertTriangle className="w-4 h-4 text-amber-500" /></span>}
                          {status === 'V' && <span title="Violation"><XCircle className="w-4 h-4 text-rose-500" /></span>}
                          {status === 'U' && <span title="Unknown"><HelpCircle className="w-4 h-4 text-slate-600" /></span>}
                        </div>
                      </td>
                    );
                  })}
                </tr>
                {selectedControl === c.id && (
                  <tr className="bg-slate-950">
                    <td colSpan={domains.length + 1} className="p-4 border-b border-slate-800">
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-6">
                          <div>
                            <div className="text-[10px] text-slate-500 mb-1">EVIDENCE</div>
                            <div className="text-xs text-indigo-400 cursor-pointer hover:underline flex items-center"><Search className="w-3 h-3 mr-1"/> View audit trail</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-slate-500 mb-1">EXCEPTIONS</div>
                            <div className="text-xs text-slate-300">0 Active</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
