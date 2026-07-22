import React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ModuleItem {
  name: string;
  path: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  description?: string;
}

interface ModuleGridProps {
  /** Hub page title */
  title: string;
  /** Hub page description */
  description: string;
  /** Lucide icon for the hub header */
  icon: LucideIcon;
  /** Icon color class */
  iconColor?: string;
  /** Optional status label (e.g. "Platform Status") */
  statusLabel?: string;
  /** Optional status value (e.g. "All Systems Operational") */
  statusValue?: string;
  /** Array of module cards to render */
  modules: ModuleItem[];
}

/**
 * ModuleGrid — Constitutional hub page layout used on every module landing
 * page (e.g. /observability, /business-intelligence, /data-fabric).
 * Replaces ~60 lines of duplicated hub page JSX.
 */
export function ModuleGrid({
  title,
  description,
  icon: Icon,
  iconColor = "text-indigo-400",
  statusLabel,
  statusValue,
  modules,
}: ModuleGridProps) {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0" role="banner">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true" />
              {title}
            </h1>
            <p className="text-slate-400">{description}</p>
          </div>
          {statusLabel && statusValue && (
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
                <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">
                  {statusLabel}
                </span>
                <div className="text-xl font-black text-indigo-300 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  {statusValue}
                </div>
              </div>
            </div>
          )}
        </header>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 overflow-y-auto pb-12 content-start"
          role="navigation"
          aria-label={`${title} modules`}
        >
          {modules.map((m, i) => {
            const ModIcon = m.icon;
            return (
              <Link
                key={i}
                href={m.path}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/60 hover:border-slate-700 transition-all duration-200 group flex flex-col h-full"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${m.bg} ${m.border} border flex items-center justify-center mb-4 shrink-0`}
                >
                  <ModIcon className={`w-5 h-5 ${m.color}`} aria-hidden="true" />
                </div>
                <div className="font-bold text-slate-200 mb-1">{m.name}</div>
                <div className="text-xs text-slate-500 flex-1">
                  {m.description || "Configure enterprise controls."}
                </div>
                <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-indigo-400 transition-colors duration-200">
                  Open Dashboard <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
