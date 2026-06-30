"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Activity } from "lucide-react";

interface ConsciousnessIndexPanelProps {
  data: {
    consciousnessScore: number;
    consciousnessClass: string;
    awarenessSurvivabilityHorizon: string;
  } | null;
}

export function ConsciousnessIndexPanel({ data }: ConsciousnessIndexPanelProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Brain className="h-4 w-4 text-purple-400" />
          Consciousness Index
        </CardTitle>
        <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
          {data.consciousnessClass.replace(/_/g, ' ')}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-slate-100">{data.consciousnessScore.toFixed(1)}</span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Survivability Horizon</span>
              <span className="text-slate-200 font-medium">{data.awarenessSurvivabilityHorizon.replace(/_/g, ' ')}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" 
                style={{ width: `${data.consciousnessScore}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
