import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// export const config = { 
//   matcher: '/about/:path*',
// }