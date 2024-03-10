import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JwtTokehelper";

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/account")) {
    try {
      let token = await request.cookies.get("token");
      const value = token.value;
      console.log(value, "this is a token value");

      let payload = await VerifyToken(value);

      let requestHeader = new Headers(request.headers); // Corrected

      requestHeader.set("email", payload.email); // Corrected
      requestHeader.set("id", payload.id); // Corrected

      return NextResponse.next({
        request: { headers: requestHeader },
      });
    } catch (error) {
      console.log(error, 'error massrag');
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
