import { prisma } from "@/lib/prisma";

export default async function ReliabilityDashboard() {
  // Mock workspaceId for demonstration, in reality this comes from NextAuth session
  const mockWorkspaceId = await prisma.workspace.findFirst().then(w => w?.id);

  if (!mockWorkspaceId) {
    return <div className="p-10">No workspace found. Please initialize data.</div>;
  }

  // 1. Fetch Tenant-Scoped Metrics
  const incidents = await prisma.incident.findMany({
    where: { workspaceId: mockWorkspaceId },
    orderBy: { createdAt: 'desc' },
    take: 100
  });

  const deployments = await prisma.deployment.findMany({
    where: { workspaceId: mockWorkspaceId },
    orderBy: { createdAt: 'desc' },
    take: 100
  });

  // Calculate Metrics
  const totalIncidents = incidents.length;
  const rollbacks = deployments.filter(d => d.rollbackCount > 0).length;
  const rollbackRate = deployments.length > 0 ? (rollbacks / deployments.length) * 100 : 0;
  
  const recoverySuccesses = incidents.filter(i => i.resolvedSuccessfully).length;
  const recoverySuccessRate = incidents.length > 0 ? (recoverySuccesses / incidents.length) * 100 : 0;

  // Group by service to find dangerous ones
  const serviceStats = incidents.reduce((acc, inc) => {
    if (inc.serviceAffected) {
      acc[inc.serviceAffected] = (acc[inc.serviceAffected] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const dangerousServices = Object.entries(serviceStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="p-10 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Operational Reliability</h1>
      
      <div className="grid grid-cols-4 gap-6 mb-12">
        <div className="p-6 bg-slate-50 border rounded-lg shadow-sm">
          <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Total Incidents</div>
          <div className="text-4xl font-light">{totalIncidents}</div>
        </div>
        <div className="p-6 bg-slate-50 border rounded-lg shadow-sm">
          <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Rollback Rate</div>
          <div className="text-4xl font-light text-amber-600">{rollbackRate.toFixed(1)}%</div>
        </div>
        <div className="p-6 bg-slate-50 border rounded-lg shadow-sm">
          <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Recovery Success</div>
          <div className="text-4xl font-light text-emerald-600">{recoverySuccessRate.toFixed(1)}%</div>
        </div>
        <div className="p-6 bg-slate-900 border rounded-lg shadow-sm text-white">
          <div className="text-sm text-slate-400 uppercase tracking-wide mb-2">Automation Savings</div>
          <div className="text-4xl font-light">${(recoverySuccesses * 250).toLocaleString()}</div>
          <div className="text-xs text-slate-500 mt-2">Est. $250 / manual recovery avoided</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium mb-4">Dangerous Services</h2>
          <div className="bg-white border rounded-lg overflow-hidden">
            {dangerousServices.length > 0 ? dangerousServices.map(([service, count], idx) => (
              <div key={service} className={`p-4 flex justify-between ${idx !== dangerousServices.length - 1 ? 'border-b' : ''}`}>
                <span className="font-mono text-sm">{service}</span>
                <span className="text-rose-600 font-medium">{count} incidents</span>
              </div>
            )) : (
              <div className="p-4 text-slate-500 italic">No incidents recorded yet.</div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-4">Recent Blocked Deployments</h2>
          <div className="bg-white border rounded-lg overflow-hidden">
            {deployments.filter(d => d.riskLevel === 'CRITICAL').length > 0 ? (
              deployments.filter(d => d.riskLevel === 'CRITICAL').slice(0, 5).map((d, idx, arr) => (
                <div key={d.id} className={`p-4 ${idx !== arr.length - 1 ? 'border-b' : ''}`}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm font-semibold">{d.serviceName}</span>
                    <span className="text-xs text-slate-500">{new Date(d.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="text-sm text-rose-600 truncate">{d.riskReasoning}</div>
                </div>
              ))
            ) : (
               <div className="p-4 text-slate-500 italic">No blocked deployments.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
