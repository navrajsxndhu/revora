"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Plug } from "lucide-react";

interface ConnectorStatusPanelProps {
  connectors: any[];
}

export function ConnectorStatusPanel({ connectors }: ConnectorStatusPanelProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Plug className="h-4 w-4 text-indigo-400" />
          Active Connectors
        </CardTitle>
      </CardHeader>
      <CardContent>
        {connectors && connectors.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {connectors.map((conn, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-200">{conn.provider.replace(/_/g, ' ')}</span>
                <div className="flex justify-between items-center mt-2">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${conn.status === 'ACTIVE' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/50' : 'bg-rose-950/50 text-rose-400 border border-rose-800/50'}`}>
                    {conn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active external connectors discovered.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
