import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { IntegrationHealth } from "@/components/mission-control/integration-health";
import { DemoGeneratorButton } from "@/components/mission-control/demo-generator-button";
import { sortIncidents } from "@/lib/intelligence/prioritization";

export default async function MissionControlPage() {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50 // Limit to recent for calm UX
  });

  const sortedIncidents = sortIncidents(incidents);

  const getSeverityBadge = (sev: string) => {
    switch (sev) {
      case 'CRITICAL': return 'bg-red-950 text-red-500 border-red-900';
      case 'HIGH': return 'bg-orange-950 text-orange-500 border-orange-900';
      case 'MEDIUM': return 'bg-amber-950 text-amber-500 border-amber-900';
      default: return 'bg-blue-950 text-blue-500 border-blue-900';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-100">Mission Control</h1>
            <p className="text-slate-400 mt-2 text-sm">Operational overview and active incidents.</p>
          </div>
          <IntegrationHealth />
        </header>

        {sortedIncidents.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-200 mb-2">No Active Incidents</h2>
            <p className="text-slate-400 mb-8 max-w-md">Your environment is currently stable. Revora is standing by to orchestrate recovery when the next failure occurs.</p>
            
            <div className="flex gap-4">
              <Link href="/onboarding/connect" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-200 font-medium text-sm transition-colors">
                Setup Integrations
              </Link>
              <DemoGeneratorButton />
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider text-xs">Status</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider text-xs">Incident</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider text-xs">Commander</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider text-xs">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {sortedIncidents.map(inc => (
                  <tr key={inc.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                         <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${getSeverityBadge(inc.severity)}`}>
                           {inc.severity}
                         </span>
                         <span className={`text-xs font-semibold ${inc.state === 'OPEN' ? 'text-rose-400' : inc.state === 'RESOLVED' ? 'text-slate-500' : 'text-blue-400'}`}>
                           {inc.state}
                         </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Link href={`/mission-control/incidents/${inc.id}`} className="block">
                        <span className={`font-medium ${inc.state === 'RESOLVED' ? 'text-slate-500' : 'text-slate-200'} hover:text-white`}>
                          {inc.title}
                          {inc.isSymptom && <span className="ml-2 text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Symptom</span>}
                        </span>
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-slate-400 text-xs">
                      {inc.incidentCommander ? (
                        <span className="flex items-center space-x-1.5 text-slate-300">
                          <div className="w-5 h-5 bg-purple-500/20 text-purple-400 rounded flex items-center justify-center text-[10px] font-bold">
                            {inc.incidentCommander.charAt(0).toUpperCase()}
                          </div>
                          <span>{inc.incidentCommander}</span>
                        </span>
                      ) : (
                        <span className="text-slate-600 italic">Unassigned</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-xs font-mono">
                      {inc.updatedAt.toLocaleTimeString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
