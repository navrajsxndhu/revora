import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export default async function InviteAcceptPage({ params }: { params: { token: string } }) {
  const invite = await prisma.workspaceInvite.findUnique({
    where: { token: params.token },
    include: { workspace: true }
  });

  if (!invite) return notFound();

  const isExpired = new Date() > invite.expiresAt;
  const isAccepted = invite.acceptedAt !== null;

  async function acceptInvite(formData: FormData) {
    "use server";
    // In a real app, create the User via NextAuth or connect existing user
    // and then create WorkspaceMember
    await prisma.workspaceInvite.update({
      where: { id: invite!.id },
      data: { acceptedAt: new Date() }
    });
    
    // Fake user creation for demo
    let user = await prisma.user.findUnique({ where: { email: invite!.email } });
    if (!user) {
      user = await prisma.user.create({
        data: { email: invite!.email, password: 'hashed_password' }
      });
    }

    await prisma.workspaceMember.create({
      data: {
        workspaceId: invite!.workspaceId,
        userId: user.id,
        role: invite!.role
      }
    });

    redirect('/mission-control');
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-8 border rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-light text-slate-900 mb-2">You've been invited</h2>
        <p className="text-sm text-slate-600 mb-6">
          Join <strong>{invite.workspace.name}</strong> on Revora as a <strong>{invite.role}</strong>.
        </p>

        {isAccepted ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 rounded border border-emerald-200">
            This invite has already been accepted.
          </div>
        ) : isExpired ? (
          <div className="p-4 bg-rose-50 text-rose-800 rounded border border-rose-200">
            This invite has expired. Please request a new one.
          </div>
        ) : (
          <form action={acceptInvite}>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800">
              Accept Invitation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
