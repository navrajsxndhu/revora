import React from "react";
import type { LucideIcon } from "lucide-react";

interface Metric {
  /** Display label */
  label: string;
  /** Primary value (e.g. "99.9%", "$14.2M") */
  value: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Icon color class (e.g. "text-indigo-500") */
  iconColor?: string;
  /** Supporting description */
  desc: string;
  /** Description color class override */
  descColor?: string;
  /** If true, renders the accent glow border on this card */
  accent?: boolean;
}

interface MetricGridProps {
  metrics: Metric[];
}

/**
 * MetricGrid — Renders 4 KPI cards in a responsive grid.
 * Replaces the ~35-line KPI block duplicated across every detail page.
 */
export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0" role="region" aria-label="Key Performance Indicators">
      {metrics.map((m, i) => {
        const Icon = m.icon;
        const isAccent = m.accent || i === 0;
        return (
          <div
            key={i}
            className={`bg-slate-900/60 border rounded-xl p-5 transition-colors duration-200 ${
              isAccent
                ? "border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(129,140,248,0.05)]"
                : "border-slate-800"
            }`}
          >
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              {m.label}
              <Icon className={`w-4 h-4 ${m.iconColor || "text-slate-500"}`} aria-hidden="true" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{m.value}</div>
            <div className={`text-xs ${m.descColor || (isAccent ? "text-indigo-400" : "text-slate-500")}`}>
              {m.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
}
