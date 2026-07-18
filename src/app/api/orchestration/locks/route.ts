import { NextResponse } from "next/server";
import { LockEngine } from "@/lib/orchestration/lock-engine";

export async function GET() {
  const locks = await LockEngine.getLocks("ws-1");
  return NextResponse.json({ success: true, locks });
}
