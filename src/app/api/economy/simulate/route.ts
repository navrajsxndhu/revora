import { NextResponse } from 'next/server';
import { simulateEconomy } from '@/lib/economy/economy-simulator';

export async function POST() {
  try {
    const { workspaceId, service, scenario } = await req.json();

    if (!workspaceId || !service || !scenario) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await simulateEconomy(workspaceId, service, scenario);
    
    if (!result) {
      return NextResponse.json({ error: 'Service budget not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: result,
      metadata: {
        reasoning: `Deterministic simulation based on scenario ${scenario} applied to historical burn rate.`
      }
    });
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
