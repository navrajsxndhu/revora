import { OrganizationRepository } from '@/repositories/organization-repository';
import { CreateOrganizationPayload, CreateOrganizationSchema, UpdateOrganizationPayload, UpdateOrganizationSchema } from '@/validators/organization.schema';
import { recordAuditEvent } from '@/audit/audit-service';
import { Organization } from '@prisma/client';
import { can } from '@/permissions/engine';

export class OrganizationService {
  static async getOrganization(id: string): Promise<Organization | null> {
    return OrganizationRepository.findById(id);
  }

  static async createOrganization(payload: CreateOrganizationPayload, actorId: string): Promise<Organization> {
    const data = CreateOrganizationSchema.parse(payload);
    
    const org = await OrganizationRepository.create({
      name: data.name
    });

    await recordAuditEvent({
      workspaceId: 'GLOBAL', 
      actor: actorId,
      eventType: 'ORGANIZATION_CREATED',
      message: `Created Organization: ${org.name}`
    });

    return org;
  }

  static async updateOrganization(id: string, payload: UpdateOrganizationPayload, actorId: string, actorRole: string): Promise<Organization> {
    if (!can({ role: actorRole } as any, 'ORGANIZATION', 'UPDATE')) {
      throw new Error("Unauthorized to update organization");
    }

    const data = UpdateOrganizationSchema.parse(payload);
    const org = await OrganizationRepository.update(id, data);
    
    await recordAuditEvent({
      workspaceId: 'GLOBAL',
      actor: actorId,
      eventType: 'ORGANIZATION_UPDATED',
      message: `Updated Organization: ${id}`
    });

    return org;
  }
}
