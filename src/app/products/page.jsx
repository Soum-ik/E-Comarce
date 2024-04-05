import { getProductClinet } from "@/utility/getData";
import React from "react";

async function Page() {
  const { data } = await getProductClinet();
  
  return (
    <div className=" container ">
      <h1 className=" text-[30px]"> All Product </h1>
      <div className=" mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div key={index}>
            <Card
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.imagurl}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
