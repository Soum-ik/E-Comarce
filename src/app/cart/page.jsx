import Cart from "@/components/CartComponent/Cart";
import { getProductClinet } from "@/utility/getData";
import { headers } from "next/headers";

async function page() {
  let { data } = await getProductClinet();
  data = data.slice(0, 3);

  const header = headers();
  console.log(header);

  return <Cart data={data} />;
}

export default page;
