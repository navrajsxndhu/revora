"use client";

import React, { useEffect, useState } from "react";
import { History, ShieldCheck, XCircle } from "lucide-react";

export function AccessReviewTimeline() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/reviews")
      .then(res => res.json())
      .then(d => {
        setReviews(d.reviews || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = reviews.length > 0 ? reviews : [
    { id: "REV-1042", reviewer: "Security Bot", scope: "Dormant Accounts", findings: 4, revocations: 4, time: "2 hrs ago" },
    { id: "REV-1041", reviewer: "Finance Dir", scope: "FinOps Roles Q3", findings: 0, revocations: 0, time: "1 day ago" },
    { id: "REV-1040", reviewer: "VP Eng", scope: "Platform Admin Accs", findings: 1, revocations: 1, time: "3 days ago" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING REVIEWS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <History className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Access Reviews</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 pl-6">
        <div className="relative border-l border-slate-700 ml-2 space-y-6 pb-2">
          {data.map(r => (
            <div key={r.id} className="pl-6 relative">
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-mono text-xs text-indigo-400">{r.id}</span>
                <span className="text-[10px] font-mono text-slate-500">{r.time}</span>
              </div>
              <p className="text-sm text-slate-300 font-sans font-medium mb-1">{r.scope}</p>
              
              <div className="text-[10px] text-slate-400 font-mono mb-2">Reviewer: {r.reviewer}</div>
              
              <div className="flex items-center space-x-4 text-[10px] font-mono">
                {r.findings === 0 ? (
                  <span className="text-emerald-400 flex items-center"><ShieldCheck className="w-3 h-3 mr-1" /> Verified</span>
                ) : (
                  <>
                    <span className="text-amber-400 flex items-center">{r.findings} Findings</span>
                    <span className="text-rose-400 flex items-center"><XCircle className="w-3 h-3 mr-1" /> {r.revocations} Revocations</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
