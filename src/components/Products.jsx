"use client";
import Card from "./card";
import { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = async () => {
      const data = await fetch("/api/product", {
        cache: "force-cache",
      });
      // const res = await data.json();
      console.log(res);
      setData(res.data);
    };

    res();
  }, []);
  console.log(data);
  return (
    <div className=" container ">
      <h1 className=" text-[30px]"> Popular Product </h1>
      <div className=" my-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* {data.map((item, index) => (
          <Card
            key={index}
            name={item.title}
            price={item.price}
            image={item.thumbnail}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Products;
