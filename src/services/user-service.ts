import { UserRepository } from '@/repositories/user-repository';
import { UpdateUserPayload, UpdateUserSchema } from '@/validators/user.schema';
import { recordAuditEvent } from '@/audit/audit-service';
import { User } from '@prisma/client';

export class UserService {
  static async getUser(id: string): Promise<User | null> {
    return UserRepository.findById(id);
  }

  static async updateUser(id: string, payload: UpdateUserPayload, actorId: string): Promise<User> {
    const data = UpdateUserSchema.parse(payload);
    
    const user = await UserRepository.update(id, data);
    
    await recordAuditEvent({
      workspaceId: 'GLOBAL', // User updates might not be workspace specific
      actor: actorId,
      eventType: 'USER_UPDATED',
      message: `User ${id} updated profile`
    });

    return user;
  }
}
