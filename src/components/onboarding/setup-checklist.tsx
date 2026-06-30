"use client";

export function SetupChecklist({ completedSteps }: { completedSteps: string[] }) {
  const steps = [
    { id: "github", label: "Connect Source Control" },
    { id: "vercel", label: "Connect Deployment Pipeline" },
    { id: "demo", label: "Receive First Incident" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg w-full max-w-sm">
      <h3 className="text-slate-400 mb-4 text-xs uppercase font-semibold tracking-wider">Setup Progress</h3>
      <div className="space-y-4">
        {steps.map((step, idx) => {
          const isDone = completedSteps.includes(step.id);
          const isNext = !isDone && (idx === 0 || completedSteps.includes(steps[idx - 1].id));
          
          return (
            <div key={step.id} className={`flex items-center space-x-3 transition-opacity ${isDone ? 'opacity-50' : (isNext ? 'opacity-100' : 'opacity-30')}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${isDone ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : (isNext ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' : 'bg-slate-800 border-slate-700 text-slate-500')}`}>
                {isDone ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                ) : (
                  <span className="text-[10px] font-bold">{idx + 1}</span>
                )}
              </div>
              <span className={`text-sm ${isDone ? 'line-through text-slate-500' : 'text-slate-300 font-medium'}`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
