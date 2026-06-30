import { prisma } from "@/lib/prisma";
import crypto from 'crypto';
import { revalidatePath } from "next/cache";

export default async function MembersPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const members = await prisma.workspaceMember.findMany({
    where: { workspaceId },
    include: { user: true },
    orderBy: { createdAt: 'asc' }
  });

  const invites = await prisma.workspaceInvite.findMany({
    where: { workspaceId, acceptedAt: null },
    orderBy: { createdAt: 'desc' }
  });

  async function inviteMember(formData: FormData) {
    "use server";
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    await prisma.workspaceInvite.create({
      data: {
        workspaceId: workspaceId!,
        email,
        role,
        token,
        expiresAt,
        invitedBy: 'Admin'
      }
    });

    revalidatePath('/settings/members');
  }

  return (
    <div className="p-10 max-w-5xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Workspace Members</h1>
      
      <div className="bg-white border rounded-lg p-6 mb-12 shadow-sm">
        <h2 className="text-lg font-medium mb-4">Invite Teammate</h2>
        <form action={inviteMember} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" name="email" required placeholder="alex@company.com" className="w-full rounded border p-2 text-sm" />
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <select name="role" className="w-full rounded border p-2 text-sm">
              <option value="VIEWER">Viewer</option>
              <option value="OPERATOR">Operator</option>
              <option value="OWNER">Owner</option>
            </select>
          </div>
          <button type="submit" className="bg-slate-900 text-white px-6 py-2 rounded text-sm hover:bg-slate-800 h-[38px]">Send Invite</button>
        </form>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-medium mb-4">Active Members</h2>
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Role</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {members.map(m => (
                  <tr key={m.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{m.user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">{m.role}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Pending Invites</h2>
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            {invites.length === 0 ? (
              <div className="p-6 text-slate-500 text-sm">No pending invites.</div>
            ) : (
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {invites.map(i => (
                    <tr key={i.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{i.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500 text-xs">{i.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date() > i.expiresAt ? (
                          <span className="text-rose-600 text-xs">Expired</span>
                        ) : (
                          <span className="text-amber-600 text-xs">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
