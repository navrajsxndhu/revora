import { NextResponse } from "next/server";
import { evaluateLoadMigration } from "@/lib/nervous-system/load-migration";

export async function POST(req: Request) {
  try {
    const { workspaceId, serviceName, originRegion } = await req.json();
    const migration = await evaluateLoadMigration(workspaceId, serviceName, originRegion);
    return NextResponse.json({ success: true, migration });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
