import { NextRequest, NextResponse } from "next/server";
import { evaluateLoadMigration } from "@/lib/nervous-system/load-migration";

export async function POST(req: NextRequest) {
  try {
    const { workspaceId, serviceName, originRegion } = await req.json();
    const migration = await evaluateLoadMigration(workspaceId, serviceName, originRegion);
    return NextResponse.json({ success: true, migration });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
