export type Role = 
  | 'SYSTEM'
  | 'OWNER'
  | 'ORG_ADMIN'
  | 'PLATFORM_ADMIN'
  | 'SECURITY_ADMIN'
  | 'COMPLIANCE_ADMIN'
  | 'FINANCE_ADMIN'
  | 'HR_ADMIN'
  | 'MANAGER'
  | 'OPERATOR'
  | 'ANALYST'
  | 'AUDITOR'
  | 'VIEWER'
  | 'EXTERNAL_PARTNER'
  | 'SERVICE_ACCOUNT';

export type Action = 'CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'ARCHIVE' | 'RESTORE' | 'APPROVE' | 'EXECUTE' | 'MANAGE';
export type Resource = 'INCIDENT' | 'POLICY' | 'WORKFLOW' | 'USER' | 'ORGANIZATION' | 'WORKSPACE' | 'SETTINGS' | 'FEATURE_FLAG' | 'AUDIT_LOG' | 'ACTIVITIES' | 'APPROVALS' | 'TIMELINE' | 'QUEUE' | 'NOTIFICATIONS' | 'EXECUTIVE_METRIC' | 'HEALTH_SNAPSHOT' | 'SEARCH' | 'KNOWLEDGE' | 'OBSERVABILITY' | 'BUSINESS_INTELLIGENCE' | 'ORCHESTRATION' | 'DATA_FABRIC' | 'INTELLIGENCE_FABRIC' | 'SECURITY';

export interface UserContext {
  id: string;
  role: Role | string;
  workspaceId?: string;
  organizationId?: string;
}

const roleHierarchy: Record<Role, number> = {
  SYSTEM: 100,
  OWNER: 90,
  ORG_ADMIN: 80,
  PLATFORM_ADMIN: 70,
  SECURITY_ADMIN: 65,
  COMPLIANCE_ADMIN: 65,
  FINANCE_ADMIN: 60,
  HR_ADMIN: 60,
  MANAGER: 50,
  OPERATOR: 40,
  ANALYST: 30,
  AUDITOR: 20,
  VIEWER: 10,
  EXTERNAL_PARTNER: 5,
  SERVICE_ACCOUNT: 1,
};

// Define baseline permissions
const permissions: Record<Resource, Partial<Record<Action, Role[]>>> = {
  INCIDENT: {
    READ: ['VIEWER'],
    CREATE: ['OPERATOR'],
    UPDATE: ['OPERATOR'],
    DELETE: ['MANAGER'],
    APPROVE: ['MANAGER']
  },
  POLICY: {
    READ: ['VIEWER'],
    CREATE: ['COMPLIANCE_ADMIN'],
    UPDATE: ['COMPLIANCE_ADMIN'],
    DELETE: ['ORG_ADMIN'],
    APPROVE: ['ORG_ADMIN']
  },
  WORKFLOW: {
    READ: ['VIEWER'],
    CREATE: ['OPERATOR'],
    UPDATE: ['OPERATOR'],
    EXECUTE: ['OPERATOR'],
    DELETE: ['MANAGER']
  },
  USER: {
    READ: ['VIEWER'],
    CREATE: ['HR_ADMIN'],
    UPDATE: ['HR_ADMIN'],
    DELETE: ['ORG_ADMIN']
  },
  ORGANIZATION: {
    READ: ['VIEWER'],
    UPDATE: ['ORG_ADMIN'],
    MANAGE: ['OWNER']
  },
  WORKSPACE: {
    READ: ['VIEWER'],
    CREATE: ['ORG_ADMIN'],
    UPDATE: ['MANAGER'],
    DELETE: ['OWNER'],
    MANAGE: ['ORG_ADMIN']
  },
  SETTINGS: {
    READ: ['VIEWER'],
    UPDATE: ['ORG_ADMIN'],
    MANAGE: ['OWNER']
  },
  FEATURE_FLAG: {
    READ: ['VIEWER'],
    UPDATE: ['PLATFORM_ADMIN'],
    MANAGE: ['PLATFORM_ADMIN']
  },
  AUDIT_LOG: {
    READ: ['AUDITOR'], // Minimum role to read
    CREATE: ['SYSTEM'], // Only system should create audit logs normally
    // Immutable, so no UPDATE, DELETE, etc.
  },
  ACTIVITIES: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM']
  },
  APPROVALS: {
    READ: ['VIEWER'],
    CREATE: ['OPERATOR'],
    UPDATE: ['MANAGER']
  },
  TIMELINE: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM']
  },
  QUEUE: {
    READ: ['MANAGER'],
    EXECUTE: ['MANAGER']
  },
  NOTIFICATIONS: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['VIEWER']
  },
  EXECUTIVE_METRIC: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  HEALTH_SNAPSHOT: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM']
  },
  SEARCH: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  KNOWLEDGE: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  OBSERVABILITY: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  BUSINESS_INTELLIGENCE: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  ORCHESTRATION: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  DATA_FABRIC: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  INTELLIGENCE_FABRIC: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  },
  SECURITY: {
    READ: ['VIEWER'],
    CREATE: ['SYSTEM'],
    UPDATE: ['MANAGER']
  }
};

/**
 * Enterprise Permission Engine
 * 
 * Determines if a user can perform a specific action on a specific resource.
 * Supports RBAC with hierarchical role inheritance.
 */
export function can(user: UserContext | null, resource: Resource, action: Action): boolean {
  if (!user || !user.role) return false;

  const userRole = user.role as Role;
  const userLevel = roleHierarchy[userRole] || 0;

  // SYSTEM and OWNER can do anything
  if (userLevel >= roleHierarchy.OWNER) {
    return true;
  }

  const resourcePermissions = permissions[resource];
  if (!resourcePermissions) return false;

  const allowedRoles = resourcePermissions[action];
  if (!allowedRoles || allowedRoles.length === 0) return false;

  // Check if user's role level is >= the minimum required role level
  return allowedRoles.some(role => {
    const requiredLevel = roleHierarchy[role] || 100;
    return userLevel >= requiredLevel;
  });
}
