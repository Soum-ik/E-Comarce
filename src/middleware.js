import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JwtTokehelper";

export async function middleware(req, response) {
  if (req.nextUrl.pathname.startsWith("/cart")) {
    try {
      let token = req.cookies.get("token");
      console.log(token, "middleware");
      let payload = await VerifyToken(token["value"]);
      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload["email"]);
      requestHeader.set("id", payload["id"]); // Assuming there's an 'id' field in the payload
      return NextResponse.next({
        request: { headers: requestHeader },
      });
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
