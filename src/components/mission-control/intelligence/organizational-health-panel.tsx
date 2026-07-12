"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartPulse } from "lucide-react";

interface OrganizationalHealthPanelProps {
  health: number | null;
  intelligenceClass: string | null;
  maturity: string | null;
}

export function OrganizationalHealthPanel({ health, intelligenceClass, maturity }: OrganizationalHealthPanelProps) {
  if (health === null) return null;

  const isHealthy = health >= 90;
  const isWarning = health >= 70 && health < 90;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <HeartPulse className={`h-4 w-4 ${isHealthy ? 'text-emerald-400' : isWarning ? 'text-amber-400' : 'text-rose-400'}`} />
          Organizational Health Index
        </CardTitle>
        {intelligenceClass && (
          <Badge variant="outline" className="border-slate-700 text-indigo-400 bg-indigo-950/50">
            {intelligenceClass.replace(/_/g, ' ')}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-5xl font-bold ${isHealthy ? 'text-emerald-100' : isWarning ? 'text-amber-100' : 'text-rose-100'}`}>
              {health.toFixed(1)}
            </span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
          
          <div className="space-y-2">
            {maturity && (
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Intelligence Maturity</span>
                <span className="text-slate-200 font-medium">{maturity.replace(/_/g, ' ')}</span>
              </div>
            )}
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${isHealthy ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : isWarning ? 'bg-gradient-to-r from-amber-600 to-amber-400' : 'bg-gradient-to-r from-rose-600 to-rose-400'}`}
                style={{ width: `${health}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
