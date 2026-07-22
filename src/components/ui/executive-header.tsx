import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Download, type LucideIcon } from "lucide-react";

interface ExecutiveHeaderProps {
  /** Page title */
  title: string;
  /** Short description shown below the title */
  description: string;
  /** Lucide icon component rendered beside the title */
  icon: LucideIcon;
  /** Color class applied to the icon (e.g. "text-indigo-400") */
  iconColor?: string;
  /** Link target for the back button */
  backHref: string;
  /** Label for the back button (e.g. "Observability Command Center") */
  backLabel: string;
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Label for the export button */
  exportLabel?: string;
}

/**
 * ExecutiveHeader — Constitutional header block used at the top of every
 * enterprise detail page. Replaces ~25 lines of duplicated JSX per page.
 */
export function ExecutiveHeader({
  title,
  description,
  icon: Icon,
  iconColor = "text-indigo-400",
  backHref,
  backLabel,
  searchPlaceholder = "Search...",
  exportLabel = "Export Report",
}: ExecutiveHeaderProps) {
  return (
    <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0" role="banner">
      <div>
        <div className="mb-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
            aria-label={`Back to ${backLabel}`}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to {backLabel}
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
          <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true" />
          {title}
        </h1>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 w-64 transition-colors duration-200"
            aria-label={searchPlaceholder}
          />
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors duration-200 text-slate-200"
          aria-label={exportLabel}
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          {exportLabel}
        </button>
      </div>
    </header>
  );
}
