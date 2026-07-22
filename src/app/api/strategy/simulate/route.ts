import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { simulateStrategy } from '@/lib/strategy/strategic-coordination-engine';

export async function POST(req: NextRequest) {
  try {
    const { workspaceId, scenario } = await req.json();

    if (!workspaceId || !scenario) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await simulateStrategy(workspaceId, scenario);
    
    if (!result) {
      return NextResponse.json({ error: 'Treasury snapshot not found. Cannot simulate.' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: result,
      metadata: {
        reasoning: `Deterministic simulation of ${scenario} against current organizational treasury burn rate.`
      }
    });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
