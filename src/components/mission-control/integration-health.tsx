"use client";

import { useEffect, useState } from "react";
import { PlatformHealth } from "@/lib/platform/health";

export function IntegrationHealth() {
  const [health, setHealth] = useState<PlatformHealth | null>(null);

  useEffect(() => {
    fetch('/api/platform/health')
      .then(r => r.json())
      .then(data => setHealth(data))
      .catch(() => setHealth(null));
  }, []);

  if (!health) {
    return (
      <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
        <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></div>
        <span>Checking Platform Health...</span>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    if (status === "GREEN") return "bg-emerald-500";
    if (status === "YELLOW") return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="flex items-center space-x-6 text-xs text-slate-400 font-medium bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(health.database)}`}></div>
        <span>Database</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(health.redis)}`}></div>
        <span>Redis Queue</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(health.webhooks)}`}></div>
        <span>Webhooks</span>
      </div>
    </div>
  );
}
