import React from "react";
import { Deployment } from "@prisma/client";

export function ReleaseRiskPanel({ deployment }: { deployment: Deployment }) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL": return "bg-red-950/40 border-red-900 text-red-400";
      case "HIGH": return "bg-orange-950/40 border-orange-900 text-orange-400";
      case "MEDIUM": return "bg-amber-950/40 border-amber-900 text-amber-400";
      default: return "bg-emerald-950/40 border-emerald-900 text-emerald-400";
    }
  };

  const getRiskIcon = (level: string) => {
    if (level === "CRITICAL" || level === "HIGH") {
      return (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      );
    }
    return (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    );
  };

  return (
    <div className={`border rounded-lg p-5 ${getRiskColor(deployment.riskLevel)}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {getRiskIcon(deployment.riskLevel)}
          <h2 className="text-lg font-bold">{deployment.riskLevel} RISK RELEASE</h2>
        </div>
        <div className="font-mono text-xs opacity-70">
          SHA: {deployment.commitSha.substring(0, 7)}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-1">Reasoning</h3>
          <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
            {deployment.riskReasoning.split(' | ').map((reason, i) => (
              <li key={i}>{reason}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-1">Recommended Rollout Strategy</h3>
          <div className="bg-black/20 p-3 rounded border border-black/10 text-sm font-medium">
            {deployment.rolloutStrategy}
          </div>
        </div>
      </div>
    </div>
  );
}
