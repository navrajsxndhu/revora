import React from "react";

export function FreezeBanner({ active, reason }: { active: boolean, reason?: string | null }) {
  if (!active) return null;

  return (
    <div className="bg-rose-950/40 border border-rose-900 rounded-lg p-4 mb-6 flex items-start gap-4">
      <span className="text-rose-500 mt-0.5">🛑</span>
      <div>
        <h3 className="text-sm font-medium text-rose-400 mb-1">Active Deployment Freeze</h3>
        <p className="text-xs text-rose-200/70 leading-relaxed">
          {reason || "Service deployments are currently frozen due to critical reliability debt."}
        </p>
      </div>
    </div>
  );
}
