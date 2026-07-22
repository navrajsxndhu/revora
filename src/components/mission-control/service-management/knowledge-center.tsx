"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface KnowledgeCenterProps {
  knowledge: unknown;
}

export function KnowledgeCenter({ knowledge }: KnowledgeCenterProps) {
  if (!knowledge) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-indigo-400" />
          Knowledge Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {knowledge.map((k: unknown, idx: number) => (
            <div key={idx} className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-indigo-900/30">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-300">{k.title}</span>
                <span className="text-[10px] text-slate-500">{k.version}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500">{k.category}</span>
                <span className="text-[10px] font-mono text-indigo-400">WF: {k.workflow}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
