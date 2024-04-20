import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let { searchParams } = new URL(req.url);

    let orderIdGenretor =
      Math.floor(Math.random() * (12001200 - 12001202)) + 120000;

    let customersId = searchParams.get("customersId");

    reqBody.orderId = orderIdGenretor.toString();
    reqBody.customersId = customersId;
    console.log(reqBody, "api");
    const result = await prisma.invoices.create({
      data: reqBody,
    });

    return NextResponse.json({
      status: "Success",
      data: result,
      orderId: orderIdGenretor,
    });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let userId = searchParams.get("userId");

    const result = await prisma.invoices.findMany({
      where: { userId: userId },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
