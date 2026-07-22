"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

interface PolicyLibraryProps {
  policies: unknown[];
}

export function PolicyLibrary({ policies }: PolicyLibraryProps) {
  if (!policies) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BookOpenCheck className="h-4 w-4 text-slate-400" />
          Policy Library
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {policies.map((policy, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-300">{policy.name}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded border ${
                  policy.status === 'ENFORCED' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-rose-900 text-rose-400 bg-rose-950/30'
                }`}>
                  {policy.status}
                </span>
              </div>
              <span className="text-[10px] text-slate-500">Binding: <span className="text-slate-400">{policy.binding}</span></span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
