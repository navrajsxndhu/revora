"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

interface PlatformResourcesProps {
  resources: any[];
}

export function PlatformResources({ resources }: PlatformResourcesProps) {
  if (!resources) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-400" />
          Platform Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {resources.map((res, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{res.name}</span>
                <span className="font-mono text-[9px] px-1 py-0.5 rounded border border-slate-700 text-slate-400">
                  {res.type}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-500">{res.region}</span>
                <span className={`font-mono ${res.status === 'PROVISIONED' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {res.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
