"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Library } from "lucide-react";

interface WorkflowCatalogProps {
  catalog: unknown;
}

export function WorkflowCatalog({ catalog }: WorkflowCatalogProps) {
  if (!catalog) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Library className="h-4 w-4 text-indigo-400" />
          Workflow Catalog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {catalog.map((wf: unknown, idx: number) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-indigo-900/30">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{wf.name}</span>
                <span className="text-[10px] text-slate-500">{wf.category} | v{wf.version}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono text-indigo-400">{wf.status}</span>
                <span className="text-[10px] text-slate-500">{wf.owner}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
