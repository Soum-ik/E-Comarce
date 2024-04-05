"use client";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import Image from "next/image";

const Card = ({ image, title, name, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="w-full shadow-lg bg-secondary rounded-2xl ">
      <div className=" max-w-[250px] min-h-[200px]  max-h-[200px]  flex items-center justify-center mx-auto">
        <Image
          className="max-w-[250px] min-h-[200px] w-full max-h-[200px] object-cover flex items-center justify-center"
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex  items-center gap-4">
          <div className=" flex flex-col items-center">
            <h2 className="font-semibold text-3xl">{name}</h2>
          </div>
        </div>
        <BsThreeDotsVertical className="text-text rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
      </div>

      <p className="text-text p-4">{title}</p>

      <div className="flex items-center justify-between w-full p-4 ">
        <div className="flex flex-col items-center gap-4 ">
          <div>
            {" "}
            <p className="text-text text-[0.9rem]">Price : ${price}</p>{" "}
          </div>
          <div className="flex flex-row gap-5">
            <FaHeart
              className={`${
                isFavorite ? "text-[#ff3d3d]" : "text-text"
              } text-[1.4rem] cursor-pointer`}
              onClick={() => setIsFavorite(!isFavorite)}
            />
            <HiMiniShare className="text-text text-[1.4rem] cursor-pointer" />
          </div>
        </div>
        <button className=" ease-in-out duration-200 p-3 rounded border bg-black text-white hover:bg-red-500 hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
