import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { replayDeadLetter } from "@/lib/orchestration/dead-letter";
import { replayWebhook } from "@/lib/orchestration/replay-webhook";

export default async function OrchestrationDashboard() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const deadLetters = await prisma.deadLetterExecution.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  const webhookReplays = await prisma.webhookReplay.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  async function handleReplayDeadLetter(formData: FormData) {
    "use server";
    const dlqId = formData.get("id") as string;
    await replayDeadLetter(dlqId, "System User");
    revalidatePath("/mission-control/orchestration");
  }

  async function handleReplayWebhook(formData: FormData) {
    "use server";
    const whId = formData.get("id") as string;
    await replayWebhook(whId, "System User");
    revalidatePath("/mission-control/orchestration");
  }

  return (
    <div className="p-10 max-w-6xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Orchestration Health</h1>
      
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-medium mb-4 text-rose-700">Dead Letter Queue (Orchestration Failures)</h2>
          {deadLetters.length === 0 ? (
            <p className="text-sm text-slate-500">No dead letters. Orchestration is healthy.</p>
          ) : (
            <div className="space-y-4">
              {deadLetters.map(dl => (
                <div key={dl.id} className="border p-4 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-mono text-sm font-medium">{dl.recoveryActionId}</span>
                      <span className="text-xs text-slate-500 ml-2">Incident: {dl.incidentId.substring(0,8)}</span>
                    </div>
                    {dl.status === 'PENDING_REVIEW' ? (
                      <form action={handleReplayDeadLetter}>
                        <input type="hidden" name="id" value={dl.id} />
                        <button className="px-2 py-1 bg-slate-100 text-xs rounded hover:bg-slate-200 border">Replay</button>
                      </form>
                    ) : (
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Replayed</span>
                    )}
                  </div>
                  <div className="text-xs text-rose-600 bg-rose-50 p-2 rounded truncate">{dl.errorReason}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-medium mb-4">Webhook Replay Console</h2>
          {webhookReplays.length === 0 ? (
            <p className="text-sm text-slate-500">No failed webhooks.</p>
          ) : (
            <div className="space-y-4">
              {webhookReplays.map(wh => (
                <div key={wh.id} className="border p-4 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-sm capitalize">{wh.provider}</span>
                    {wh.status === 'FAILED' ? (
                      <form action={handleReplayWebhook}>
                        <input type="hidden" name="id" value={wh.id} />
                        <button className="px-2 py-1 bg-slate-100 text-xs rounded hover:bg-slate-200 border">Replay</button>
                      </form>
                    ) : (
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Replayed</span>
                    )}
                  </div>
                  <div className="text-xs text-rose-600 bg-rose-50 p-2 rounded truncate">{wh.errorMessage}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
