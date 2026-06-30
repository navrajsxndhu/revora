import { prisma } from "@/lib/prisma";

export default async function IntegrationsDiagnosticsPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const deliveries = await prisma.notificationDelivery.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  const webhooks = await prisma.webhookDelivery.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  return (
    <div className="p-10 max-w-5xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Integration Diagnostics</h1>
      
      <div className="mb-12">
        <h2 className="text-xl font-medium mb-4">Outbound Notifications (Slack / GitHub)</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
          {deliveries.length === 0 ? (
             <div className="p-6 text-slate-500 text-sm">No recent outbound notifications.</div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Retries</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {deliveries.map(d => (
                  <tr key={d.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{d.provider}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs ${
                        d.status === 'DELIVERED' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>{d.status}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">{d.retries}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">{new Date(d.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-4">Inbound Webhooks (GitHub / Vercel)</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
          {webhooks.length === 0 ? (
             <div className="p-6 text-slate-500 text-sm">No recent inbound webhooks.</div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Delivery ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Processed At</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {webhooks.map(w => (
                  <tr key={w.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{w.provider}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs ${
                        w.status === 'PROCESSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>{w.status}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-mono text-xs">{w.deliveryId.substring(0,8)}...</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">{w.processedAt ? new Date(w.processedAt).toLocaleString() : 'N/A'}</td>
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
