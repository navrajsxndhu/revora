"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket } from "lucide-react";

interface ActiveReleasesProps {
  releases: any[];
}

export function ActiveReleases({ releases }: ActiveReleasesProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Rocket className="h-4 w-4 text-emerald-400" />
          Active Governed Releases
        </CardTitle>
      </CardHeader>
      <CardContent>
        {releases && releases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {releases.map((release, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <span className="text-xs font-semibold text-slate-200">{release.releaseName}</span>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Readiness Score</span>
                  <span className="text-emerald-400 font-mono">{release.readinessScore}%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Status</span>
                  <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] bg-indigo-950/50 text-indigo-400 border border-indigo-800/50`}>
                    {release.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active releases in the governance pipeline.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
