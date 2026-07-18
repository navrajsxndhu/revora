import { NextResponse } from "next/server";
import { ProgramEngine } from "@/lib/portfolio/program-engine";

export async function GET() {
  const programs = await ProgramEngine.getPrograms("ws-1");
  return NextResponse.json({ success: true, programs });
}
