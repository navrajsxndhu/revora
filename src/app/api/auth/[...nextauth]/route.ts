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
        
        // For Phase 59 prototype, auto-create the user if they don't exist
        // to make testing the auth flow seamless.
        let user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              password: "hashed_password_placeholder" 
            }
          });
        }

        return { id: user.id, email: user.email };
      }
    })
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
