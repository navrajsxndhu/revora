"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Server } from "lucide-react";

interface ConfigurationInventoryProps {
  inventory: unknown;
}

export function ConfigurationInventory({ inventory }: ConfigurationInventoryProps) {
  if (!inventory) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Server className="h-4 w-4 text-indigo-400" />
          Configuration Inventory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mt-2 mb-4">
          <div className="flex flex-col border-b border-indigo-900/30 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Total Assets</span>
            <span className="font-mono text-2xl text-indigo-400">{inventory.total.toLocaleString()}</span>
          </div>
          <div className="flex flex-col border-b border-indigo-900/30 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Applications</span>
            <span className="font-mono text-2xl text-slate-300">{inventory.applications}</span>
          </div>
          <div className="flex flex-col border-b border-indigo-900/30 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Services</span>
            <span className="font-mono text-2xl text-slate-300">{inventory.services}</span>
          </div>
          <div className="flex flex-col border-b border-indigo-900/30 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Databases</span>
            <span className="font-mono text-2xl text-slate-300">{inventory.databases}</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Clusters</span>
            <span className="font-mono text-xl text-slate-400">{inventory.clusters}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Networks</span>
            <span className="font-mono text-xl text-slate-400">{inventory.networks}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Storage</span>
            <span className="font-mono text-xl text-slate-400">{inventory.storage}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">APIs</span>
            <span className="font-mono text-xl text-slate-400">{inventory.apis}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
