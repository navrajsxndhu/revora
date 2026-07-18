import { NextResponse } from "next/server";
import { IdentityProviderEngine } from "@/lib/identity/identity-provider-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const providers = await IdentityProviderEngine.getProviders(workspaceId);
    return NextResponse.json({ providers });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch providers" }, { status: 500 });
  }
}
