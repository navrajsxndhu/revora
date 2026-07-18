"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export function SimulationCenter() {
  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Play className="h-4 w-4 text-indigo-400" />
          Simulation Engine
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          <div className="p-2 border border-dashed border-indigo-900/50 rounded text-center text-xs text-indigo-400 cursor-pointer hover:bg-indigo-900/20">
            Simulate Release Rollout
          </div>
          <div className="p-2 border border-dashed border-indigo-900/50 rounded text-center text-xs text-indigo-400 cursor-pointer hover:bg-indigo-900/20">
            Simulate Security Incident
          </div>
          <div className="p-2 border border-dashed border-indigo-900/50 rounded text-center text-xs text-indigo-400 cursor-pointer hover:bg-indigo-900/20">
            Simulate Disaster Recovery
          </div>
          <div className="p-2 border border-dashed border-indigo-900/50 rounded text-center text-xs text-indigo-400 cursor-pointer hover:bg-indigo-900/20">
            Simulate Database Migration
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
