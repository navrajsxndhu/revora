import { NextResponse } from "next/server";
import { CheckpointEngine } from "@/lib/orchestration/checkpoint-engine";

export async function GET() {
  const checkpoints = await CheckpointEngine.getCheckpoints("ws-1");
  return NextResponse.json({ success: true, checkpoints });
}
