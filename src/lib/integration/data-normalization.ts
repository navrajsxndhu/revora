import { ConnectorEvent } from "./connectors/github";

export interface NormalizedIntegrationEvent {
  provider: string;
  eventType: string;
  externalId: string;
  payloadHash: string;
  validationState: "PENDING_CONSTITUTIONAL_VALIDATION" | "VALIDATED" | "REJECTED";
  timestamp: string;
}

export function normalizeIntegrationEvents(rawEvents: ConnectorEvent[]): NormalizedIntegrationEvent[] {
  // Transforms volatile external JSON schemas into deterministic Revora operational events
  return rawEvents.map(event => ({
    provider: event.provider,
    eventType: event.eventType,
    externalId: event.externalId,
    payloadHash: event.payloadHash,
    validationState: "PENDING_CONSTITUTIONAL_VALIDATION",
    timestamp: event.timestamp
  }));
}
