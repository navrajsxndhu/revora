import { NextResponse } from "next/server";
import { SchemaRegistryEngine } from "@/lib/api-governance/schema-registry-engine";

export async function GET() {
  const schemas = await SchemaRegistryEngine.getSchemas("ws-1");
  return NextResponse.json({ success: true, schemas });
}
