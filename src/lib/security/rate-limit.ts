import { prisma } from "../prisma";

// Mocking Redis for this prototype since we don't have a guaranteed redis setup running 
// in this environment, but in production we'd use a real Redis sliding window.
const mockRedisStore = new Map<string, { count: number; windowStart: number }>();

const WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS = 100;

export async function checkRateLimit(workspaceId: string, identifier: string, route: string): Promise<boolean> {
  const key = `${workspaceId}:${identifier}:${route}`;
  const now = Date.now();
  
  let record = mockRedisStore.get(key);
  
  if (!record || now - record.windowStart > WINDOW_MS) {
    record = { count: 1, windowStart: now };
    mockRedisStore.set(key, record);
    return true; // Allowed
  }
  
  record.count++;
  mockRedisStore.set(key, record);
  
  if (record.count > MAX_REQUESTS) {
    // Record the breach in the database for auditability
    // We do this asynchronously to not block the request completely if DB is slow
    prisma.rateLimitEvent.create({
      data: {
        workspaceId,
        route,
        identifier
      }
    }).catch(e => console.error("Failed to log rate limit event", e));
    
    return false; // Denied
  }
  
  return true; // Allowed
}
