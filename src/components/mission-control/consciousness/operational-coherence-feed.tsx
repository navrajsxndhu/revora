"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

interface OperationalCoherenceFeedProps {
  evidence: string[];
}

export function OperationalCoherenceFeed({ evidence }: OperationalCoherenceFeedProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Terminal className="h-4 w-4 text-slate-400" />
          Consciousness Coherence Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 h-[200px] overflow-y-auto pr-2 custom-scrollbar">
          {evidence.map((entry, idx) => (
            <div key={idx} className="flex gap-2 text-xs font-mono">
              <span className="text-slate-500">[{new Date().toISOString().split('T')[1].split('.')[0]}]</span>
              <span className={entry.includes("-") || entry.toLowerCase().includes("degrade") || entry.toLowerCase().includes("blind") ? "text-rose-400" : "text-emerald-400"}>
                {entry}
              </span>
            </div>
          ))}
          {evidence.length === 0 && (
            <div className="text-xs text-slate-500 font-mono italic">Awaiting consciousness processing...</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
