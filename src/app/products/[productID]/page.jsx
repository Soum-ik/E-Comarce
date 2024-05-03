"use server";

import ProDeCart from "@/components/Product/ProDeCart";
// import { getSingleProductClient } from "@/utility/getData";
import Image from "next/image";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default async function Page({ params }) {
  // const id = params.productID;
  // const _productId = id;
  // const { data } = await getSingleProductClient(id);
  // const {
  //   imagurl,
  //   name,
  //   title,
  //   price,
  //   brand,
  //   discountPercentage,
  //   unit,
  //   description,
  // } = data;

  // function Notification() {
  //   toast.success("Your add product successfull");
  // }

  return (
    <div className=" container my-10 gap-10">
      <h1 className=" mb-10 lg:text-3xl ">Product Details</h1>

      {/* <ProductDetails data={data} /> */}
      {/* <div className="">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
   
          <Toaster position="top-center" />
          <div className="p-5 bg-[#E9E9E9] rounded-xl flex items-center  justify-center ">
            <Image
              alt="Product Image"
              className=" w-full  max-h-[350px] rounded-md"
              src={imagurl}
              width={300}
              height={400}
            />
          </div>
 

          <div className=" ">
            <div className=" border-b pb-5">
              <h1 className=" text-2xl text-[#2B2B2D]">{name}</h1>
              <h1 className=" text-sm  mt-5 text-[#7A7A7A]">{title}</h1>
            </div>

            <div className=" py-5 space-y-2">
              <h1>
                Brand : <span className=" pl-10 text-[#7A7A7A]">{price}</span>
              </h1>
              <h1>
                Unit : <span className=" pl-10 text-[#7A7A7A]">{brand}</span>
              </h1>
              <h1>
                Discount Percentage:{" "}
                <span className=" pl-10 text-[#7A7A7A]">
                  {discountPercentage}
                </span>
              </h1>
              <h1>
                Item: <span className=" pl-10 text-[#7A7A7A]">{unit}</span>
              </h1>
              <h1>
                Discount Percentage:{" "}
                <span className=" pl-10 text-[#7A7A7A]">
                  {discountPercentage}
                </span>
              </h1>
              <ProDeCart data={data} productId={_productId} />
            </div>
          </div>
        </div>

        <div className="  mt-10">
          <div className="   flex flex-col">
            <h1 className="cursor-pointer font-medium hover:border-red-600 hover:text-red-600 border-b pb-2 text-lg">
              Description
            </h1>
            <p className=" mt-5">{description}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
