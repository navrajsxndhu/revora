"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileSearch } from "lucide-react";

interface KnowledgeEvidenceViewerProps {
  evidence: string[];
}

export function KnowledgeEvidenceViewer({ evidence }: KnowledgeEvidenceViewerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <FileSearch className="h-4 w-4 text-slate-400" />
          Extraction Evidence Chain
        </CardTitle>
      </CardHeader>
      <CardContent>
        {evidence && evidence.length > 0 ? (
          <div className="space-y-3 mt-2">
            {evidence.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 text-xs text-slate-400 font-mono">
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active evidence chains.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
