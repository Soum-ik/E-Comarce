import React from "react";

function Loading() {
  return (
    <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" min-w-[350px] min-h-[350px]  bg-gray-300 rounded-lg animate-pulse
      ease-in-out"></div>
        <div>loading...</div>
    </div>
  );
}

export default Loading;
