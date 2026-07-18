import { NextResponse } from "next/server";
import { PlaybookEngine } from "@/lib/knowledge/playbook-engine";

export async function GET() {
  const playbooks = await PlaybookEngine.getPlaybooks("ws-1");
  return NextResponse.json({ success: true, playbooks });
}
