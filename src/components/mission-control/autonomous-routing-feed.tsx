import React from "react";

export function AutonomousRoutingFeed() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block"></span>
        Nervous System Stream
      </h2>
      <div className="text-sm text-slate-500 italic">
        Listening for topology rebalances, active migrations, and recovery routing changes...
      </div>
    </div>
  );
}
