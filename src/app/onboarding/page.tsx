import { redirect } from "next/navigation";
import { getIntegrationHealth } from "@/lib/integrations/env";
import Link from "next/link";

export default function OnboardingPage() {
  const health = getIntegrationHealth();
  const allConnected = health.github.connected && health.vercel.connected && health.slack.connected;

  if (allConnected) {
    redirect("/mission-control");
  }

  const renderCheck = (name: string, connected: boolean) => (
    <div className={`p-4 rounded-lg border flex items-center justify-between ${connected ? 'bg-emerald-950/20 border-emerald-900/50' : 'bg-slate-900 border-slate-800'}`}>
      <span className="text-slate-200 font-medium">{name}</span>
      {connected ? (
        <span className="text-emerald-400 text-sm font-semibold">Connected</span>
      ) : (
        <span className="text-amber-400 text-sm font-semibold">Missing Token</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">Welcome to Revora</h1>
          <p className="text-slate-400 mt-2">Let's connect your operational systems to get started.</p>
        </div>

        <div className="space-y-3">
          {renderCheck("GitHub Integration", health.github.connected)}
          {renderCheck("Vercel Integration", health.vercel.connected)}
          {renderCheck("Slack Integration", health.slack.connected)}
        </div>

        <div className="bg-slate-900 p-4 rounded border border-slate-800 text-sm text-slate-400">
          <p>Please add your integration tokens to your <code className="text-slate-300">.env</code> file. Once all systems are connected, Mission Control will unlock.</p>
        </div>

        {allConnected && (
          <Link href="/mission-control" className="block w-full text-center py-3 bg-white text-black font-semibold rounded hover:bg-slate-200 transition-colors">
            Enter Mission Control
          </Link>
        )}
      </div>
    </div>
  );
}
