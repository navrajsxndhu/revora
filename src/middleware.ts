import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';
import { can } from "@/permissions/engine";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    
    // Convert token to UserContext shape for the permission engine
    const userContext = token ? {
      id: token.id as string,
      role: token.role as string,
      workspaceId: token.workspaceId as string,
      organizationId: token.organizationId as string,
    } : null;

    // Enterprise RBAC Logic using the new engine
    // If the user tries to access /settings but isn't authorized to MANAGE SETTINGS, deny access
    if (path.startsWith("/settings") && !can(userContext, "SETTINGS", "MANAGE")) {
      return NextResponse.rewrite(new URL("/mission-control?error=unauthorized", req.url));
    }
    
    // If the user isn't assigned to any workspace, they shouldn't access mission-control
    if (path.startsWith("/mission-control") && !token?.workspaceId) {
       return NextResponse.rewrite(new URL("/setup/workspace", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/mission-control/:path*', '/settings/:path*', '/observability/:path*', '/orchestration/:path*'],
};

