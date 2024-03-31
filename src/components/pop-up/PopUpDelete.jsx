"use client";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function PopUpDelete({ onClose, deleteFun, id }) {
  const handleDeleteFun = () => {
    deleteFun(id);
    console.log(deleteFun);
  };

  return (
    <div className="fixed delay-500 ease-in-out bg-opacity-5 inset-0 bg-black backdrop-blur-sm shadow-lg flex justify-center items-center">
      <div className="bg-white relative flex items-center px-10 justify-center flex-col py-10 min-w-[300px] rounded-2xl">
        <div className=" w-full flex  items-center justify-center  mt-3 ">
          <h1 className=" text-2xl">Do you want delete?</h1>
        </div>
        <div className=" flex gap-3 mt-6">
          <button
            onClick={handleDeleteFun}
            className=" bg-neutral-700 px-4 py-2  text-neutral-200 rounded-lg "
          >
            {" "}
            Yes
          </button>
          <button
            onClick={onClose}
            className=" bg-neutral-700 px-4 py-2  text-neutral-200 rounded-lg"
          >
            {" "}
            No
          </button>
        </div>
        <div onClick={onClose} className="absolute top-3 right-3">
          <IoCloseCircleOutline size={25} />
        </div>
      </div>
    </div>
  );
}
