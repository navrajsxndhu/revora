"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

interface ValidationChecklistProps {
  validations: unknown[];
}

export function ValidationChecklist({ validations }: ValidationChecklistProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Pre-Flight Validations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {validations && validations.length > 0 ? (
          <div className="space-y-3 mt-2">
            {validations.map((check, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-200">{check.gate.replace(/_/g, ' ')}</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                    check.status === 'PASSED' ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' :
                    'bg-rose-950 text-rose-400 border border-rose-900'
                  }`}>
                    {check.status}
                  </span>
                </div>
                <div className="text-xs text-slate-500">{check.reason}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active validation checks available.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
