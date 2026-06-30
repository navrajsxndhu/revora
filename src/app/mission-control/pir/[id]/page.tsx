import { prisma } from "@/lib/prisma";
import { PirViewer } from "@/components/mission-control/pir-viewer";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ExecutiveBrief } from "@/components/mission-control/executive-brief";

export default async function PirPage({ params }: { params: { id: string } }) {
  const pir = await prisma.postIncidentReview.findUnique({
    where: { id: params.id }
  });

  if (!pir) return notFound();

  async function approvePIR(formData: FormData) {
    "use server";
    await prisma.postIncidentReview.update({
      where: { id: pir!.id },
      data: {
        status: 'APPROVED',
        approvedAt: new Date(),
        approvedBy: 'System Operator', // Normally from NextAuth
      }
    });
    revalidatePath(`/mission-control/pir/${pir!.id}`);
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto">
        <ExecutiveBrief summary={pir.aiSummary} />
      </div>
      <PirViewer pir={pir as any} />
      
      {pir.status !== 'APPROVED' && (
        <div className="max-w-4xl mx-auto mt-6 flex justify-end gap-4">
          <a href={`/api/pir/${pir.id}/export`} target="_blank" className="px-4 py-2 bg-white border rounded text-sm text-slate-600 hover:bg-slate-50">
            Export Markdown
          </a>
          <form action={approvePIR}>
            <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700">
              Approve PIR
            </button>
          </form>
        </div>
      )}
      
      {pir.status === 'APPROVED' && (
        <div className="max-w-4xl mx-auto mt-6 flex justify-end gap-4">
          <a href={`/api/pir/${pir.id}/export`} target="_blank" className="px-4 py-2 bg-white border rounded text-sm text-slate-600 hover:bg-slate-50">
            Export Markdown
          </a>
        </div>
      )}
    </div>
  );
}
