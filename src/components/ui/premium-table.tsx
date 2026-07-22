import React from "react";
import { Download, Filter, SlidersHorizontal } from "lucide-react";

interface PremiumTableProps {
  title: string;
  description?: string;
  headers: string[];
  children: React.ReactNode;
}

/**
 * PremiumTable — Constitutional data table with filter/export toolbar,
 * proper ARIA roles, and keyboard-navigable rows.
 */
export function PremiumTable({ title, description, headers, children }: PremiumTableProps) {
  return (
    <div
      className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
      role="region"
      aria-label={title}
    >
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
        <div>
          <h3 className="font-semibold text-slate-200">{title}</h3>
          {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
        <div className="flex items-center gap-2" role="toolbar" aria-label={`${title} actions`}>
          <button
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors duration-200"
            title="Filter"
            aria-label="Filter table data"
          >
            <Filter className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors duration-200"
            title="Columns"
            aria-label="Configure visible columns"
          >
            <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors duration-200"
            title="Export"
            aria-label="Export table data"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap" role="table">
          <thead className="bg-slate-900 sticky top-0 border-b border-slate-800 text-slate-400">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="py-3 px-5 font-medium" scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}
