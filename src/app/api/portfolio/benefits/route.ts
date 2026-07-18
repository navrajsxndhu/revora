import { NextResponse } from "next/server";
import { BenefitEngine } from "@/lib/portfolio/benefit-engine";

export async function GET() {
  const benefits = await BenefitEngine.getBenefits("ws-1");
  return NextResponse.json({ success: true, benefits });
}
