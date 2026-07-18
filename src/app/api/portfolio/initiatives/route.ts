import { NextResponse } from "next/server";
import { InitiativeEngine } from "@/lib/portfolio/initiative-engine";

export async function GET() {
  const initiatives = await InitiativeEngine.getInitiatives("ws-1");
  return NextResponse.json({ success: true, initiatives });
}
