import Billing from "@/components/checkout/Billing";
import Summary from "@/components/checkout/summary";
import { header_info, getSingelCustomer } from "@/utility/getData";
async function Page({ searchParams }) {
  // get from url
  let { total_price, cart_items } = searchParams;
  let _cartItem = JSON.parse(cart_items);

  const id = await header_info();
  const { data } = await getSingelCustomer(id);

  return (
    <div className="  container my-10 ">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="">
          <Summary cartItem={_cartItem} total={total_price} />
        </div>
        <div className="lg:col-span-2">
          <Billing
            discount={null}
            customerdata={data}
            cartItem={_cartItem}
            total={total_price}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
