"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface VerificationTimelineProps {
  timeline: {
    totalVerifications: number;
    passedVerifications: number;
    failedVerifications: number;
  } | null;
}

export function VerificationTimeline({ timeline }: VerificationTimelineProps) {
  if (!timeline) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Clock className="h-4 w-4 text-teal-400" />
          Verification Volume
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 mt-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Total Validations</span>
            <span className="text-xl font-mono text-teal-400">{timeline.totalVerifications}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Success Rate</span>
            <span className="text-xl font-mono text-emerald-400">
              {((timeline.passedVerifications / timeline.totalVerifications) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Outcome Failures</span>
            <span className="text-xl font-mono text-rose-400">{timeline.failedVerifications}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
