"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

interface ImmunityIndexPanelProps {
  data: {
    immunityScore: number;
    immunityClass: string;
    containmentSurvivabilityHorizon: string;
  } | null;
}

export function ImmunityIndexPanel({ data }: ImmunityIndexPanelProps) {
  if (!data) return null;

  const isVulnerable = data.immunityScore < 60;

  return (
    <Card className={`border-slate-800 ${isVulnerable ? 'bg-rose-950/20' : 'bg-slate-900/50'}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldCheck className={`h-4 w-4 ${isVulnerable ? 'text-rose-400' : 'text-emerald-400'}`} />
          Operational Immunity Index
        </CardTitle>
        <Badge variant="outline" className={`border-slate-700 ${isVulnerable ? 'text-rose-400 bg-rose-950/50' : 'text-emerald-400 bg-emerald-950/50'}`}>
          {data.immunityClass.replace(/_/g, ' ')}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${isVulnerable ? 'text-rose-100' : 'text-slate-100'}`}>
              {data.immunityScore.toFixed(1)}
            </span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Containment Horizon</span>
              <span className="text-slate-200 font-medium">{data.containmentSurvivabilityHorizon.replace(/_/g, ' ')}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${isVulnerable ? 'bg-gradient-to-r from-rose-500 to-orange-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`}
                style={{ width: `${data.immunityScore}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
