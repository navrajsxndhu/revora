import { NextResponse } from "next/server";
import { DependencyEngine } from "@/lib/topology/dependency-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const dependencies = await DependencyEngine.getDependencies(workspaceId);
    return NextResponse.json({ dependencies });
  } catch {
    return NextResponse.json({ error: "Failed to fetch dependencies" }, { status: 500 });
  }
}
