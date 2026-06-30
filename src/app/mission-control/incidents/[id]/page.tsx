import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { IncidentTimeline } from "@/components/mission-control/incident-timeline";
import { EscalationTimeline, EscalationEvent } from "@/components/mission-control/escalation-timeline";
import { TraceInspector } from "@/components/mission-control/trace-inspector";
import { DeploymentDiff } from "@/components/mission-control/deployment-diff";
import { IncidentActions } from "@/components/mission-control/incident-actions";
import { RunbookPanel } from "@/components/mission-control/runbook-panel";
import { PostMortemViewer } from "@/components/mission-control/post-mortem-viewer";
import { calculateBlastRadius } from "@/lib/incidents/blast-radius";
import { DependencyMap } from "@/components/mission-control/dependency-map";
import { RecoveryPanel } from "@/components/mission-control/recovery-panel";
import { RecoveryHistory } from "@/components/mission-control/recovery-history";
import { DiagnosticPanel } from "@/components/mission-control/diagnostic-panel";
import { aggregateDiagnostics } from "@/lib/incidents/diagnostics";
import { RUNBOOKS } from "@/lib/incidents/runbooks";
import { calculateRecoveryConfidence } from "@/lib/intelligence/recovery-confidence";
import { generateAdaptiveRunbook, AdaptiveRunbook } from "@/lib/incidents/adaptive-runbooks";
import { getHistoricalInsights } from "@/lib/benchmarks/operational-memory";
import { OperationalMemoryPanel } from "@/components/mission-control/operational-memory-panel";
import { CopilotPanel } from "@/components/mission-control/copilot-panel";
import { fetchReplayTimeline } from "@/lib/os/incident-replay";
import { ReplayController } from "@/components/mission-control/replay-controller";

