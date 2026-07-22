"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlaySquare } from "lucide-react";

interface ExecutionReplayViewerProps {
  replay: any;
}

export function ExecutionReplayViewer({ replay }: ExecutionReplayViewerProps) {
  if (!replay) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <PlaySquare className="h-4 w-4 text-purple-400" />
          Execution Replay Checksum
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800 mt-2 space-y-2">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-sm text-slate-400">Replay Duration</span>
            <span className="text-sm font-mono text-slate-300">{replay.replayDuration}s</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-500">Cryptographic Checksum:</span>
            <span className="text-xs font-mono text-purple-400 truncate bg-slate-900 p-1.5 rounded border border-slate-800">
              {replay.replayChecksum}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
