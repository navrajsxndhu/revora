"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, Building, Users, Server, ArrowRight, Check } from 'lucide-react';

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else router.push('/mission-control');
  };

  const steps = [
    { id: 1, title: 'Organization', icon: Building, desc: 'Establish your root enterprise identity.' },
    { id: 2, title: 'Workspace', icon: Server, desc: 'Configure your primary operating environment.' },
    { id: 3, title: 'Team Access', icon: Users, desc: 'Invite key personnel to the command center.' },
    { id: 4, title: 'Governance', icon: Shield, desc: 'Activate deterministic telemetry and policies.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="px-8 py-6 border-b border-slate-900 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">Revora</div>
        <button onClick={() => router.push('/mission-control')} className="text-sm text-slate-500 hover:text-white transition-colors">Skip for now</button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-4xl flex gap-12">
          {/* Sidebar Timeline */}
          <div className="w-64 shrink-0">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">Setup Progress</h2>
            <div className="space-y-6">
              {steps.map((s) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isPast = step > s.id;
                return (
                  <div key={s.id} className={`flex items-start gap-4 ${isActive ? 'opacity-100' : 'opacity-40'} transition-opacity`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 ${isPast ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : isActive ? 'bg-blue-500 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
                      {isPast ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className={`font-medium ${isActive ? 'text-white' : 'text-slate-300'}`}>{s.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{s.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
              <div className="h-full bg-blue-500 transition-all duration-500 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
            </div>
            
            <div className="min-h-[300px]">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h1 className="text-3xl font-bold mb-2">Create Organization</h1>
                  <p className="text-slate-400 mb-8">The top-level container for all enterprise resources.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Organization Name</label>
                      <input type="text" placeholder="e.g. Acme Corporation" className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Primary Domain</label>
                      <input type="text" placeholder="e.g. acme.com" className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h1 className="text-3xl font-bold mb-2">Initialize Workspace</h1>
                  <p className="text-slate-400 mb-8">Workspaces isolate configurations, teams, and runtime ledgers.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Workspace Name</label>
                      <input type="text" defaultValue="Production HQ" className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all" />
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h1 className="text-3xl font-bold mb-2">Invite Key Personnel</h1>
                  <p className="text-slate-400 mb-8">Establish your initial command center team.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Email Addresses (comma separated)</label>
                      <textarea rows={3} placeholder="admin@acme.com, security@acme.com" className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"></textarea>
                    </div>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30">
                      <Shield className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold mb-2 text-center">Activate Governance</h1>
                  <p className="text-slate-400 mb-8 text-center max-w-sm mx-auto">By proceeding, you activate Revora's deterministic constitutional engine for this workspace.</p>
                  
                  <div className="bg-slate-950 border border-slate-800 rounded p-4 text-xs font-mono text-slate-400 space-y-2 max-w-sm mx-auto">
                    <div className="flex justify-between"><span>Status:</span> <span className="text-emerald-400">READY</span></div>
                    <div className="flex justify-between"><span>Evidence Ledger:</span> <span className="text-blue-400">IMMUTABLE</span></div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button onClick={handleNext} className="flex items-center gap-2 bg-white hover:bg-slate-200 text-black px-6 py-2.5 rounded font-medium transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {step === 4 ? 'Initialize Mission Control' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
