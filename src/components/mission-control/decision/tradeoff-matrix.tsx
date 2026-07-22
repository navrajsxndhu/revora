"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";

interface TradeoffMatrixProps {
  tradeoffs: any[];
}

export function TradeoffMatrix({ tradeoffs }: TradeoffMatrixProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Scale className="h-4 w-4 text-cyan-400" />
          Numerical Trade-off Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tradeoffs && tradeoffs.length > 0 ? (
          <div className="mt-2 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500">
                  <th className="py-2 px-3 font-medium">Alternative</th>
                  <th className="py-2 px-3 font-medium text-center">Ranking</th>
                  <th className="py-2 px-3 font-medium text-right">Velocity</th>
                  <th className="py-2 px-3 font-medium text-right">Reliability</th>
                  <th className="py-2 px-3 font-medium text-right">Survivability</th>
                  <th className="py-2 px-3 font-medium text-right">Treasury</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {tradeoffs.map((t, idx) => (
                  <tr key={idx} className={`border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${t.ranking === 1 ? 'bg-cyan-950/20' : ''}`}>
                    <td className="py-2 px-3 font-medium">{t.optionName.replace(/_/g, ' ')}</td>
                    <td className="py-2 px-3 text-center">
                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${t.ranking === 1 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                        {t.ranking}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-right font-mono">{t.velocityScore}</td>
                    <td className="py-2 px-3 text-right font-mono">{t.reliabilityScore}</td>
                    <td className={`py-2 px-3 text-right font-mono ${t.survivabilityImpact >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {t.survivabilityImpact > 0 ? '+' : ''}{t.survivabilityImpact.toFixed(1)}
                    </td>
                    <td className={`py-2 px-3 text-right font-mono ${t.treasuryImpact >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {t.treasuryImpact > 0 ? '+' : ''}{t.treasuryImpact.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No trade-off matrix calculated.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
