"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, TestTube } from "lucide-react";

export function DecisionSimulationPanel() {
  const [scenario, setScenario] = useState("CANARY");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/decision/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario })
      });

      if (!res.ok) throw new Error("Simulation failed");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Failed to run decision simulation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <TestTube className="h-4 w-4 text-pink-400" />
          Decision Impact Simulator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Select value={scenario} onValueChange={setScenario}>
              <SelectTrigger className="w-full bg-slate-950 border-slate-800">
                <SelectValue placeholder="Select Scenario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IMMEDIATE_ROLLOUT">Immediate Rollout</SelectItem>
                <SelectItem value="PROGRESSIVE_ROLLOUT">Progressive Rollout</SelectItem>
                <SelectItem value="FREEZE">Deployment Freeze</SelectItem>
                <SelectItem value="CANARY">Canary Strategy</SelectItem>
                <SelectItem value="REGIONAL_DEPLOYMENT">Regional Deployment</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSimulate} disabled={loading} variant="outline" className="border-slate-700 whitespace-nowrap">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Simulate"}
            </Button>
          </div>

          {result && (
            <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-3">
              <div className="flex justify-between text-sm items-center border-b border-slate-800 pb-2">
                <span className="text-slate-400">Recommended Stance:</span>
                <span className={`font-mono text-xs px-2 py-1 rounded bg-slate-900 border ${result.recommendedDecision.includes('REJECTED') ? 'border-rose-900 text-rose-400' : 'border-emerald-900 text-emerald-400'}`}>
                  {result.recommendedDecision.replace(/_/g, ' ')}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Projected Outcome:</span>
                <span className="text-slate-200">{result.projectedOutcome.replace(/_/g, ' ')}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Survivability Impact:</span>
                <span className={`font-mono ${result.survivabilityImpact >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {result.survivabilityImpact > 0 ? '+' : ''}{result.survivabilityImpact.toFixed(1)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Treasury Impact:</span>
                <span className={`font-mono ${result.treasuryImpact >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {result.treasuryImpact > 0 ? '+' : ''}{result.treasuryImpact.toFixed(1)}
                </span>
              </div>
              
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-500 mb-1">Mathematical Derivation Evidence:</div>
                <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                  {result.evidence.map((ev: string, i: number) => (
                    <li key={i}>{ev}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
