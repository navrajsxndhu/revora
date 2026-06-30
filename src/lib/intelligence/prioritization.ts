import { Incident } from "@prisma/client";

export function calculateIncidentPriority(incident: Incident): number {
  let score = 0;

  // 1. Root Cause Status
  if (!incident.isSymptom && !incident.rootCauseIncidentId) {
    score += 5000; // Root causes are top priority
  } else if (incident.isSymptom) {
    score -= 1000; // Symptoms drop down
  }

  // 2. Severity
  switch (incident.severity) {
    case "CRITICAL":
      score += 2000;
      break;
    case "HIGH":
      score += 1000;
      break;
    case "MEDIUM":
      score += 500;
      break;
    case "LOW":
      score += 100;
      break;
  }

  // 3. State
  if (incident.state === "OPEN") {
    score += 1000;
  } else if (incident.state === "ACKNOWLEDGED") {
    score += 500;
  } else if (incident.state === "RESOLVED") {
    score -= 10000; // Resolved drops to the bottom
  }

  // 4. Grouping / Blast Radius Indicator (using groupedCount roughly)
  if (incident.groupedCount > 0) {
    score += incident.groupedCount * 100; // More frequent = higher priority
  }

  // 5. Active Recovery
  if (incident.recoveryStatus === "IN_PROGRESS") {
    score += 800; // Actively being recovered should stay prominent
  }

  return score;
}

export function sortIncidents(incidents: Incident[]): Incident[] {
  return [...incidents].sort((a, b) => {
    return calculateIncidentPriority(b) - calculateIncidentPriority(a);
  });
}
