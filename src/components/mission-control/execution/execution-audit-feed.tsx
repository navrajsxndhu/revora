"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

interface ExecutionAuditFeedProps {
  logs: string[];
}

export function ExecutionAuditFeed({ logs }: ExecutionAuditFeedProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Terminal className="h-4 w-4 text-slate-400" />
          Execution Audit Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        {logs && logs.length > 0 ? (
          <div className="space-y-2 mt-2 font-mono text-xs">
            {logs.map((log, idx) => (
              <div key={idx} className="text-slate-400 p-2 bg-slate-950/50 rounded border border-slate-800 break-all">
                <span className="text-slate-500 mr-2">[{new Date().toISOString()}]</span>
                {log}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            Awaiting execution initialization.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
