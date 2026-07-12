"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Library } from "lucide-react";

interface DoctrineLibraryProps {
  doctrines: string[];
}

export function DoctrineLibrary({ doctrines }: DoctrineLibraryProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Library className="h-4 w-4 text-emerald-400" />
          Operational Doctrine Library
        </CardTitle>
      </CardHeader>
      <CardContent>
        {doctrines && doctrines.length > 0 ? (
          <div className="space-y-3 mt-2">
            {doctrines.map((doctrine, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 text-sm text-slate-200">
                {doctrine}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No extracted operational doctrines recorded yet.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
