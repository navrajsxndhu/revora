"use client";

import React, { useEffect, useState } from "react";
import { History, CheckCircle, AlertOctagon, Link2 } from "lucide-react";

export function GovernanceAssessmentTimeline() {
  const [assessments, setAssessments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/governance/history")
      .then(res => res.json())
      .then(d => {
        setAssessments(d.assessments || []);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  const data = assessments.length > 0 ? assessments : [
    { id: "ASSESS-441", target: "Kubernetes Cluster Alpha", status: "PASSED", time: "10 mins ago", reviewer: "Automated (Sys)", policies: 12, findings: 0, evidence: "AuditLog-9921" },
    { id: "ASSESS-440", target: "IAM Role Assignments", status: "FAILED", time: "1 hour ago", reviewer: "Automated (Sys)", policies: 4, findings: 2, evidence: "AuditLog-9918" },
    { id: "ASSESS-439", target: "S3 Bucket Encryption", status: "PASSED", time: "4 hours ago", reviewer: "Automated (Sys)", policies: 2, findings: 0, evidence: "AuditLog-9890" },
  ];

  if (loading) {
    return <div className="h-64 border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING ASSESSMENTS...</div>;
  }

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <History className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Assessment Timeline</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6">
        <div className="relative border-l border-slate-700 ml-3 space-y-6 pb-4">
          {data.map(a => (
            <div key={a.id} className="pl-6 relative">
              <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${a.status === 'PASSED' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-mono text-xs text-indigo-400 bg-indigo-400/10 px-1 rounded">{a.id}</span>
                <span className="text-[10px] font-mono text-slate-500">{a.time}</span>
              </div>
              <p className="text-sm text-slate-300 font-sans font-medium mb-1">{a.target}</p>
              
              <div className="grid grid-cols-2 gap-2 my-2 bg-slate-950 p-2 rounded border border-slate-800/50">
                <div className="text-[10px] text-slate-400 font-mono">Policies: <span className="text-slate-200">{a.policies}</span></div>
                <div className="text-[10px] text-slate-400 font-mono">Reviewer: <span className="text-slate-200">{a.reviewer}</span></div>
                <div className="text-[10px] text-slate-400 font-mono col-span-2 flex justify-between">
                  <span>Findings: <span className={a.findings > 0 ? "text-rose-400" : "text-emerald-400"}>{a.findings}</span></span>
                  <span className="text-indigo-400 flex items-center cursor-pointer hover:underline"><Link2 className="w-3 h-3 mr-1"/>{a.evidence}</span>
                </div>
              </div>

              <div className="flex items-center text-[10px] font-mono">
                {a.status === 'PASSED' ? (
                  <span className="text-emerald-400 flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded"><CheckCircle className="w-3 h-3 mr-1"/> Verified</span>
                ) : (
                  <span className="text-rose-400 flex items-center bg-rose-400/10 px-1.5 py-0.5 rounded"><AlertOctagon className="w-3 h-3 mr-1"/> Violation Detected</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
