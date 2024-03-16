import AddNewProduct from "@/components/Product/NewProduct";
import React from "react";

function page() {
  return (
    <div className="container my-10">
      <h1 className=" pb-5 border-b text-center lg:text-3xl md:text-xl text-base">
        Fill all the fields to add a new product!
      </h1>
      <AddNewProduct/>
    </div>
  );
}

export default page;
