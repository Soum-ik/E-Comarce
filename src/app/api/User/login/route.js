import { CreateToken } from "@/utility/JwtTokehelper";
import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const result = await prisma.users.findUnique({
      where: reqBody,
    });
    if (!result) {
      return NextResponse.json(
        {
          message: "Sorry this not valid information",
          status: "data are not found",
        },
        { status: 304,}
      );
    } else {
      let token = await CreateToken(result["email"], result["id"]);

      const experiData = new Date(Date.now() + 24 * 60 * 60 * 3600);
      const cookieString = `token=${token}; expires=${experiData.toUTCString()}; path=/ `;
      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (error) {
    return NextResponse.json({ status: "fail" });
  }
}

export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    const result = await prisma.users.update({
      where: {
        id: reqBody.id,
      },
      data: {
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        email: reqBody.email,
        password: reqBody.password,
      },
    });
    console.log(result, "result data");
    return NextResponse.json({ status: "success", data: result });
    // if (result.modifacation > 0) {
    //   return NextResponse.json({ status: "success" });
    // } else {
    //   return NextResponse.json({ status: "fail" });
    // }
  } catch (error) {
    console.log(error, "from backend error");
    return NextResponse.json({ status: "fail", error: error });
  }
}
