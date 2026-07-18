"use client";

import React, { useEffect, useState } from "react";
import { FileText, ChevronDown, ChevronRight, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export function ActivePolicies() {
  const [policies, setPolicies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/governance/policies")
      .then(res => res.json())
      .then(d => {
        setPolicies(d.policies || []);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  // Use some static fallback data if API returns empty for preview
  const data = policies.length > 0 ? policies : [
    { id: "POL-001", name: "No High-Risk Deploys on Fridays", domain: "Releases", enforcement: "PREVENTATIVE", severity: "HIGH", version: "1.4", lastReview: "2026-06-01", owner: "SRE Team", status: "ENFORCED", description: "Blocks deployments tagged as HIGH risk outside of Mon-Thu business hours.", controls: ["PREV-01", "PREV-05"], affected: ["payment-gateway", "auth-service"] },
    { id: "POL-002", name: "Mandatory SRE Review for Tier 1", domain: "Releases", enforcement: "PREVENTATIVE", severity: "CRITICAL", version: "2.1", lastReview: "2026-05-15", owner: "Platform Team", status: "ENFORCED", description: "Requires manual approval from an SRE operator for any Tier 1 service change.", controls: ["PREV-02"], affected: ["core-ledger"] },
    { id: "POL-003", name: "Cost Anomaly Threshold (< 5%)", domain: "FinOps", enforcement: "DETECTIVE", severity: "MEDIUM", version: "1.0", lastReview: "2026-07-01", owner: "FinOps Team", status: "MONITORING", description: "Detects and alerts on cloud cost spikes exceeding 5% day-over-day.", controls: ["DET-12", "DET-14"], affected: ["All Services"] },
    { id: "POL-005", name: "Orphaned Resource Cleanup", domain: "FinOps", enforcement: "DETECTIVE", severity: "LOW", version: "1.1", lastReview: "2026-04-20", owner: "Cloud Platform", status: "FAILED", description: "Identifies and flags unattached cloud resources older than 7 days.", controls: ["DET-18"], affected: ["Infrastructure"] },
  ];

  if (loading) {
    return <div className="h-64 border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING POLICIES...</div>;
  }

  const toggleRow = (id: string) => {
    if (expandedRow === id) setExpandedRow(null);
    else setExpandedRow(id);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Active Policies</h2>
        </div>
        <div className="text-[10px] font-mono text-slate-500">{data.length} RECORDS</div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 w-6"></th>
              <th className="px-3 py-2 font-medium">Policy Name</th>
              <th className="px-3 py-2 font-medium">Domain</th>
              <th className="px-3 py-2 font-medium">Mode</th>
              <th className="px-3 py-2 font-medium">Sev</th>
              <th className="px-3 py-2 font-medium">Ver</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((p) => (
              <React.Fragment key={p.id}>
                <tr 
                  className={`border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer transition-colors ${expandedRow === p.id ? 'bg-slate-800/20' : ''}`}
                  onClick={() => toggleRow(p.id)}
                >
                  <td className="px-3 py-2">
                    {expandedRow === p.id ? <ChevronDown className="w-3 h-3 text-slate-500" /> : <ChevronRight className="w-3 h-3 text-slate-600" />}
                  </td>
                  <td className="px-3 py-2">
                    <div className="text-slate-300 font-sans font-medium truncate max-w-[200px]" title={p.name}>{p.name}</div>
                    <div className="text-[9px] text-indigo-500/70">{p.id}</div>
                  </td>
                  <td className="px-3 py-2 text-slate-500">{p.domain}</td>
                  <td className="px-3 py-2">
                    <span className="bg-slate-800/50 text-slate-400 px-1.5 py-0.5 rounded text-[9px] border border-slate-700">
                      {p.enforcement}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <span className={`${
                      p.severity === 'CRITICAL' ? 'text-rose-500' :
                      p.severity === 'HIGH' ? 'text-orange-400' :
                      p.severity === 'MEDIUM' ? 'text-amber-400' : 'text-blue-400'
                    }`}>{p.severity}</span>
                  </td>
                  <td className="px-3 py-2 text-slate-500">v{p.version}</td>
                  <td className="px-3 py-2">
                    {p.status === "ENFORCED" && <span className="flex items-center text-emerald-400"><CheckCircle2 className="w-3 h-3 mr-1"/> ENF</span>}
                    {p.status === "MONITORING" && <span className="flex items-center text-blue-400"><AlertTriangle className="w-3 h-3 mr-1"/> MON</span>}
                    {p.status === "FAILED" && <span className="flex items-center text-rose-500"><AlertTriangle className="w-3 h-3 mr-1"/> FAIL</span>}
                  </td>
                </tr>
                {expandedRow === p.id && (
                  <tr className="bg-slate-950/50 border-b border-slate-800/50">
                    <td colSpan={7} className="px-6 py-4">
                      <div className="text-slate-300 font-sans mb-3 text-sm flex items-start">
                        <Info className="w-4 h-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p>{p.description}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 border-t border-slate-800/50 pt-3 mt-2">
                        <div>
                          <div className="text-[10px] text-slate-500 mb-1">LINKED CONTROLS</div>
                          <div className="flex flex-wrap gap-1">
                            {p.controls?.map((c: string) => (
                              <span key={c} className="text-[10px] bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded">{c}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 mb-1">AFFECTED SYSTEMS</div>
                          <div className="flex flex-wrap gap-1">
                            {p.affected?.map((a: string) => (
                              <span key={a} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">{a}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 mb-1">METADATA</div>
                          <div className="text-[10px] text-slate-400">Owner: {p.owner}</div>
                          <div className="text-[10px] text-slate-400">Last Review: {p.lastReview}</div>
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
