import React from "react";

/** All known status strings mapped to semantic categories */
const STATUS_MAP: Record<string, "success" | "warning" | "critical"> = {
  // Success
  Optimal: "success",
  Healthy: "success",
  Active: "success",
  Stable: "success",
  Verified: "success",
  "On Track": "success",
  Compliant: "success",
  "SEV-3": "success",
  // Warning
  Warning: "warning",
  Degraded: "warning",
  "At Risk": "warning",
  Behind: "warning",
  "Needs Review": "warning",
  Medium: "warning",
  "SEV-2": "warning",
  // Critical
  Critical: "critical",
  Down: "critical",
  Failed: "critical",
  Exhausted: "critical",
  "Off Track": "critical",
  "SEV-1": "critical",
  High: "critical",
};

const STYLE_MAP = {
  success: "bg-emerald-900/20 text-emerald-400 border-emerald-900/50",
  warning: "bg-amber-900/20 text-amber-400 border-amber-900/50",
  critical: "bg-rose-900/20 text-rose-400 border-rose-900/50",
  neutral: "bg-slate-800 text-slate-300 border-slate-700",
};

interface StatusBadgeProps {
  /** The status string to display (e.g. "Critical", "Optimal") */
  status: string;
  /** Optional compact mode for inline usage */
  compact?: boolean;
}

/**
 * StatusBadge — Constitutional status indicator replacing the 6-line
 * ternary chain duplicated in every table row across the platform.
 */
export function StatusBadge({ status, compact = false }: StatusBadgeProps) {
  const category = STATUS_MAP[status] || "neutral";
  const styles = STYLE_MAP[category];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded text-xs font-bold border w-max ${styles} ${
        compact ? "px-1.5 py-0.5" : "px-2 py-1"
      }`}
      role="status"
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
}
