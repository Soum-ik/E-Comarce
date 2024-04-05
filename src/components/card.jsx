"use client";
import { useState } from "react";
import { BiLike } from "react-icons/bi";

import { FaShoppingBag } from "react-icons/fa";

import Image from "next/image";

const Card = ({ image, title, name, price, discount }) => {
  return (
    <div className=" rounded-md border p-3 flex items-center justify-center flex-col">
      <div className="bg-[#E9E9E9] relative rounded-md flex items-center justify-center p-3">
        <Image
          src={image}
          className=" min-w-[250px] py-3 max-h-[200px] min-h-[200px] object-contain"
          alt="product image"
          height={400}
          width={400}
        />
        <span className="absolute border rounded-full p-2 -bottom-6 bg-gray-300 left-[46%] ">
          <FaShoppingBag />
        </span>
      </div>
      <div className=" text-center mt-10 flex items-center justify-center flex-col">
        <h1 className=" text-[#777777] text-sm">{name}</h1>
        <h1 className=" text-[#2B2B2D] text-xl mt-5 ">{title}</h1>
        <div className="  mt-4 flex items-center text-center justify-center gap-4 ">
          <h1 className=" text-[#F53E32] font-semibold">${price}</h1>
          <h1 className=" text-[#7A7A7A] line-through">${discount}%</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
