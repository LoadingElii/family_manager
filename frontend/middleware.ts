import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'
 
// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard/(.*)']
const publicRoutes = ['/login', '/signup']
 
export default async function middleware(req: NextRequest) { 
  const authToken = req.cookies.get("auth_token")?.value;

  if(!authToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = await decrypt(authToken);
  
  if(!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  console.log("THIS IS THE USER", user)
  
   return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/dashboard/:path*',]
}
