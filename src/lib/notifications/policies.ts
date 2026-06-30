import { Incident } from "@prisma/client";

export function shouldSuppressNotification(incident: Incident, recentNotificationsCount: number): { suppressed: boolean; reason?: string } {
  // Suppress downstream symptoms unless they are critical
  if (incident.isSymptom && incident.severity !== "CRITICAL") {
    return { suppressed: true, reason: "Symptom suppression active for non-critical alerts." };
  }

  // Suppress flapping/identical failures within a cooldown window (simulated by checking groupedCount vs recent notifications)
  if (incident.groupedCount > 0 && recentNotificationsCount > 0) {
    // If it grouped but we've already notified recently, suppress it
    return { suppressed: true, reason: "Identical failure occurred recently. Muting to prevent spam." };
  }

  // Suppress low severity if we are already actively recovering this service
  if (incident.severity === "LOW" && incident.recoveryStatus === "IN_PROGRESS") {
    return { suppressed: true, reason: "Service is already in active recovery. Suppressing low severity noise." };
  }

  return { suppressed: false };
}
