import Cart from "@/components/CartComponent/Cart";
import { getProductClinet } from "@/utility/getData";

async function page() {
  let { data } = await getProductClinet();
  data = data.slice(0, 3);
  return <Cart data={data} />;
}

export default page;
