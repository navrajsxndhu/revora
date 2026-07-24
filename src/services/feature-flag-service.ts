import { FeatureFlagRepository } from "@/repositories/feature-flag-repository";
import { CreateFeatureFlagPayload, CreateFeatureFlagSchema, UpdateFeatureFlagPayload, UpdateFeatureFlagSchema } from "@/validators/feature-flag.schema";
import { recordAuditEvent } from "@/audit/audit-service";
import { can } from "@/permissions/engine";

export type FeatureFlagState = 'ENABLED' | 'DISABLED' | 'BETA' | 'PREVIEW' | 'INTERNAL';

export class FeatureFlagService {
  static async getFlagState(workspaceId: string, key: string, fallback: FeatureFlagState = 'DISABLED'): Promise<FeatureFlagState> {
    let flag = await FeatureFlagRepository.findByKeyAndWorkspace(key, workspaceId);

    if (!flag) {
      flag = await FeatureFlagRepository.create({
        workspaceId,
        key,
        name: key.replace(/_/g, ' '),
        state: fallback,
        description: `Auto-provisioned feature flag for ${key}`
      });
    }

    return flag.state as FeatureFlagState;
  }

  static async isEnabled(workspaceId: string, key: string): Promise<boolean> {
    const state = await this.getFlagState(workspaceId, key);
    return state === 'ENABLED' || state === 'BETA' || state === 'INTERNAL';
  }

  static async createFlag(payload: CreateFeatureFlagPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SETTINGS', 'UPDATE')) throw new Error("Unauthorized");
    const data = CreateFeatureFlagSchema.parse(payload);
    
    const flag = await FeatureFlagRepository.create({
      key: data.key,
      name: data.name,
      description: data.description,
      state: data.state,
      workspaceId: data.workspaceId
    });

    await recordAuditEvent({
      workspaceId: data.workspaceId,
      actor: actorId,
      eventType: 'FEATURE_FLAG_CREATED',
      message: `Created Feature Flag ${data.key}`
    });

    return flag;
  }

  static async updateFlag(id: string, workspaceId: string, payload: UpdateFeatureFlagPayload, actorId: string, actorRole: string) {
    if (!can({ role: actorRole } as any, 'SETTINGS', 'UPDATE')) throw new Error("Unauthorized");
    const data = UpdateFeatureFlagSchema.parse(payload);
    
    const flag = await FeatureFlagRepository.update(id, {
      ...data
    });

    await recordAuditEvent({
      workspaceId,
      actor: actorId,
      eventType: 'FEATURE_FLAG_TOGGLED',
      message: `Updated Feature Flag ${flag.key} to ${data.state}`
    });

    return flag;
  }

  static async getAllFlags(workspaceId: string) {
    return FeatureFlagRepository.findByWorkspaceId(workspaceId);
  }
}
