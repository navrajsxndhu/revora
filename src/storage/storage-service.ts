import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { recordAuditEvent } from '@/audit/audit-service';

export interface FileUploadRequest {
  workspaceId: string;
  userId: string;
  originalName: string;
  mimeType: string;
  buffer: Buffer;
}

/**
 * Enterprise Storage Service
 * Provides an abstraction layer for file management. Currently defaults to Local FS
 * but is structured to allow S3 swapping for production.
 */
export class StorageService {
  private static UPLOAD_DIR = path.join(process.cwd(), 'uploads');

  static async initialize() {
    if (!fs.existsSync(this.UPLOAD_DIR)) {
      fs.mkdirSync(this.UPLOAD_DIR, { recursive: true });
    }
  }

  /**
   * Uploads a file, securely stores it, and records the metadata in Prisma.
   */
  static async uploadFile(request: FileUploadRequest) {
    await this.initialize();

    // Generate secure randomized filename to prevent directory traversal
    const fileExt = path.extname(request.originalName);
    const secureFilename = `${crypto.randomUUID()}${fileExt}`;
    const destinationPath = path.join(this.UPLOAD_DIR, secureFilename);

    // Save to disk (In prod, this is S3.putObject)
    fs.writeFileSync(destinationPath, request.buffer);

    // Create database registry
    const fileRecord = await prisma.file.create({
      data: {
        workspaceId: request.workspaceId,
        uploadedBy: request.userId,
        originalName: request.originalName,
        filename: secureFilename,
        mimeType: request.mimeType,
        sizeBytes: request.buffer.length,
        url: `/api/files/${secureFilename}`,
        status: 'UPLOADED'
      }
    });

    await recordAuditEvent({
      workspaceId: request.workspaceId,
      actor: request.userId,
      eventType: 'WORKSPACE_CREATED', // Repurposing since FILE_UPLOAD isn't in Enum yet
      message: `Uploaded file ${request.originalName}`
    });

    return fileRecord;
  }

  /**
   * Generates a signed URL for secure file access.
   * Local implementation just returns the API route, but prepares the API shape for S3 Presigned URLs.
   */
  static async getSignedUrl(fileId: string, expiresInSeconds = 3600): Promise<string> {
    const file = await prisma.file.findUnique({ where: { id: fileId } });
    if (!file) throw new Error("File not found");

    // In a real S3 implementation, this would call s3.getSignedUrlPromise()
    // For local, we simulate a signed token
    const token = crypto.createHmac('sha256', process.env.NEXTAUTH_SECRET || 'fallback').update(file.id).digest('hex');
    
    return `${file.url}?token=${token}&expires=${Date.now() + (expiresInSeconds * 1000)}`;
  }
}
