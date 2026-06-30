import { redirect } from "next/navigation";

export default function SetupIntegrationsPage() {
  async function skipIntegrations() {
    "use server";
    redirect('/setup/finish');
  }

  return (
    <div>
      <h3 className="text-xl font-medium text-slate-900 mb-4">Connect Integrations</h3>
      <p className="text-sm text-slate-600 mb-6">
        Revora needs to connect to your operational tools to ingest incidents and coordinate recovery.
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="border p-4 rounded-md flex justify-between items-center">
          <div>
            <div className="font-medium text-sm text-slate-900">GitHub</div>
            <div className="text-xs text-slate-500">For PR gating and deployment tracking</div>
          </div>
          <button className="px-3 py-1 bg-slate-100 border text-xs font-medium rounded hover:bg-slate-200">Connect</button>
        </div>

        <div className="border p-4 rounded-md flex justify-between items-center">
          <div>
            <div className="font-medium text-sm text-slate-900">Slack</div>
            <div className="text-xs text-slate-500">For operational communication and alerts</div>
          </div>
          <button className="px-3 py-1 bg-slate-100 border text-xs font-medium rounded hover:bg-slate-200">Connect</button>
        </div>
      </div>

      <form action={skipIntegrations}>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 mb-2"
        >
          Continue
        </button>
        <div className="text-center">
          <button type="submit" className="text-xs text-slate-500 hover:text-slate-700">Skip for now</button>
        </div>
      </form>
    </div>
  );
}
