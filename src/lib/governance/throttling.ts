export function calculateRolloutThrottle(restrictionLevel: string) {
  switch (restrictionLevel) {
    case 'SAFE':
      return 'FULL_ROLLOUT';
    case 'WATCHLIST':
      return 'CANARY_RECOMMENDED';
    case 'RESTRICTED':
      return 'CANARY_REQUIRED';
    case 'FROZEN':
      return 'BLOCKED';
    default:
      return 'FULL_ROLLOUT';
  }
}
