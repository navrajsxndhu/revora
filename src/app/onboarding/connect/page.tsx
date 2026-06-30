"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SetupChecklist } from "@/components/onboarding/setup-checklist";
import { ConnectGithub } from "@/components/onboarding/connect-github";
import { ConnectVercel } from "@/components/onboarding/connect-vercel";
import { DemoGeneratorButton } from "@/components/mission-control/demo-generator-button";

export default function OnboardingPage() {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const router = useRouter();

  const handleGithubConnected = () => {
    setCompletedSteps(prev => [...prev, "github"]);
  };

  const handleVercelConnected = () => {
    setCompletedSteps(prev => [...prev, "vercel"]);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans">
      <header className="px-8 py-6 border-b border-slate-900 bg-black/50">
        <div className="flex items-center space-x-3 max-w-6xl mx-auto">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
             <span className="text-white font-bold tracking-tighter">R</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Revora Workspace Setup</span>
        </div>
      </header>
      
      <main className="flex-1 max-w-6xl mx-auto w-full p-8 flex gap-12">
        <div className="w-1/3 pt-8">
           <SetupChecklist completedSteps={completedSteps} />
        </div>
        
        <div className="w-2/3 pt-8 space-y-6">
           <h2 className="text-2xl font-bold text-slate-100 mb-6">Connect Integrations</h2>
           
           <div className={`transition-opacity duration-500 ${completedSteps.includes('github') ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
             <ConnectGithub onComplete={handleGithubConnected} />
           </div>

           {completedSteps.includes('github') && (
             <div className={`transition-all duration-500 transform translate-y-0 opacity-100 ${completedSteps.includes('vercel') ? 'opacity-50 pointer-events-none' : ''}`}>
               <ConnectVercel onComplete={handleVercelConnected} />
             </div>
           )}

           {completedSteps.includes('vercel') && (
             <div className="transition-all duration-500 transform translate-y-0 opacity-100 bg-slate-900 border border-slate-800 p-8 rounded-lg text-center mt-8">
               <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-slate-200 mb-2">Workspace Ready</h3>
               <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm">
                 Integrations are successfully connected. To see Revora in action, let's simulate a realistic production incident.
               </p>
               <DemoGeneratorButton />
               <button 
                 onClick={() => router.push('/mission-control')} 
                 className="mt-4 block mx-auto text-slate-500 hover:text-slate-300 text-xs transition-colors"
               >
                 Skip demo and go to Mission Control
               </button>
             </div>
           )}
        </div>
      </main>
    </div>
  );
}
