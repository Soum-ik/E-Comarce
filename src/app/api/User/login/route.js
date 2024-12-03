import { CreateToken } from "@/utility/JwtTokehelper";
import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";
let prisma = new PrismaClient();


export async function POST(req) {
  try {
    const reqBody = await req.json();
    console.log(reqBody, 'request body checking');

    const result = await prisma.users.findUnique({
      where: {
        email: reqBody.email,
        password: reqBody.password
      }
    });


    if (!result) {
      return NextResponse.json(
        {
          message: "Sorry, this is not valid information",
          status: "data not found",
        },
        { status: 404 } // 404 Not Found is more appropriate here
      );
    } else {
      const token = await CreateToken(result.email, result.id);
      console.log('Token created successfully', token);

      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
      const cookieString = `adminAuthToken=${token}; expires=${expiryDate.toUTCString()}; path=/; HttpOnly; Secure; SameSite=Strict`;

      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "Set-Cookie": cookieString } }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { status: "fail", message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Ensure Prisma Client is properly disconnected
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
