"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitMerge } from "lucide-react";

interface DecisionAlternativesTableProps {
  alternatives: unknown[];
}

export function DecisionAlternativesTable({ alternatives }: DecisionAlternativesTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <GitMerge className="h-4 w-4 text-emerald-400" />
          Derived Operational Alternatives
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alternatives && alternatives.length > 0 ? (
          <div className="space-y-3 mt-2">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-200">{alt.optionName.replace(/_/g, ' ')}</span>
                </div>
                <div className="text-xs text-slate-400 mb-2">{alt.description}</div>
                <div className="text-xs text-slate-500 italic pl-3 border-l-2 border-slate-700">
                  {alt.evidence[0]}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No alternatives derived from current context.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
