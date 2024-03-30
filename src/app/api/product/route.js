import { PrismaClient } from "@prisma/client";

import { headers } from "next/headers";
import { NextResponse } from "next/server";

// create product
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");
    console.log(id);
    let reqBody = await req.json();
    reqBody.userId = id;

    const result = await prisma.product.create({
      data: reqBody,
    });
    console.log(result);
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// update product
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");

    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    let reqBody = await req.json();

    const result = await prisma.product.update({
      where: {
        id: product_id,
        userId: id,
      },
      data: reqBody,
    });
    console.log(result);
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// Get all product
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");
    console.log(id);

    const result = await prisma.product.findMany({
      where: {
        userId: id,
      },
    });

    // if (result.length <= 0) {
    //   return NextResponse.json({ status: "Data not found" });
    // }

    return NextResponse.json({ status: "Data found", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
// delete product
export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");
    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    const result = await prisma.product.delete({
      where: {
        id: product_id,
        userId: id,
      },
    });
    return NextResponse.json({ status: "Delete Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// get singel product
export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();

    let id = headerList.get("id");
    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    const result = await prisma.product.findUnique({
      where: {
        userId: id,
        id: product_id,
      },
    });

    // const result = await prisma.product.findMany({
    //   where: {
    //     categoryId,
    //   },
    // });
    return NextResponse.json({ status: "Find Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
