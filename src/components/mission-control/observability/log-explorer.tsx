"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

interface LogExplorerProps {
  logs: unknown[];
}

export function LogExplorer({ logs }: LogExplorerProps) {
  if (!logs) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Terminal className="h-4 w-4 text-slate-400" />
          Log Explorer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mt-2">
          {logs.map((log, idx) => (
            <div key={idx} className="p-1.5 bg-slate-950/50 rounded border border-slate-800/50 flex items-start gap-2 text-[9px] font-mono">
              <span className="text-slate-500 whitespace-nowrap">{log.time}</span>
              <span className={`px-1 py-0.5 rounded ${
                log.level === 'INFO' ? 'text-emerald-400 bg-emerald-950/30' : (log.level === 'WARN' ? 'text-amber-400 bg-amber-950/30' : 'text-rose-400 bg-rose-950/30')
              }`}>
                {log.level}
              </span>
              <span className="text-slate-400 whitespace-nowrap">[{log.service}]</span>
              <span className="text-slate-300">{log.message}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
