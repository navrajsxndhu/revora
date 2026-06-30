import { NextResponse } from 'next/server';
import { simulateAllianceStability } from '@/lib/statecraft/alliance-simulator';

export async function POST(req: Request) {
  try {
    const { federationId, shockScenario } = await req.json();

    if (!federationId || !shockScenario) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const simulation = await simulateAllianceStability(federationId, shockScenario);

    return NextResponse.json({
      success: true,
      data: simulation
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
