import { ENV } from './env';

export async function triggerRollback(deploymentId: string) {
  if (!ENV.VERCEL_TOKEN || !ENV.VERCEL_PROJECT_ID) {
    console.warn(`[MOCK VERCEL] Would rollback to deployment ${deploymentId}`);
    return { id: "mock-rollback-id", url: "https://mock.vercel.app" };
  }

  try {
    const res = await fetch(`https://api.vercel.com/v13/deployments?projectId=${ENV.VERCEL_PROJECT_ID}`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${ENV.VERCEL_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        deploymentId // Vercel API accepts a target deploymentId to redeploy
      })
    });
    
    if (!res.ok) throw new Error(`Vercel API Error: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to trigger Vercel rollback:", err);
    throw err;
  }
}
