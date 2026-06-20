import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/', '/login', '/register', '/auth/callback'];
const PROTECTED_ROUTES = {
  CUSTOMER: ['/customer'],
  WORKER: ['/worker'],
  ADMIN: ['/admin'],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if route is public
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route));

  // Get auth token from cookie
  const token = request.cookies.get('sb-access-token')?.value;

  // If user is authenticated
  if (token) {
    // Prevent authenticated users from accessing auth pages
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.redirect(new URL('/complete-profile', request.url));
    }
  }

  // If user is not authenticated
  if (!token) {
    // Allow public routes
    if (isPublicRoute) {
      return NextResponse.next();
    }

    // Redirect to login for protected routes
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
