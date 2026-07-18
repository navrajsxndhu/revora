import { NextResponse } from "next/server";
import { ExerciseEngine } from "@/lib/resilience/exercise-engine";

export async function GET() {
  const exercises = await ExerciseEngine.getExercises("ws-1");
  return NextResponse.json({ success: true, exercises });
}
