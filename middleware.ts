// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { User } from "./interfaces/user.interface";

export default withAuth(
  function middleware(req) {
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;

    const user = token?.user as User;

    if (
      (pathname.startsWith("/dashboard") ||
        pathname.startsWith("/discounts") ||
        pathname.startsWith("/packages") ||
        pathname.startsWith("/users")) &&
      user?.role === "CUSTOMER"
    ) {
      return NextResponse.redirect(origin);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(token);
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard",
    "/discounts",
    "/packages",
    "/users",
    "/discover/:path*/inquire",
    "/profile/:path*",
  ],
};
