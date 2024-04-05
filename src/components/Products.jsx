import { getProductClinet } from "@/utility/getData";
import Card from "./card";

async function Products() {
  const { data } = await getProductClinet();

  return (
    <div className=" container ">
      <h1 className=" text-[30px]"> Popular Product </h1>
      <div className=" mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.slice(0, 6).map((item, index) => (
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

export default Products;
