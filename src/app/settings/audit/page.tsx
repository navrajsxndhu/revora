import { prisma } from "@/lib/prisma";

export default async function AuditLogPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const logs = await prisma.auditLog.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 50
  });

  return (
    <div className="p-10 max-w-5xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Workspace Audit Log</h1>
      
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        {logs.length === 0 ? (
           <div className="p-6 text-slate-500 text-sm">No audit logs recorded yet.</div>
        ) : (
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {logs.map(log => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-mono text-xs">{new Date(log.createdAt).toISOString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{log.actor || 'System'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-700">{log.eventType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs ${
                      log.status === 'SUCCESS' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>{log.status}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs truncate max-w-xs">{log.message || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
