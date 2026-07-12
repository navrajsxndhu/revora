"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

interface CoordinationIndexPanelProps {
  data: {
    coordinationScore: number;
    coordinationClass: string;
    coordinationMaturity: string;
  } | null;
}

export function CoordinationIndexPanel({ data }: CoordinationIndexPanelProps) {
  if (!data) return null;

  const isHigh = data.coordinationScore >= 70;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Network className={`h-4 w-4 ${isHigh ? 'text-indigo-400' : 'text-slate-400'}`} />
          Operational Coordination Index
        </CardTitle>
        <Badge variant="outline" className={`border-slate-700 ${isHigh ? 'text-indigo-400 bg-indigo-950/50' : 'text-slate-400 bg-slate-900/50'}`}>
          {data.coordinationClass.replace(/_/g, ' ')}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${isHigh ? 'text-indigo-100' : 'text-slate-100'}`}>
              {data.coordinationScore.toFixed(1)}
            </span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Coordination Maturity</span>
              <span className="text-slate-200 font-medium">{data.coordinationMaturity.replace(/_/g, ' ')}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-indigo-600 to-indigo-400"
                style={{ width: `${data.coordinationScore}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
