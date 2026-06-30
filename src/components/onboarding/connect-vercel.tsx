"use client";

import { useState } from "react";

export function ConnectVercel({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-slate-200 font-semibold mb-1">Connect Vercel</h3>
          <p className="text-slate-400 text-sm">Sync deployments and environment variables for blast radius mapping.</p>
        </div>
        <svg className="w-8 h-8 text-slate-500" fill="currentColor" viewBox="0 0 512 512"><path d="M256 48l240 416H16z"/></svg>
      </div>
      <button 
        onClick={handleConnect}
        disabled={loading}
        className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded transition-colors text-sm font-medium"
      >
        {loading ? "Authenticating..." : "Connect Vercel Project"}
      </button>
    </div>
  );
}
