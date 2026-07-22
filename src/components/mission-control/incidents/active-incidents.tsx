"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface ActiveIncidentsProps {
  incidents: unknown[];
}

export function ActiveIncidents({ incidents }: ActiveIncidentsProps) {
  return (
    <Card className="border-rose-900/50 bg-rose-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-rose-500" />
          Active Incidents
        </CardTitle>
      </CardHeader>
      <CardContent>
        {incidents && incidents.length > 0 ? (
          <div className="space-y-3 mt-2">
            {incidents.map((inc, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-rose-900/30 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{inc.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">Affected: <span className="text-slate-300">{inc.affectedServices}</span></p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-rose-950 text-rose-400 border border-rose-800">
                      {inc.severity}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Duration: {inc.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-emerald-500/70 italic mt-4 font-mono">
            System operates within nominal parameters. Zero active incidents detected.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
