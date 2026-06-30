import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect sensitive routes
  const protectedRoutes = ['/mission-control', '/settings'];
  const isProtected = protectedRoutes.some(route => path.startsWith(route));

  if (isProtected) {
    const token = request.cookies.get('revora_session');
    
    // We can't hit Prisma directly in Edge middleware currently, so we rely on 
    // the layout/page Server Components to do the hard database validation.
    // However, if there's no token at all, we can fast-fail here.
    if (!token && process.env.NODE_ENV !== 'development') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
