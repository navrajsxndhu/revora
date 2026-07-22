"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FolderKanban } from "lucide-react";

interface EnterpriseServiceCatalogProps {
  catalog: any;
}

export function EnterpriseServiceCatalog({ catalog }: EnterpriseServiceCatalogProps) {
  if (!catalog) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <FolderKanban className="h-4 w-4 text-indigo-400" />
          Enterprise Service Catalog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {catalog.map((srv: any, idx: number) => (
            <div key={idx} className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-indigo-900/30">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{srv.name}</span>
                <span className="text-[10px] text-slate-500">{srv.category}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500">Required Approvals</span>
                <span className="text-[10px] font-mono text-indigo-400">{srv.approvals.join(" → ")}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
