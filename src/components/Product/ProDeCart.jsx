"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
function ProDeCart({ data, productId }) {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
    toast.success("Product Successfull");
    localStorage.setItem("cartItems", JSON.stringify([...cart, item]));
  }

  const handlePayment = async () => {
    console.log("payment");
    router.push(
      `/checkout?total_price=${data.price}&cart_items=${JSON.stringify([
        data,
      ])}&product_id=${productId}`
    );
  };

  return (
    <div className=" flex    gap-5">
      <button
        onClick={() => addToCart(data)}
        className=" bg-red-500 px-4 outline-none py-2 text-white rounded-md !mt-6"
      >
        Add To Cart
      </button>

      <button
        onClick={handlePayment}
        className="bg-red-500 px-4 outline-none py-2 text-white rounded-md !mt-6"
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProDeCart;
