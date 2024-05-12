import { getCetagory, getProduct, } from "@/utility/getData";
import Link from "next/link";

async function Page() {;
  const { data } = await getProduct();
  const total_category = await getCetagory();

  return (
    <div className="bg-gray-100 rounded-md p-3 pb-10">
      {/* introducation */}
      <div className=" flex flex-col md:flex-row items-center justify-between">
        <h1 className=" lg:text-3xl  text-xl">
          Welcome Back, Soumik Sarkar <br />
          <p className=" text-black/60 text-sm lg:mt-4 lg:text-xl leading-[20px] lg:leading-[27px]">
            View the statistics about your business. Also manage and add
            products.
          </p>
        </h1>

        <div className=" flex items-center justify-center gap-4 my-10">
          <Link className=" buttom " href={"/dashboard/product"}>
            View Product
          </Link>
          <Link className="  buttom" href={"/"}>
            View Shop
          </Link>
        </div>
      </div>
      {/* jsut view */}
      <div className="  px-6 gap-4 grid grid-cols-2 lg:grid-cols-3  place-items-center lg:mt-20">
        <div className=" flex  items-center justify-center flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-28 md:px-24 sm:px-18 px-2 py-5 min-w-max rounded-md">
          <h1 className="text-xl">Total Profit</h1>
          <p className=" text-lg mt-2 ">{`200K`}</p>
        </div>
        <div className="flex  items-center justify-center flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-28 md:px-24 sm:px-18 px-2 py-5 min-w-max rounded-md">
          <h1 className="text-xl">Product</h1>
          <p className=" text-lg mt-2">{data.length || "loading...."}</p>
        </div>
        <div className=" flex  items-center justify-center flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-28 md:px-24 sm:px-18 px-2 py-5 min-w-max rounded-md">
          <h1 className="text-xl">Categoris</h1>
          <p className=" text-lg mt-2">
            {total_category.data.length || "loading...."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
