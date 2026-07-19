import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database } from "lucide-react";

export function DataMeshDashboard() {
  return (
    <Card className="bg-slate-900 border-slate-800 text-slate-200">
      <CardHeader>
        <CardTitle className="text-lg font-mono flex items-center gap-2">
          <Database className="w-5 h-5 text-indigo-400" />
          Data Mesh Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-32 border border-slate-800 rounded bg-slate-950">
          <span className="text-slate-500 font-mono text-sm">DATA PLATFORM GOVERNANCE</span>
        </div>
      </CardContent>
    </Card>
  );
}
