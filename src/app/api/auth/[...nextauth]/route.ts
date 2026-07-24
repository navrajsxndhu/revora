import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            memberships: {
              include: {
                workspace: true
              }
            }
          }
        });

        if (!user) {
          // Setup a default enterprise organization and workspace for testing
          const org = await prisma.organization.create({ data: { name: "Revora Enterprise" }});
          const workspace = await prisma.workspace.create({ data: { name: "Default Workspace", organizationId: org.id }});
          
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              password: "hashed_password_placeholder",
              memberships: {
                create: {
                  workspaceId: workspace.id,
                  role: "OWNER"
                }
              }
            },
            include: {
              memberships: {
                include: { workspace: true }
              }
            }
          });
        }

        const membership = user.memberships[0];

        // Audit the login event
        if (membership?.workspaceId) {
          try {
             const { recordAuditEvent } = await import("@/audit/audit-service");
             await recordAuditEvent({
               workspaceId: membership.workspaceId,
               actor: user.id,
               eventType: "LOGIN_SUCCESS",
               message: "User successfully authenticated."
             });
          } catch (e) {
             console.error("Failed to audit login", e);
          }
        }

        return { 
          id: user.id, 
          email: user.email,
          role: membership?.role,
          workspaceId: membership?.workspaceId,
          organizationId: membership?.workspace?.organizationId
        };
      }
    })
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.workspaceId = user.workspaceId;
        token.organizationId = user.organizationId;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.workspaceId = token.workspaceId;
        session.user.organizationId = token.organizationId;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
