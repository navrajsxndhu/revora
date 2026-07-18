"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export function SelfServicePortal() {
  const [requesting, setRequesting] = useState(false);

  const handleRequest = () => {
    setRequesting(true);
    setTimeout(() => {
      setRequesting(false);
    }, 800);
  };

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <PlusCircle className="h-4 w-4 text-indigo-400" />
          Self-Service Portal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mt-2 overflow-x-auto pb-2">
          <div className="flex-shrink-0 w-48 p-3 bg-slate-950/50 rounded border border-indigo-900/30 flex flex-col items-start gap-2">
            <span className="text-xs font-semibold text-slate-200">New Database</span>
            <span className="text-[10px] text-slate-400">Provision managed DB</span>
            <button 
              onClick={handleRequest}
              disabled={requesting}
              className="mt-2 w-full text-[10px] bg-indigo-900/50 hover:bg-indigo-800/50 text-indigo-300 py-1.5 rounded transition-colors"
            >
              Request
            </button>
          </div>
          <div className="flex-shrink-0 w-48 p-3 bg-slate-950/50 rounded border border-indigo-900/30 flex flex-col items-start gap-2">
            <span className="text-xs font-semibold text-slate-200">New Namespace</span>
            <span className="text-[10px] text-slate-400">K8s isolation zone</span>
            <button 
              onClick={handleRequest}
              disabled={requesting}
              className="mt-2 w-full text-[10px] bg-indigo-900/50 hover:bg-indigo-800/50 text-indigo-300 py-1.5 rounded transition-colors"
            >
              Request
            </button>
          </div>
          <div className="flex-shrink-0 w-48 p-3 bg-slate-950/50 rounded border border-indigo-900/30 flex flex-col items-start gap-2">
            <span className="text-xs font-semibold text-slate-200">Storage Volume</span>
            <span className="text-[10px] text-slate-400">Block or Object storage</span>
            <button 
              onClick={handleRequest}
              disabled={requesting}
              className="mt-2 w-full text-[10px] bg-indigo-900/50 hover:bg-indigo-800/50 text-indigo-300 py-1.5 rounded transition-colors"
            >
              Request
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
