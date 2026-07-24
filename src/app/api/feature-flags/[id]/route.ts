import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { FeatureFlagService } from '@/services/feature-flag-service';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await req.json();
    const { id } = await params;
    
    // In a real app we need to ensure the user has access to the workspace this flag belongs to
    // For now, we pass a dummy workspace ID or require it in the payload. We'll extract it from the payload if it exists, or assume the user's primary workspace.
    const workspaceId = payload.workspaceId || 'current-workspace';

    const flag = await FeatureFlagService.updateFlag(id, workspaceId, payload, session.user.id, session.user.role);
    
    return NextResponse.json(flag);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
