import { NextResponse } from "next/server";
import { CheckpointEngine } from "@/lib/digital-twin/checkpoint-engine";

export async function GET() {
  const checkpoints = await CheckpointEngine.getCheckpoints("ws-1");
  return NextResponse.json({ success: true, checkpoints });
}
