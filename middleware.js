import {NextResponse} from "next/server";

export function middleware(request) {

  const path = request.nextUrl.pathname
  const isPrivate = path === '/profile'
  const token = request.cookies.get('session')?.value || ''

  if(isPrivate && !token) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: [
    '/profile',
    '/auth',
    '/',
    '/news',
    '/picsvids',
    '/music'
  ]
}