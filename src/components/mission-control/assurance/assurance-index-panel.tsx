"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckSquare } from "lucide-react";

interface AssuranceIndexPanelProps {
  data: {
    assuranceScore: number;
    assuranceClass: string;
    verificationMaturity: string;
  } | null;
}

export function AssuranceIndexPanel({ data }: AssuranceIndexPanelProps) {
  if (!data) return null;

  const isHigh = data.assuranceScore >= 75;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <CheckSquare className={`h-4 w-4 ${isHigh ? 'text-teal-400' : 'text-slate-400'}`} />
          Operational Assurance Index
        </CardTitle>
        <Badge variant="outline" className={`border-slate-700 ${isHigh ? 'text-teal-400 bg-teal-950/50' : 'text-slate-400 bg-slate-900/50'}`}>
          {data.assuranceClass.replace(/_/g, ' ')}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${isHigh ? 'text-teal-100' : 'text-slate-100'}`}>
              {data.assuranceScore.toFixed(1)}
            </span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Verification Maturity</span>
              <span className="text-slate-200 font-medium">{data.verificationMaturity.replace(/_/g, ' ')}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-teal-600 to-teal-400"
                style={{ width: `${data.assuranceScore}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
