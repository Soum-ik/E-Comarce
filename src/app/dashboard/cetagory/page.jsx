"use server";

import DisplayCetagory from "@/components/Cetagory/DisplayCetagory";
import { getCetagory, header_info } from "@/utility/getData";
import { prismaConfig } from "@/utility/lib/promise";

async function page() {
  const user_id = await header_info();
  const data = await prismaConfig.category.findMany({
    where: {
      userId: user_id,
    },
  });

  console.log(user_id, data);

  return (
    <div className=" bg-gray-100 rounded-md p-3 container">
      <DisplayCetagory data={data} user_id={user_id} />
    </div>
  );
}

export default page;
