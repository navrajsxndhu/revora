import { prisma } from "@/lib/prisma";
import { CopilotPanel } from "@/components/mission-control/copilot-panel";
import { generateExecutiveBrief } from "@/lib/copilot/executive-summary";
import { generateTimelineSummary } from "@/lib/copilot/timeline-summary";
import { revalidatePath } from "next/cache";

export default async function CopilotDashboardPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const incidents = await prisma.incident.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  async function handleGenerateBrief(formData: FormData) {
    "use server";
    const id = formData.get("incidentId") as string;
    await generateExecutiveBrief(id);
    revalidatePath("/mission-control/copilot");
  }

  async function handleGenerateTimeline(formData: FormData) {
    "use server";
    const id = formData.get("incidentId") as string;
    const summary = await generateTimelineSummary(id);
    await prisma.incident.update({
      where: { id },
      data: { aiSummary: summary } // Storing it in the same field for demonstration
    });
    revalidatePath("/mission-control/copilot");
  }

  return (
    <div className="p-10 max-w-6xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Operational Intelligence Copilot</h1>
      <p className="text-sm text-slate-600 mb-8">
        Read-only, deterministic AI summaries grounded strictly in operational memory.
      </p>

      <div className="space-y-12">
        {incidents.map(inc => (
          <div key={inc.id} className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-medium">{inc.title}</h2>
                <div className="text-sm text-slate-500 font-mono mt-1">{inc.id} • {inc.serviceAffected}</div>
              </div>
              <div className="flex gap-2">
                <form action={handleGenerateBrief}>
                  <input type="hidden" name="incidentId" value={inc.id} />
                  <button className="px-3 py-1.5 bg-slate-900 text-white text-xs rounded hover:bg-slate-800">Generate Exec Brief</button>
                </form>
                <form action={handleGenerateTimeline}>
                  <input type="hidden" name="incidentId" value={inc.id} />
                  <button className="px-3 py-1.5 border text-slate-900 text-xs rounded hover:bg-slate-50">Compress Timeline</button>
                </form>
              </div>
            </div>

            {inc.aiSummary ? (
              <CopilotPanel summary={inc.aiSummary} title="AI Summary" icon="✨" />
            ) : (
              <div className="p-6 bg-slate-50 border border-dashed rounded text-center text-slate-500 text-sm">
                No AI summary generated yet.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
