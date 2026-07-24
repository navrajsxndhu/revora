import { prisma } from '@/lib/prisma';
import { Prisma, Organization } from '@prisma/client';

export class OrganizationRepository {
  static async findById(id: string): Promise<Organization | null> {
    return prisma.organization.findUnique({ where: { id } });
  }

  static async findMany(): Promise<Organization[]> {
    return prisma.organization.findMany();
  }

  static async create(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    return prisma.organization.create({ data });
  }

  static async update(id: string, data: Prisma.OrganizationUpdateInput): Promise<Organization> {
    return prisma.organization.update({
      where: { id },
      data
    });
  }

  static async delete(id: string): Promise<Organization> {
    return prisma.organization.delete({ where: { id } });
  }
}
