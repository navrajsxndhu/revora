import { NextResponse } from "next/server";
import { TwinStateEngine } from "@/lib/digital-twin/twin-state-engine";

export async function GET() {
  const states = await TwinStateEngine.getStates("ws-1");
  return NextResponse.json({ success: true, states });
}
