import Form from "@/components/dashboard/form/form";
import { header_info } from "@/utility/getData";
import prisma from "@/utility/lib/prisma";
import toast, { Toaster } from "react-hot-toast";

export default async function page() {
  const user_id = await header_info();

  const data = await prisma.users.findUnique({
    where: {
      id: user_id,
    },
  });
  const info = {
    data,
    user_id,
  };

  return (
    <div className="container p-3 bg-gray-100 rounded-md ">
      <h1 className=" text-2xl font-medium underline-offset-1 underline pb-10 text-center">
        Store Credential{" "}
      </h1>
      <div className=" ">
        <Form info={info} />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
