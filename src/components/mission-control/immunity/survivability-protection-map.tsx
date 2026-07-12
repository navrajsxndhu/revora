"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

interface SurvivabilityProtectionMapProps {
  data: {
    activeQuarantines: number;
    containmentStatus: string;
    pathogenClassification: string;
  } | null;
}

export function SurvivabilityProtectionMap({ data }: SurvivabilityProtectionMapProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-cyan-400" />
          Survivability Protection Network
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 w-full flex items-center justify-center relative bg-slate-950/50 rounded border border-slate-800 mt-2 overflow-hidden">
          {/* Abstract map of nodes being quarantined or protected */}
          <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
          
          {data.pathogenClassification !== "ISOLATED" && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-rose-500/10 rounded-full blur-xl animate-pulse" />
          )}

          <div className={`relative z-10 w-4 h-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] ${data.containmentStatus === 'CONTAINED' || data.containmentStatus === 'SECURE' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="50%" x2="20%" y2="30%" stroke={data.activeQuarantines > 0 ? "#f43f5e" : "#34d399"} strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
            <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#34d399" strokeWidth="2" opacity="0.5" />
            <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="#34d399" strokeWidth="2" opacity="0.5" />
          </svg>

          <div className="absolute bottom-2 left-2 text-xs font-mono text-slate-500">
            NETWORK_INTEGRITY: {data.containmentStatus}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
