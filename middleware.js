import {NextResponse} from "next/server";
import {redirect} from "next/navigation";


export function middleware(request) {

  const path = request.nextUrl.pathname
  const isPrivate = path === '/profile'
  const token = request.cookies.get('session')?.value || ''

  if(isPrivate && !token) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // if(!isPublic && !token) {
  //   return NextResponse.redirect(new URL('/auth'), request.nextUrl)
  // }
  //
  // if (isPublic && token) {
  //   return NextResponse.json({message: "ok"})
  // }
}

export const config = {
  matcher: [
    '/profile',
    '/auth',
  ]
}