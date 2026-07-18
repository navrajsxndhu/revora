import { NextResponse } from "next/server";
import { LifecycleEngine } from "@/lib/data-governance/lifecycle-engine";

export async function GET() {
  const lifecycle = await LifecycleEngine.getLifecycles("ws-1");
  return NextResponse.json({ success: true, lifecycle });
}
