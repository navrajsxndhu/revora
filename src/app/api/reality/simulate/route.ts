import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { simulatePlanetaryDisruption } from '@/lib/reality/planetary-simulator';

export async function POST(req: NextRequest) {
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
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
