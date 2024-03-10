import { CreateToken } from "@/utility/JwtTokehelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const result = await prisma.users.findUnique({
      where: reqBody,
    });
    if (!result) {
      return NextResponse.json({ status: "Sorry this not valid information" });
    } else {
      let token = await CreateToken(result["email"], result["id"]);
      const experiData = new Date(Date.now() + 24 * 60 * 60 * 3600);
      const cookieString = `token=${token}; expires=${experiData.toUTCString()}; path=/ `;

      return NextResponse.json({
        headers: { "set-cookie": cookieString },
        status: "success",
      });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail" });
  }
}
