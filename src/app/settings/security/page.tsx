import { prisma } from "@/lib/prisma";

export default async function SecuritySettingsPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const sessions = await prisma.authSession.findMany({
    orderBy: { lastActiveAt: 'desc' },
    take: 10
  });

  return (
    <div className="p-10 max-w-5xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Security & Identity</h1>

      <div className="bg-white border rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-medium mb-2">Enterprise SSO (SAML/OIDC)</h2>
        <p className="text-sm text-slate-600 mb-6">Configure Single Sign-On via WorkOS to centrally manage access to your Revora workspace.</p>
        
        <div className="border border-slate-200 rounded p-4 bg-slate-50 flex justify-between items-center">
          <div>
            <div className="font-medium text-sm text-slate-900">WorkOS Connection</div>
            <div className="text-xs text-slate-500">Not configured</div>
          </div>
          <button className="px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded hover:bg-slate-800">Configure SSO</button>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Active Sessions</h2>
          <button className="text-rose-600 hover:text-rose-800 text-sm font-medium">Revoke All Sessions</button>
        </div>
        
        {sessions.length === 0 ? (
          <p className="text-sm text-slate-500">No active sessions.</p>
        ) : (
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fingerprint</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Expires At</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {sessions.map(s => (
                <tr key={s.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-slate-600">{s.fingerprint?.substring(0,12) || 'Unknown'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-500">{s.lastActiveAt.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-500">{s.expiresAt.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-rose-600 hover:text-rose-800 text-sm">Revoke</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
