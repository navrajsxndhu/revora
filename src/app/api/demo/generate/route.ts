import { NextResponse } from "next/server";
import { generateDemoEnvironment } from "@/lib/demo/demo-generator";

export async function POST() {
  try {
    const result = await generateDemoEnvironment();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to generate demo environment:", error);
    return NextResponse.json({ error: "Failed to generate demo environment" }, { status: 500 });
  }
}
