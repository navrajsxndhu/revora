import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Building, Briefcase, Mail, ShieldAlert } from "lucide-react";

export default function OrganizationalIntelligence() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/knowledge" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Knowledge Graph
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Organizational Topology</h1>
            <p className="text-slate-400">Human reporting structures mapped against enterprise telemetry and RBAC policies.</p>
          </div>
        </header>

        {/* Tree Map */}
        <div className="flex-1 min-h-0 bg-slate-900/30 border border-slate-800 rounded-2xl p-12 overflow-y-auto">
          
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8">
            
            {/* CEO Level */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-950 border-2 border-blue-500/50 p-4 rounded-xl flex items-center gap-4 w-72 shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-200">
                  EJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Elena Jimenez</h4>
                  <p className="text-xs text-blue-400">Chief Executive Officer</p>
                </div>
              </div>
              <div className="w-px h-8 bg-slate-700"></div>
              <div className="w-[600px] h-px bg-slate-700"></div>
            </div>

            {/* VP Level */}
            <div className="flex justify-between w-[600px]">
              
              {/* VP Engineering */}
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-slate-700"></div>
                <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl flex items-center gap-4 w-64 shadow-lg hover:border-slate-500 cursor-pointer transition-colors relative">
                  <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">1 Pending Approval</div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">Marcus Reed</h4>
                    <p className="text-xs text-slate-400">VP of Engineering</p>
                  </div>
                </div>
                
                <div className="w-px h-8 bg-slate-700"></div>
                
                {/* Team Node */}
                <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-lg flex items-center gap-3 w-56">
                  <Users className="w-4 h-4 text-slate-500" />
                  <div>
                    <p className="text-xs font-semibold text-slate-300">Platform Team</p>
                    <p className="text-[10px] text-slate-500">14 Members &bull; 3 Policies</p>
                  </div>
                </div>
              </div>

              {/* VP Security */}
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-slate-700"></div>
                <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl flex items-center gap-4 w-64 shadow-lg hover:border-slate-500 cursor-pointer transition-colors relative">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">Sarah Chen</h4>
                    <p className="text-xs text-slate-400">VP of Security</p>
                  </div>
                </div>
                
                <div className="w-px h-8 bg-slate-700"></div>
                
                {/* Team Node */}
                <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-lg flex items-center gap-3 w-56">
                  <ShieldAlert className="w-4 h-4 text-emerald-500" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-400">SecOps Team</p>
                    <p className="text-[10px] text-slate-500">6 Members &bull; 208 Policies</p>
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
