import { NextResponse } from "next/server";
import { ReservationEngine } from "@/lib/orchestration/reservation-engine";

export async function GET() {
  const reservations = await ReservationEngine.getReservations("ws-1");
  return NextResponse.json({ success: true, reservations });
}
