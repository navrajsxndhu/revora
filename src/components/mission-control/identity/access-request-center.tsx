"use client";

import React, { useEffect, useState } from "react";
import { Send, Clock, CheckCircle, XCircle } from "lucide-react";

export function AccessRequestCenter() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/access-requests")
      .then(res => res.json())
      .then(d => {
        setRequests(d.requests || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = requests.length > 0 ? requests : [
    { id: "REQ-099", requester: "Alice Zhang", permission: "Platform Administrator", justification: "Incident INC-402 Recovery", approver: "System", status: "APPROVED", risk: "CRITICAL", created: "10 mins ago" },
    { id: "REQ-098", requester: "Bob Lee", permission: "Finance Viewer", justification: "Q3 Audit Review", approver: "Finance Dir", status: "PENDING", risk: "LOW", created: "2 hrs ago" },
    { id: "REQ-097", requester: "Deploy Bot", permission: "release:production", justification: "Auto-deployment script update", approver: "Release Mgr", status: "REJECTED", risk: "HIGH", created: "1 day ago" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING REQUESTS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Send className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Access Request Center</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map(r => (
          <div key={r.id} className="border border-slate-800 rounded bg-slate-950 p-3 hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-indigo-400">{r.id}</span>
                <span className="text-sm text-slate-200 font-sans font-medium">{r.requester}</span>
              </div>
              <span className={`text-[10px] font-mono flex items-center px-1.5 py-0.5 rounded ${
                r.status === 'APPROVED' ? 'text-emerald-400 bg-emerald-500/10' : 
                r.status === 'REJECTED' ? 'text-rose-400 bg-rose-500/10' : 'text-amber-400 bg-amber-500/10'
              }`}>
                {r.status}
              </span>
            </div>
            
            <div className="text-xs text-slate-300 font-sans mb-1"><span className="text-slate-500">Requested:</span> {r.permission}</div>
            <div className="text-[10px] text-slate-400 font-sans italic mb-3">"{r.justification}"</div>

            <div className="flex justify-between items-center text-[10px] font-mono border-t border-slate-800/50 pt-2">
              <span className="text-slate-500">Approver: <span className="text-slate-300">{r.approver}</span></span>
              <span className="text-slate-500 flex items-center"><Clock className="w-3 h-3 mr-1" /> {r.created}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
