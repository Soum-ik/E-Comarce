import { NextResponse } from "next/server";
import { VerifyToken } from "./JwtTokehelper";

export default async function CheckMiddleware(req) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      throw new Error("Token not found in cookies");
    }

    const payload = await VerifyToken(token["value"]);

    if (!payload.email || !payload.id) {
      throw new Error("Invalid token payload");
    }

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload.email);
    requestHeader.set("id", payload.id);

    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 401 }
    );
  }
}
