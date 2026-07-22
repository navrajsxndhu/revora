import { NextResponse } from 'next/server';
import { simulateTemporalDecay } from '@/lib/temporal/temporal-simulator';

export async function POST() {
  try {
    const { scenario } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: 'Missing scenario' }, { status: 400 });
    }

    const simulation = await simulateTemporalDecay(scenario);

    return NextResponse.json({
      success: true,
      data: simulation
    });
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
