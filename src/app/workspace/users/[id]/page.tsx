import React from "react";
import { Mail, Calendar, Briefcase, MapPin, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { CollaborationTimeline } from "@/components/ui/collaboration-timeline";

export default function UserProfilePage({ params }: { params: { id: string } }) {
  const userId = params.id;

  const mockTimeline = [
    {
      id: "ev-1",
      type: "evidence_generated" as const,
      actor: "Sarah Chen",
      avatarInitials: "SC",
      timestamp: "2 hours ago",
      content: "Approved Phase 1 Integration structural bindings.",
      evidenceId: "SIG-991A"
    },
    {
      id: "ev-2",
      type: "comment" as const,
      actor: "Sarah Chen",
      avatarInitials: "SC",
      timestamp: "5 hours ago",
      content: "I've uploaded the new Q3 matrix for review.",
    },
    {
      id: "ev-3",
      type: "status_change" as const,
      actor: "Sarah Chen",
      avatarInitials: "SC",
      timestamp: "Yesterday",
      content: "Moved TASK-890 to 'In Progress'",
      evidenceId: "PRG-X19"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex items-start gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-transparent"></div>
          
          <div className="relative z-10 w-32 h-32 rounded-full border-4 border-black bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-4xl font-bold shadow-xl">
            SC
          </div>
          
          <div className="relative z-10 flex-1 pt-4">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Sarah Chen</h1>
            <p className="text-xl text-slate-400 mb-6">Senior Platform Architect</p>
            
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-slate-500" /> Platform Engineering</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-500" /> Seattle, WA</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-500" /> s.chen@revora.enterprise</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-500" /> Joined Oct 2024</div>
            </div>
          </div>
          
          <div className="relative z-10 pt-4">
            <button className="px-6 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
              Message
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            <PremiumTable 
              title="Assigned Work" 
              description="Tasks currently assigned to Sarah across all enterprise workspaces."
              headers={["Project", "Task", "Priority", "Status"]}
            >
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 text-sm text-slate-400">Architecture Redesign</td>
                <td className="py-4 px-5 font-medium text-slate-200">Implement deterministic RBAC resolution</td>
                <td className="py-4 px-5"><span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-xs font-medium">Medium</span></td>
                <td className="py-4 px-5"><span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium">In Progress</span></td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 text-sm text-slate-400">Q3 Compliance Audit</td>
                <td className="py-4 px-5 font-medium text-slate-200">Generate immutable policy artifacts</td>
                <td className="py-4 px-5"><span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-xs font-medium">High</span></td>
                <td className="py-4 px-5"><span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-medium">Awaiting Review</span></td>
              </tr>
            </PremiumTable>

            <div className="bg-transparent border-t border-slate-900 pt-8 mt-8">
              <h3 className="text-xl font-semibold mb-6">Recent Evidence & Collaboration Activity</h3>
              <CollaborationTimeline events={mockTimeline} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Organizational Standing</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-slate-500 mb-1">Clearance Level</dt>
                  <dd className="font-mono text-amber-400">L4 - Executive</dd>
                </div>
                <div>
                  <dt className="text-slate-500 mb-1">Total Evidence Generated</dt>
                  <dd className="text-slate-200 font-medium text-lg">1,248</dd>
                </div>
                <div>
                  <dt className="text-slate-500 mb-1">Active Projects</dt>
                  <dd className="text-slate-200 font-medium">4</dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-medium text-slate-200">Zero-Downtime Migration</div>
                    <div className="text-xs text-slate-500">Architected seamless failover</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
