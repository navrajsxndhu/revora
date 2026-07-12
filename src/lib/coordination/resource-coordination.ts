export interface ResourceLockDef {
  resourceType: string;
  reservedCapacity: number;
  reservationWindow: string; // ISO 8601 string mapping the time lock
}

export function coordinateResources(): ResourceLockDef[] {
  // Deterministically locks limited resources to prevent parallel plan execution failures
  return [
    {
      resourceType: "MAINTENANCE_WINDOW",
      reservedCapacity: 100.0,
      reservationWindow: "SAT_0200_0400_UTC"
    },
    {
      resourceType: "TREASURY_DEPLOYMENT_BUDGET",
      reservedCapacity: 45000.0,
      reservationWindow: "Q3_ROLLOUT"
    },
    {
      resourceType: "REGIONAL_ROLLOUT_CAPACITY",
      reservedCapacity: 1.0,
      reservationWindow: "US_EAST_1_LOCK"
    }
  ];
}
