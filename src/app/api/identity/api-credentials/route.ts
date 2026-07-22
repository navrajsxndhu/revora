import { NextResponse } from "next/server";
import { CredentialEngine } from "@/lib/identity/credential-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const credentials = await CredentialEngine.getCredentials(workspaceId);
    return NextResponse.json({ credentials });
  } catch {
    return NextResponse.json({ error: "Failed to fetch credentials" }, { status: 500 });
  }
}
