import { NextResponse } from 'next/server';
import { proposeAmendment } from '@/lib/constitution/amendment-engine';

export async function POST(req: Request) {
  try {
    const { workspaceId, title, proposedChange } = await req.json();

    if (!workspaceId || !title || !proposedChange) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const amendment = await proposeAmendment(workspaceId, title, proposedChange);
    
    return NextResponse.json({
      success: true,
      data: amendment,
      metadata: {
        reasoning: `Deterministic assessment completed. Policy simulation bounded by treasury reserves.`
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
