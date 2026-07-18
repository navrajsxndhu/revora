import { NextResponse } from "next/server";
import { IdentityLedger } from "@/lib/identity/identity-ledger";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const history = await IdentityLedger.getHistory(workspaceId);
    return NextResponse.json({ history });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch ledger history" }, { status: 500 });
  }
}
