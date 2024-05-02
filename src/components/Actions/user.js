"use server";

import { PrismaClient } from "@prisma/client";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { errorMonitor } from "nodemailer/lib/xoauth2";
const user_id = await header_info();

export const user = async (userid) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userid,
      },
    });
    console.log(user, "user");
  } catch (error) {
    console.log(error, "this is a error");
  }
  return user;
};
