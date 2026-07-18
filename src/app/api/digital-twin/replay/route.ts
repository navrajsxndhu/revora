import { NextResponse } from "next/server";
import { ReplayEngine } from "@/lib/digital-twin/replay-engine";

export async function GET() {
  const replays = await ReplayEngine.getReplays("ws-1");
  return NextResponse.json({ success: true, replays });
}
