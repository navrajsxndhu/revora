"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";

interface ReadinessMatrixProps {
  readiness: any;
}

export function ReadinessMatrix({ readiness }: ReadinessMatrixProps) {
  if (!readiness) return null;

  const checks = [
    { label: "Planning Complete", value: readiness.planningComplete },
    { label: "Dependencies Resolved", value: readiness.dependenciesResolved },
    { label: "Constitutional Compliance", value: readiness.constitutionalCompliance },
    { label: "Approval Completion", value: readiness.approvalCompletion },
    { label: "Rollback Available", value: readiness.rollbackAvailable },
    { label: "Infrastructure Capacity", value: readiness.infrastructureCapacity },
    { label: "Integration Healthy", value: readiness.integrationHealthy },
    { label: "Service Health", value: readiness.serviceHealth },
    { label: "Treasury Safety", value: readiness.treasurySafety },
    { label: "Resource Availability", value: readiness.resourceAvailability },
    { label: "Release Window Valid", value: readiness.releaseWindowValid },
    { label: "Strategy Selected", value: readiness.strategySelected }
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Gauge className="h-4 w-4 text-emerald-400" />
          Comprehensive Readiness Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-2 border-b border-slate-800/50 mb-3 pb-4">
          <div className="text-4xl font-mono font-bold text-emerald-400">{readiness.score.toFixed(1)}%</div>
          <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">Overall Readiness Score</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
          {checks.map((check, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{check.label}</span>
              <span className={`font-mono ${check.value ? 'text-emerald-400' : 'text-rose-400'}`}>
                {check.value ? 'PASS' : 'FAIL'}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
