import { NextResponse } from "next/server";
import { DependencyEngine } from "@/lib/orchestration/dependency-engine";

export async function GET() {
  const dependencies = await DependencyEngine.getDependencies("ws-1");
  return NextResponse.json({ success: true, dependencies });
}
