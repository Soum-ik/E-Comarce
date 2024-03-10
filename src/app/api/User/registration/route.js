import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const result = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail" });
  }
}

export async function GET(req, res) {
  try {
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail" });
  }
}
