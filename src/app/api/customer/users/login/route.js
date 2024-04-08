import { CreateToken } from "@/utility/JwtTokehelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const result = await prisma.customers.findUnique({
      where: reqBody,
    });
    if (!result) {
      return NextResponse.json({ status: "Sorry this not valid information" });
    } else {
      let token = await CreateToken(result["email"], result["id"]);

      const experiData = new Date(Date.now() + 24 * 60 * 60 * 3600);
      const cookieString = `usertoken=${token}; expires=${experiData.toUTCString()}; path=/ `;
      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (error) {
    console.log(error, "this is api error");
    return NextResponse.json({ status: "fail" });
  }
}
