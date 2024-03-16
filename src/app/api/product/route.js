import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.product.findMany({
      select: {
        title: true,
        price: true,
        discountPercentage: true,
        thumbnail: true,
      },
      take: 10,
    });
    console.log(result);
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail" });
  }
}
