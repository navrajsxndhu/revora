import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { simulateAllianceStability } from '@/lib/statecraft/alliance-simulator';

export async function POST(req: NextRequest) {
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
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
