import { NextResponse } from "next/server";
import { PortfolioValidationEngine } from "@/lib/portfolio/portfolio-validation-engine";

export async function GET() {
  const validation = await PortfolioValidationEngine.validate("ws-1", "all");
  return NextResponse.json({ success: true, validation });
}
