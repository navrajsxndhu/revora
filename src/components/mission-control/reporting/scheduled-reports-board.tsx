import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, PlayCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { JobService } from "@/services/job-service";

export async function ScheduledReportsBoard() {
  const session = await getServerSession(authOptions);
  let jobs: any[] = [];
  
  try {
    if (session?.user) {
      const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
      const workspaceId = workspaces[0]?.id;
      if (workspaceId) {
        jobs = await JobService.getWorkspaceJobs(workspaceId, session.user.id, session.user.role);
        jobs = jobs.slice(0, 5); // only show latest 5
      }
    }
  } catch (e) {
    // Graceful fallback for unauthorized or missing data
  }

  return (
    <Card className="bg-slate-900 border-slate-800 text-slate-200 col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            Background Job Queue
          </div>
          <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400 border border-slate-700">BullMQ Active</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 border border-slate-800 rounded bg-slate-950 text-slate-500">
            <Clock className="w-6 h-6 mb-2 opacity-50" />
            <span className="font-mono text-xs">NO QUEUED JOBS</span>
          </div>
        ) : (
          <div className="space-y-3">
            {jobs.map(job => (
              <div key={job.id} className="flex flex-col gap-2 p-3 bg-slate-950 border border-slate-800 rounded hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-slate-300">{job.jobName}</span>
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${
                    job.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    job.status === 'FAILED' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    job.status === 'ACTIVE' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    'bg-slate-500/10 text-slate-400 border-slate-500/20'
                  }`}>
                    {job.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span className="truncate max-w-[150px]">{job.queueName}</span>
                  <time>{new Date(job.createdAt).toLocaleTimeString()}</time>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
