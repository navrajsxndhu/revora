"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, GitPullRequest } from "lucide-react";

export function CounterfactualSimulationPanel() {
  const [scenario, setScenario] = useState("CANARY_1_PERCENT");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = () => {
    setLoading(true);
    // Mock simulation
    setTimeout(() => {
      let projectedScore = 0;
      let riskDelta = 0;

      if (scenario === "IMMEDIATE_ROLLOUT") {
        projectedScore = 65.0;
        riskDelta = +25.0;
      } else if (scenario === "CANARY_1_PERCENT") {
        projectedScore = 98.0;
        riskDelta = -15.0;
      } else {
        projectedScore = 80.0;
        riskDelta = 0;
      }

      setResult({
        alternateStrategy: scenario,
        projectedAssuranceScore: projectedScore,
        projectedRiskDelta: riskDelta
      });
      setLoading(false);
    }, 600);
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <GitPullRequest className="h-4 w-4 text-blue-400" />
          Counterfactual Assurance Simulation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Select value={scenario} onValueChange={setScenario}>
              <SelectTrigger className="w-full bg-slate-950 border-slate-800">
                <SelectValue placeholder="Select Alternate Strategy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IMMEDIATE_ROLLOUT">Immediate Rollout</SelectItem>
                <SelectItem value="CANARY_1_PERCENT">Conservative Canary (1%)</SelectItem>
                <SelectItem value="REGIONAL_DEPLOYMENT">Regional Phasing</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSimulate} disabled={loading} variant="outline" className="border-slate-700 whitespace-nowrap">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Simulate"}
            </Button>
          </div>

          {result && (
            <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-3">
              <div className="flex justify-between text-sm items-center border-b border-slate-800 pb-2">
                <span className="text-slate-400">Projected Assurance:</span>
                <span className={`font-bold ${result.projectedAssuranceScore >= 90 ? 'text-teal-400' : 'text-amber-400'}`}>
                  {result.projectedAssuranceScore.toFixed(1)}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Risk Delta Shift:</span>
                <span className={`font-mono ${result.projectedRiskDelta > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {result.projectedRiskDelta > 0 ? '+' : ''}{result.projectedRiskDelta.toFixed(1)}%
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
