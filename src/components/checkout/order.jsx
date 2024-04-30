"use client";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { MdDone } from "react-icons/md";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function Done({ data }) {
  const router = useRouter();
  //  data destructer
  console.log(data);
  let email;

  const divRef = useRef(0);
  const closeModel = (e) => {
    if (divRef.current === e.target) {
      toast.success("Explore More");
      router.replace("/");
    }
  };

  const order_id = data?.toString().slice(0, 5);

  return (
    <div className="">
      <Toaster position="top-center" />
      <div
        ref={divRef}
        onClick={closeModel}
        className="  fixed bg-opacity-5 inset-0 bg-black backdrop-blur-sm shadow-lg flex justify-center items-center"
      >
        <div className=" bg-white rounded-xl print:p-5 min-w-[300px] max-w-[350px] mx-5 md:px-10 md:min-w-[400px] flex flex-col lg:py-10 py-5 p-5 lg:px-20 items-center justify-center">
          <div className="  p-3 md:p-4 lg:p-5 rounded-full bg-[#36C490] my-3 text-white">
            <MdDone size={30} />
          </div>
          <h1 className=" text-2xl text-[#36C490]">Payment Successful</h1>
          <p className="text-xl">Order ID #{order_id}</p>

          <div className=" text-xl opacity-80 flex items-center justify-between min-w-[280px] md:min-w-[350px] mt-10">
            <div>
              <h1>Payment Type</h1>

              <h1>Mail</h1>
            </div>
            <div className=" flex flex-col items-end">
              <h1>Cash On delivary </h1>
              <h1></h1>
              <h1>{email || "demo@gmail.com"}</h1>
            </div>
          </div>
          <div className=" text-[17px]  gap-5  flex items-center justify-between min-w-[280px] md:min-w-[350px] mt-10">
            <div className=" space-y-2 font-medium">
              <h1>Amount Paid</h1>
              <h1>Transaction ID</h1>
            </div>
            <div className=" space-y-2 flex flex-col items-end font-medium">
              <h1>$180.00</h1>
              <h1>{data || "**********"}</h1>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-2 mx-5 md:gap-5 mt-10">
            <ReactToPrint
              onAfterPrint={() => {
                // Perform actions after printing, like navigation
                history.pushState(null, "", "/");
              }}
              removeAfterPrint={true}
              content={() => divRef.current}
              trigger={() => (
                <button className=" md:px-[20px] md:py-[10px] py-[6px] shadow-2xl text-xl px-[14px] bg-black text-white rounded-lg">
                  Save
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Done;
