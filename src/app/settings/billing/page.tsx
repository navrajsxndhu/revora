import { prisma } from "@/lib/prisma";
import { getWorkspacePlanContext } from "@/lib/billing/enforcement";
import { createCheckoutSession, createBillingPortalSession } from "@/lib/integrations/stripe";
import { redirect } from "next/navigation";

export default async function BillingPage() {
  const workspaceId = await prisma.workspace.findFirst().then(w => w?.id);
  if (!workspaceId) return <div>No workspace found.</div>;

  const ctx = await getWorkspacePlanContext(workspaceId);

  const usagePercent = Math.min(100, Math.round((ctx.usage.INCIDENT_COUNT / ctx.limits.incidentsPerMonth) * 100));
  const isNearingQuota = usagePercent >= 80;
  const isOverQuota = usagePercent >= 100;

  async function handleUpgrade() {
    "use server";
    const url = await createCheckoutSession(workspaceId!, process.env.STRIPE_PRO_PRICE_ID || 'price_mock_pro');
    redirect(url);
  }

  async function handleManageBilling() {
    "use server";
    if (!ctx.subscription?.stripeCustomerId) return;
    const url = await createBillingPortalSession(ctx.subscription.stripeCustomerId);
    redirect(url);
  }

  return (
    <div className="p-10 max-w-5xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Billing & Usage</h1>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="col-span-2 space-y-8">
          {/* Current Plan */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-medium text-slate-900">Current Plan: {ctx.planLevel}</h2>
                {ctx.subscription?.status === 'ACTIVE' && (
                  <p className="text-sm text-slate-500">Renews on {ctx.subscription.currentPeriodEnd?.toLocaleDateString()}</p>
                )}
              </div>
              {ctx.subscription?.stripeCustomerId ? (
                <form action={handleManageBilling}>
                  <button type="submit" className="text-sm border px-3 py-1.5 rounded hover:bg-slate-50">Manage Billing</button>
                </form>
              ) : (
                <form action={handleUpgrade}>
                  <button type="submit" className="text-sm bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-800">Upgrade to PRO</button>
                </form>
              )}
            </div>

            {/* Usage Meter */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Incident Volume</span>
                <span className="text-slate-500">{ctx.usage.INCIDENT_COUNT} / {ctx.limits.incidentsPerMonth === 999999 ? 'Unlimited' : ctx.limits.incidentsPerMonth}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-2.5 rounded-full ${isOverQuota ? 'bg-rose-500' : isNearingQuota ? 'bg-amber-500' : 'bg-slate-900'}`} 
                  style={{ width: `${usagePercent}%` }}
                ></div>
              </div>
              {isOverQuota && (
                <p className="text-xs text-rose-600 mt-2 mt-2">
                  You have exceeded your monthly incident quota. We will continue to ingest alerts, but orchestration is paused.
                </p>
              )}
              {!isOverQuota && isNearingQuota && (
                <p className="text-xs text-amber-600 mt-2 mt-2">
                  You are approaching your monthly incident quota.
                </p>
              )}
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4">Plan Capabilities</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className={ctx.limits.orchestrationEnabled ? "text-emerald-500" : "text-slate-300"}>✓</span>
                <span className={ctx.limits.orchestrationEnabled ? "text-slate-700" : "text-slate-400 line-through"}>Recovery Orchestration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className={ctx.limits.pirExportsEnabled ? "text-emerald-500" : "text-slate-300"}>✓</span>
                <span className={ctx.limits.pirExportsEnabled ? "text-slate-700" : "text-slate-400 line-through"}>PIR Generation & Export</span>
              </li>
              <li className="flex items-center gap-2">
                <span className={ctx.limits.slackEnabled ? "text-emerald-500" : "text-slate-300"}>✓</span>
                <span className={ctx.limits.slackEnabled ? "text-slate-700" : "text-slate-400 line-through"}>Slack Integrations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Upgrade Card */}
        {ctx.planLevel === 'FREE' && (
          <div className="col-span-1 bg-slate-900 text-white rounded-lg p-6 shadow-lg flex flex-col">
            <h3 className="text-xl font-medium mb-2">Revora PRO</h3>
            <p className="text-slate-400 text-sm mb-6">For engineering teams running mission-critical services.</p>
            <div className="text-3xl font-light mb-6">$99<span className="text-lg text-slate-400">/mo</span></div>
            
            <ul className="space-y-2 mb-auto text-sm text-slate-300">
              <li>• Up to 10,000 Incidents/mo</li>
              <li>• Up to 20 Members</li>
              <li>• Automated Orchestration</li>
              <li>• Slack & CI/CD Integrations</li>
            </ul>
            
            <form action={handleUpgrade} className="mt-8">
              <button className="w-full bg-white text-slate-900 py-2 rounded font-medium hover:bg-slate-100 transition">
                Upgrade Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
