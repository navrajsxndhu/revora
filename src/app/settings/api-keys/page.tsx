import { prisma } from "@/lib/prisma";
import crypto from 'crypto';
import { revalidatePath } from "next/cache";

export default async function ApiKeysPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const apiKeys = await prisma.apiKey.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' }
  });

  async function generateKey(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const scopes = formData.getAll("scopes") as string[];
    
    // In a real app, generate cryptographically secure token, hash it for DB, show raw only once
    const rawKey = crypto.randomBytes(32).toString('hex');
    const prefix = "rva_" + rawKey.substring(0, 4);
    const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');

    await prisma.apiKey.create({
      data: {
        workspaceId: workspaceId!,
        name,
        prefix,
        keyHash,
        scopes: JSON.stringify(scopes)
      }
    });

    // We can't easily return the raw token back to the UI in a server action without a more complex state setup, 
    // but for demonstration purposes we will just revalidate.
    revalidatePath('/settings/api-keys');
  }

  async function revokeKey(formData: FormData) {
    "use server";
    const keyId = formData.get("keyId") as string;
    await prisma.apiKey.update({
      where: { id: keyId },
      data: { revoked: true }
    });
    revalidatePath('/settings/api-keys');
  }

  return (
    <div className="p-10 max-w-4xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">API Keys</h1>
      
      <div className="bg-white border rounded-lg p-6 mb-12 shadow-sm">
        <h2 className="text-lg font-medium mb-4">Generate New Key</h2>
        <form action={generateKey} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Key Name</label>
            <input type="text" name="name" required placeholder="e.g. CI/CD Pipeline" className="mt-1 w-full rounded border p-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Scopes</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="scopes" value="incident:read" /> incident:read</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="scopes" value="incident:write" /> incident:write</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="scopes" value="deployment:write" /> deployment:write</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="scopes" value="cli:read" /> cli:read</label>
            </div>
          </div>
          <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded text-sm hover:bg-slate-800">Generate Key</button>
        </form>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Active Keys</h2>
        <div className="bg-white border rounded-lg overflow-hidden">
          {apiKeys.length === 0 ? (
            <div className="p-6 text-slate-500 text-sm">No API keys generated.</div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Prefix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Used</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {apiKeys.map(key => (
                  <tr key={key.id} className={key.revoked ? 'opacity-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{key.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-slate-500">{key.prefix}••••••••</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">{key.createdAt.toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">{key.lastUsed ? key.lastUsed.toLocaleDateString() : 'Never'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {!key.revoked && (
                        <form action={revokeKey}>
                          <input type="hidden" name="keyId" value={key.id} />
                          <button type="submit" className="text-rose-600 hover:text-rose-800 font-medium">Revoke</button>
                        </form>
                      )}
                      {key.revoked && <span className="text-slate-400">Revoked</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
