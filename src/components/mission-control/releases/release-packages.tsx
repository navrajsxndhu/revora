"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

interface ReleasePackagesProps {
  packages: any[];
}

export function ReleasePackages({ packages }: ReleasePackagesProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Package className="h-4 w-4 text-emerald-400" />
          Immutable Release Packages
        </CardTitle>
      </CardHeader>
      <CardContent>
        {packages && packages.length > 0 ? (
          <div className="space-y-3 mt-2">
            {packages.map((pkg, idx) => (
              <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{pkg.artifactType}</span>
                  <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${pkg.isImmutable ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/50' : 'bg-rose-950/50 text-rose-400 border border-rose-800/50'}`}>
                    {pkg.isImmutable ? 'IMMUTABLE' : 'MUTABLE'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span className="text-slate-500">Hash: <span className="text-indigo-400 font-mono text-[10px]">{pkg.artifactHash}</span></span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No packages defined for this release.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
