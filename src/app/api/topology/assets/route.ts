import { NextResponse } from "next/server";
import { AssetEngine } from "@/lib/topology/asset-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const assets = await AssetEngine.getAssets(workspaceId);
    return NextResponse.json({ assets });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch assets" }, { status: 500 });
  }
}
