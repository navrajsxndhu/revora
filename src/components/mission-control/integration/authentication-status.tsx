"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface AuthenticationStatusProps {
  connectors: any[];
}

export function AuthenticationStatus({ connectors }: AuthenticationStatusProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Lock className="h-4 w-4 text-emerald-400" />
          Authentication Integrity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {connectors && connectors.length > 0 ? (
          <div className="space-y-3 mt-2">
            {connectors.map((conn, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
                <span className="text-xs font-semibold text-slate-300">{conn.provider.replace(/_/g, ' ')}</span>
                <span className="text-[10px] text-emerald-400 font-mono tracking-wider">VERIFIED</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active connections.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
