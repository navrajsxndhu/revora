"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Database } from "lucide-react";

interface OperationalKnowledgeTableProps {
  knowledgeData: unknown; // We can pass the index result or just use as a placeholder for raw DB records
}

export function OperationalKnowledgeTable({ knowledgeData }: OperationalKnowledgeTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Database className="h-4 w-4 text-slate-400" />
          Raw Operational Knowledge Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        {knowledgeData ? (
          <div className="space-y-2 mt-2">
            <div className="p-3 bg-slate-950/50 rounded border border-slate-800 flex justify-between">
              <span className="text-xs text-slate-400 font-mono">ROOT_NODE</span>
              <span className="text-xs text-slate-200">Systemic Resilience Baseline v2</span>
            </div>
            <div className="p-3 bg-slate-950/50 rounded border border-slate-800 flex justify-between">
              <span className="text-xs text-slate-400 font-mono">KNOWLEDGE_NODE</span>
              <span className="text-xs text-emerald-400">Validated: {knowledgeData.knowledgeClass}</span>
            </div>
            <div className="text-xs text-slate-500 italic mt-2">
              (In a production environment, this table traces graph edges between all structural models)
            </div>
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No institutional knowledge nodes located.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
