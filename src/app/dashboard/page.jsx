import Link from "next/link";

async function Page() {
  
  return (
    <div className=" container   ">
      {/* introducation */}
      <div className=" flex flex-col md:flex-row items-center justify-between">
        <h1 className=" text-3xl pt-10 font max-w-[600px] text-justify ">
          Welcome Back, Soumik Sarkar <br />
          <p className=" text-black/60 mt-4 text-xl leading-[27px]">
            View the statistics about your business. Also manage and add
            products.
          </p>
        </h1>

        <div className=" flex items-center justify-center gap-4 my-10">
          <Link
            className=" p-2 bg-gray-100 rounded-md  text-base"
            href={"/dashboard/product"}
          >
            View Product
          </Link>
          <Link className=" p-2 bg-gray-100 rounded-md  text-base" href={"/"}>
            View Shop
          </Link>
        </div>
      </div>
      {/* jsut view */}
      <div className="  gap-4  grid grid-cols-2 lg:grid-cols-3  place-items-center lg:mt-20 mt-5">
        <div className=" flex items-center flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-40 md:px-32 sm:px-20 px-16 py-10 rounded-md">
          <h1>Total Profit</h1>
          <p>${0}</p>
        </div>
        <div className=" flex flex-1 flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-40 md:px-32 sm:px-20 px-16 py-10 rounded-md">
          <h1>Product</h1>
          <p></p>
        </div>
        <div className=" flex flex-1 flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-40 md:px-32 sm:px-20 px-16 py-10 rounded-md">
          <h1>Categoris</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Page;
