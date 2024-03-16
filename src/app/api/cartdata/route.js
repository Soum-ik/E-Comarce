import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const resbody = await req.json();
    const result = await prisma.cart.findMany({
      where: resbody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail" });
  }
}
 
export async function name(req, res) {
  try {
    const data = await fetch('')
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ status: 'fail' });
  }
}