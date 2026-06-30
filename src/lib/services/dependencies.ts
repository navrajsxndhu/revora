export const SERVICE_DEPENDENCIES: Record<string, string[]> = {
  "api-gateway": ["database", "redis", "Database Layer"],
  "worker-service": ["redis", "database", "Database Layer", "Worker Queue"],
  "auth-service": ["database", "Database Layer"],
  "webhooks": ["api-gateway"],
  "Worker Queue": ["Database Layer", "redis"],
  "API Gateway": ["Database Layer", "redis"]
};
