import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { workspaceId, simulatedEntropy } = await req.json();

    if (!workspaceId || simulatedEntropy === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let civilizationIndex = 100 - (simulatedEntropy * 0.75);
    civilizationIndex = Math.max(0, civilizationIndex);

    let continuityClass = 'EMERGING';
    let survivabilityHorizon = '< 1 Year';

    if (civilizationIndex > 90) {
      continuityClass = 'CIVILIZATIONAL';
      survivabilityHorizon = '> 10 Years';
    } else if (civilizationIndex > 75) {
      continuityClass = 'ENDURING';
      survivabilityHorizon = '5 - 10 Years';
    } else if (civilizationIndex > 50) {
      continuityClass = 'RESILIENT';
      survivabilityHorizon = '1 - 5 Years';
    } else if (civilizationIndex > 30) {
      continuityClass = 'STABILIZED';
      survivabilityHorizon = '< 1 Year';
    } else {
      continuityClass = 'EMERGING';
      survivabilityHorizon = '< 3 Months';
    }

    return NextResponse.json({
      success: true,
      data: {
        civilizationIndex,
        continuityClass,
        survivabilityHorizon
      },
      metadata: {
        reasoning: `Deterministic projection based on simulated entropy score of ${simulatedEntropy}.`
      }
    });
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
