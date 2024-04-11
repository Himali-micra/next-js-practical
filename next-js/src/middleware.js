import { NextResponse } from "next/server";

const middleware = (request) => {
  if (request.nextUrl.pathname != "/login")
    return NextResponse.redirect(new URL("/login", request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about/aboutcollge:path*", "/study/:path*"],
};

export default middleware;






