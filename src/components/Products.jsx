"use server";

import Card from "./card";
import { prismaConfig } from "@/utility/lib/promise";
async function Products() {
  let datas = await prismaConfig.product.findMany();
  datas = datas?.slice(0, 6);

  return (
    <div className=" container ">
      <h1 className=" text-[30px]"> Popular Product </h1>
      <div className="flex items-center">

        <Card data={datas} />
      </div>
    </div>
  );
}

export default Products;
