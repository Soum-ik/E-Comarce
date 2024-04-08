import Billing from "@/components/checkout/Billing";
import Summary from "@/components/checkout/summary";
import { headers } from "next/headers";
import React from "react";

function Page({ searchParams }) {
  let { total_price, cart_items } = searchParams;
  let _cartItem = JSON.parse(cart_items);

  const header = headers();
  console.log(header, "header list");

  return (
    <div className="  container my-10 ">
      <div className=" grid lg:grid-cols-3 gap-4">
        <div className="">
          <Summary cartItem={_cartItem} total={total_price} />
        </div>
        <div className="col-span-2">
          <Billing />
        </div>
      </div>
    </div>
  );
}

export default Page;
