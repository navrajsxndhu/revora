"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link2 } from "lucide-react";

interface AssuranceEvidenceViewerProps {
  evidence: any[];
}

export function AssuranceEvidenceViewer({ evidence }: AssuranceEvidenceViewerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Link2 className="h-4 w-4 text-slate-400" />
          Verification Evidence Lineage
        </CardTitle>
      </CardHeader>
      <CardContent>
        {evidence && evidence.length > 0 ? (
          <div className="space-y-3 mt-2">
            {evidence.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
                <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                  <span className="text-xs font-mono text-slate-300">{item.evidenceType}</span>
                  <span className="text-xs text-slate-500">Weight: {item.evidenceWeight.toFixed(1)}</span>
                </div>
                <div className="text-xs text-slate-400 font-mono pt-1">
                  Source: {item.sourceReference}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No assurance evidence collected.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
