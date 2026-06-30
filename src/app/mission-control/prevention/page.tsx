import { prisma } from "@/lib/prisma";
import { ReleaseRiskPanel } from "@/components/mission-control/release-risk-panel";
import { DeploymentTimeline } from "@/components/mission-control/deployment-timeline";

export default async function PreventionDashboard() {
  const deployments = await prisma.deployment.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: {
      incidents: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 border-b border-slate-900 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">Release Intelligence</h1>
          <p className="text-slate-400 mt-2 text-sm">Preventative deployment risk analysis and architectural drift detection.</p>
        </header>

        {deployments.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
             <svg className="w-12 h-12 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
             </svg>
             <h2 className="text-xl font-bold text-slate-300 mb-2">No Deployments Evaluated</h2>
             <p className="text-slate-500 text-sm max-w-md">Connect your CI/CD pipeline to evaluate deployment risk deterministically before releasing to production.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold text-slate-200">Recent Deployments</h2>
              {deployments.map(dep => (
                <div key={dep.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{dep.serviceName}</h3>
                    <p className="text-sm text-slate-400 font-mono">Environment: {dep.environment}</p>
                  </div>
                  
                  <ReleaseRiskPanel deployment={dep} />
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
               <h2 className="text-xl font-semibold text-slate-200">Lifecycle Traceability</h2>
               {deployments.map(dep => (
                 <div key={`timeline-${dep.id}`} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                   <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Trace: {dep.commitSha.substring(0,7)}</h3>
                   <DeploymentTimeline deployment={dep} incidents={dep.incidents} />
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
