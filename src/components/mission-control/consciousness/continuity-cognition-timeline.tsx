"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

interface ContinuityCognitionTimelineProps {
  data: {
    multiEraLinkage: number;
    survivabilityCausality: number;
    governanceSync: number;
  } | null;
}

export function ContinuityCognitionTimeline({ data }: ContinuityCognitionTimelineProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-orange-400" />
          Continuity Cognition
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 pt-2">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Multi-Era Linkage</span>
              <span className="text-orange-400">{data.multiEraLinkage.toFixed(1)}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-500 rounded-full" 
                style={{ width: `${data.multiEraLinkage}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Survivability Causality</span>
              <span className="text-amber-400">{data.survivabilityCausality.toFixed(1)}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full" 
                style={{ width: `${data.survivabilityCausality}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Governance Synchronization</span>
              <span className="text-yellow-400">{data.governanceSync.toFixed(1)}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500 rounded-full" 
                style={{ width: `${data.governanceSync}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
