"use client";

import React, { useEffect, useState } from "react";
import { Activity, ShieldAlert, CheckCircle } from "lucide-react";

export function EnterpriseMetrics() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/metrics")
      .then(res => res.json())
      .then(d => {
        setMetrics(d.metrics || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = metrics.length > 0 ? metrics : [
    { name: "MTTR (Mean Time to Recovery)", value: "12m", unit: "", trend: "flat", status: "HEALTHY", sourceSystem: "Incident Engine" },
    { name: "Identity Access Revocation Time", value: "2.4", unit: "s", trend: "up", status: "HEALTHY", sourceSystem: "IAM" },
    { name: "Unauthorized Access Attempts", value: "0", unit: "", trend: "flat", status: "HEALTHY", sourceSystem: "Security" },
    { name: "Cloud Sprawl Index", value: "4.2", unit: "%", trend: "up", status: "WARNING", sourceSystem: "FinOps" },
    { name: "Policy Violations Blocked", value: "14", unit: "", trend: "down", status: "HEALTHY", sourceSystem: "Governance" },
    { name: "Deployment Lead Time", value: "45", unit: "m", trend: "flat", status: "HEALTHY", sourceSystem: "Releases" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING METRICS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Metrics</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Metric</th>
              <th className="px-3 py-2 font-medium">Value</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">System</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((m, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{m.name}</div>
                </td>
                <td className="px-3 py-2 text-indigo-400 font-bold">{m.value}{m.unit}</td>
                <td className="px-3 py-2">
                  {m.status === 'HEALTHY' ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <ShieldAlert className="w-3 h-3 text-amber-500" />}
                </td>
                <td className="px-3 py-2 text-[9px] text-slate-500">{m.sourceSystem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
