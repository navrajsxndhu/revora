import { NextResponse } from 'next/server';
import { simulatePlanetaryDisruption } from '@/lib/reality/planetary-simulator';

export async function POST(req: Request) {
  try {
    const { scenario } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: 'Missing scenario' }, { status: 400 });
    }

    const simulation = await simulatePlanetaryDisruption(scenario);

    return NextResponse.json({
      success: true,
      data: simulation
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
