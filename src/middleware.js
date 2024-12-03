import { CheckMiddlewareOnDashboard, CheckMiddlewareForCustomer } from "./utility/MiddlewareHelper";
import { NextResponse } from "next/server";

export async function middleware(req) {
  try {
    const requestedRoute = req.nextUrl.pathname;

    if (requestedRoute.startsWith('/dashboard')) {
      return await CheckMiddlewareOnDashboard(req);
    } else if (requestedRoute.startsWith('/cart') || requestedRoute.startsWith('/checkout')) {
      return await CheckMiddlewareForCustomer(req);
    } else {
      return NextResponse.next(); // Continue to the next middleware or route handler if no match
    }
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.error(); // Return a 500 Internal Server Error response
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/cart/:path*", "/checkout/:path*"], // Match all subpaths of the specified routes
};