export default async function IncidentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const incident = await prisma.incident.findUnique({
    where: { id: resolvedParams.id },
    include: { 
      notes: { orderBy: { createdAt: 'asc' } },
      childIncidents: { orderBy: { createdAt: 'desc' } }
    }
  });

  if (!incident) return notFound();

  const relatedIncidents = await prisma.incident.findMany({
    where: { 
      serviceAffected: incident.serviceAffected,
      rootCauseIncidentId: null
    },
    orderBy: { createdAt: 'desc' }
  });

  const blastRadius = calculateBlastRadius(incident, relatedIncidents);
  const diagnostics = await aggregateDiagnostics(incident);
  const historicalInsights = await getHistoricalInsights(incident);

  let confidenceContext = null;
  let adaptiveRunbooks: Record<string, AdaptiveRunbook> = {};

  if (incident.serviceAffected) {
    confidenceContext = await calculateRecoveryConfidence(incident.serviceAffected);
    
    // Adapt static runbooks into adaptive runbooks
    for (const key of Object.keys(RUNBOOKS)) {
      adaptiveRunbooks[key] = generateAdaptiveRunbook(
        incident,
        RUNBOOKS[key],
        blastRadius.downstreamIncidents,
        confidenceContext
      );
    }
  }

  const getSeverityColor = (sev: string) => {
    switch (sev) {
      case 'CRITICAL': return 'bg-red-950 text-red-500 border-red-900';
      case 'HIGH': return 'bg-orange-950 text-orange-500 border-orange-900';
      case 'MEDIUM': return 'bg-amber-950 text-amber-500 border-amber-900';
      default: return 'bg-blue-950 text-blue-500 border-blue-900';
    }
  };

  const completedSteps = JSON.parse(incident.completedRunbookSteps || "[]");

  const mockEscalationEvents: EscalationEvent[] = [
    { id: '1', type: 'ROUTED', message: 'Incident routed to Slack channel #ops-alerts', timestamp: incident.createdAt },
    { id: '2', type: 'STATE_CHANGE', message: `State changed to ${incident.state}`, timestamp: new Date(incident.createdAt.getTime() + 60000) }
  ];
  if (incident.incidentCommander) {
    mockEscalationEvents.push({ id: '3', type: 'OWNERSHIP_CLAIM', message: 'Incident Commander assigned', timestamp: new Date(incident.createdAt.getTime() + 120000), actor: incident.incidentCommander });
  }

  const replayEvents = await fetchReplayTimeline(incident.id);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className={`px-2 py-1 text-xs font-bold rounded border ${getSeverityColor(incident.severity)}`}>
                {incident.severity}
              </span>
              <span className="text-slate-400 text-sm">ID: {incident.id}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-100">{incident.title}</h1>
            <p className="text-slate-400 mt-1">{incident.description}</p>
          </div>
          <IncidentActions 
            incidentId={incident.id} 
            currentState={incident.state} 
            assignedTo={incident.assignedTo} 
          />
        </header>

        {incident.aiSummary && (
          <div className="mb-8">
            <CopilotPanel summary={incident.aiSummary} title="AI Incident Summary" icon="✨" />
          </div>
        )}

        <DiagnosticPanel diagnostics={diagnostics} />

        {incident.groupedCount > 0 && (
          <div className="bg-blue-950/20 border border-blue-900/50 p-4 rounded-lg mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-900/30 rounded-full">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-sm">Deployment Clustering</h3>
                <p className="text-slate-300 text-xs mt-0.5">This incident represents {incident.groupedCount + 1} identical failures from the same deployment.</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-blue-900/50 text-blue-300 rounded">
              +{incident.groupedCount} Suppressed
            </span>
          </div>
        )}

        {incident.isSymptom && incident.probableRootService && (
          <div className="bg-amber-950/30 border border-amber-900/50 p-4 rounded-lg mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <div>
                <h3 className="text-amber-400 font-semibold text-sm">Downstream Symptom</h3>
                <p className="text-slate-300 text-xs mt-0.5">This failure was triggered by an upstream outage in <strong>{incident.probableRootService}</strong>.</p>
              </div>
            </div>
            {incident.rootCauseIncidentId && (
              <a href={`/mission-control/incidents/${incident.rootCauseIncidentId}`} className="text-xs font-semibold px-3 py-1.5 bg-amber-900/50 hover:bg-amber-800 text-amber-200 rounded transition-colors">
                View Root Cause
              </a>
            )}
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <ReplayController events={replayEvents} />
            
            {incident.resolutionNotes && (
              <section>
                <PostMortemViewer 
                  incidentId={incident.id} 
                  resolutionNotes={incident.resolutionNotes} 
                  createdAt={incident.createdAt} 
                  resolvedAt={incident.resolvedAt} 
                />
              </section>
            )}
            <section>
              <h2 className="text-lg font-semibold mb-4 text-slate-200">Decision Assistant</h2>
              <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-lg">
                <p className="text-emerald-400 font-medium mb-1">Recommendation:</p>
                <p className="text-slate-300 text-sm mb-4">{incident.recommendedAction}</p>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
                  <p className="text-slate-400 text-xs"><span className="text-slate-300 font-medium">Reasoning:</span> Incident occurred {incident.recurringCount} times. Affected service: {incident.serviceAffected}. Root cause: {incident.rootCauseSummary}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 text-slate-200">Deployment Diff</h2>
              <DeploymentDiff diffJson={incident.deploymentDiff} />
            </section>
            
            <section>
              <h2 className="text-lg font-semibold mb-4 text-slate-200">Operator Notes</h2>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-4">
                {incident.notes.map((note) => (
                  <div key={note.id} className="pb-4 border-b border-slate-800 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-slate-300 text-sm">{note.authorId}</span>
                      <span className="text-xs text-slate-500">{note.createdAt.toLocaleString()}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{note.message}</p>
                  </div>
                ))}
                {incident.notes.length === 0 && <p className="text-slate-500 text-sm italic">No operator notes yet.</p>}
                
                <div className="pt-2">
                  <textarea placeholder="Add an operational note..." className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-sm text-slate-300 focus:outline-none focus:border-slate-600 resize-none h-20"></textarea>
                  <button className="mt-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded transition-colors w-full">Add Note</button>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
              <h3 className="text-slate-300 font-semibold text-sm mb-4">Incident Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-slate-500">State</dt>
                  <dd className="text-slate-200">{incident.state}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Service Affected</dt>
                  <dd className="text-slate-200">{incident.serviceAffected || "Unknown"}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Correlation Hash</dt>
                  <dd className="text-slate-200 font-mono text-xs">{incident.correlationId || "N/A"}</dd>
                </div>
              </dl>
            </div>

            {(!incident.isSymptom && incident.serviceAffected) && (
              <>
                <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
                  <h3 className="text-slate-300 font-semibold text-sm mb-4">Blast Radius</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-slate-200">{blastRadius.impactedServices}</div>
                      <div className="text-xs text-slate-500">Impacted Services</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-200">{blastRadius.downstreamIncidents}</div>
                      <div className="text-xs text-slate-500">Downstream Alerts</div>
                    </div>
                  </div>
                </div>
                <DependencyMap rootService={incident.serviceAffected} />
                
                {incident.state === "RESOLVED" && blastRadius.downstreamIncidents > 0 && (
                  <RecoveryPanel 
                    incidentId={incident.id} 
                    incidentState={incident.state} 
                    recoveryStatus={incident.recoveryStatus} 
                    symptomServices={incident.childIncidents.map(s => s.serviceAffected).filter((s): s is string => s !== null)} 
                  />
                )}
              </>
            )}

            <section className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
               <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Operational Context</h2>
               <div className="space-y-4 text-sm">
                 <div>
                   <span className="text-slate-500 block mb-1">Incident Commander</span>
                   <span className="text-slate-200 font-medium">{incident.incidentCommander || 'Unassigned'}</span>
                 </div>
                 <div>
                   <span className="text-slate-500 block mb-1">Assigned Operator</span>
                   <span className="text-slate-200 font-medium">{incident.assignedTo || 'Unassigned'}</span>
                 </div>
                 <div>
                   <span className="text-slate-500 block mb-1">Severity</span>
                   <span className="text-slate-200 font-medium">{incident.severity}</span>
                 </div>
                 {relatedIncidents.length > 0 && (
                   <div className="pt-4 border-t border-slate-800">
                     <span className="text-slate-500 block mb-2">Recent Failures ({incident.serviceAffected})</span>
                     <ul className="space-y-2">
                       {relatedIncidents.map(rel => (
                         <li key={rel.id} className="text-slate-300 hover:text-white transition-colors cursor-pointer truncate">
                           • {rel.title} <span className="text-slate-600 ml-2">{rel.createdAt.toLocaleDateString()}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
            </section>
            
            {incident.serviceAffected && confidenceContext && (
              <RecoveryHistory service={incident.serviceAffected} confidenceContext={confidenceContext} />
            )}

            <section className="mt-6">
              <RunbookPanel 
                incidentId={incident.id} 
                currentState={incident.state} 
                activeRunbookId={incident.activeRunbookId} 
                completedSteps={completedSteps} 
                availableRunbooks={Object.keys(adaptiveRunbooks).length > 0 ? adaptiveRunbooks : (RUNBOOKS as any)} 
              />
            </section>

            <section>
              <OperationalMemoryPanel insights={historicalInsights} />
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 text-slate-200">Escalation & Communication</h2>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <EscalationTimeline events={mockEscalationEvents} />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 text-slate-200">Execution Timeline</h2>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <IncidentTimeline events={[]} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
