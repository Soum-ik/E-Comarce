import EditProductForm from "@/components/Product/EditProduct";
import { getCetagory, getSingleProduct } from "@/utility/getData";

export default async function EditProduct({ params }) {
  const product_Id = params["id"];
  const { data } = await getSingleProduct(product_Id);
  const cetagory_id = await getCetagory();

  return (
    <div className="container">
      <EditProductForm
        data={data}
        user_id={user_id}
        categoryId={cetagory_id}
        product_Id={product_Id}
      />
    </div>
  );
}
