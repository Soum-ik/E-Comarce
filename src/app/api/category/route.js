import { PrismaClient } from "@prisma/client";

import { headers } from "next/headers";
import { NextResponse } from "next/server";

// create category
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");
    let reqBody = await req.json();
    reqBody.userId = id;
    const result = await prisma.category.create({
      data: reqBody,
    });
    console.log(result);
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// update category
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");

    let { searchParams } = new URL(req.url);
    let category_id = searchParams.get("category_id");

    let reqBody = await req.json();

    const result = await prisma.category.update({
      where: {
        id: category_id,
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

// Get all category
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();

    let id = headerList.get("id");

    const result = await prisma.category.findMany({
      where: {
        userId: id,
      },
    });

    if (result.length < 0) {
      return NextResponse.json({ status: " Data not found" });
    }

    return NextResponse.json({
      status: "Data found successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// delete category
export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = headerList.get("id");
    let { searchParams } = new URL(req.url);
    let category_id = searchParams.get("category_id");

    const result = await prisma.category.delete({
      where: {
        id: category_id,
        userId: id,
      },
    });
    return NextResponse.json({ status: "Delete Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// get singel category
export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();

    let id = headerList.get("id");
    let { searchParams } = new URL(req.url);
    let category_id = searchParams.get("category_id");

    const result = await prisma.category.findUnique({
      where: {
        userId: id,
        id: category_id,
      },
    });
    return NextResponse.json({ status: "Find Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
