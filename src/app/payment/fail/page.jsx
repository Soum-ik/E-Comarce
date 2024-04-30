"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

function page({ searchParams }) {
  const { tran_id } = searchParams;

  function handleClick() {
    toast.loading("loading....");
    window.location.replace("/");
  }

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black/50 ">
      <div className=" p-4 bg-white min-w-[300px] rounded-md relative">
        <Toaster position="top-center" />
        <button
          onClick={handleClick}
          className="absolute bg-red-600 top-2 right-2  rounded-full p-1"
        >
          <IoClose color="white" />
        </button>
        <h1 className=" text-center mb-5 text-2xl text-red-600 font-bold">
          Payment Failed
        </h1>
        <p className="text-xl text-center gap-20">
          Order Id <span className="pl-5">#{tran_id}</span>
        </p>
      </div>
    </div>
  );
}

export default page;
