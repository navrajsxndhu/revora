"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface ServiceCatalogProps {
  catalog: unknown[];
}

export function ServiceCatalog({ catalog }: ServiceCatalogProps) {
  if (!catalog) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-indigo-400" />
          Service Catalog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {catalog.map((item, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-indigo-900/30 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-indigo-900/30 pb-1">
                <span className="text-xs font-semibold text-slate-200">{item.service}</span>
                <span className="font-mono text-[9px] px-1 py-0.5 rounded border border-indigo-800 text-indigo-300">
                  {item.environment}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span>Owner: {item.owner}</span>
                <span className="font-mono">{item.runtime}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
