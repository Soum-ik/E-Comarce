"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import PopUpDeleteProduct from "../pop-up/PopUpDelete";
import Link from "next/link";
import { BsPlusCircle } from "react-icons/bs";

function DisplayProduct({ data, user_id }) {
  const router = useRouter();
  const [datas, setDatas] = useState(data);

  // Common product id
  const [productId, setProductId] = useState(null);

  // Pop-up for product delete
  const [popUpDelete, setPopUpDelete] = useState(false);

  // Click for delete product
  const clickDeleteBtn = (id) => {
    setProductId(id);
    setPopUpDelete(true);
  };

  // Click for new product
  const handleNewProduct = () => {
    router.push("/dashboard/product/new");
  };

  const handleDeleteFun = async (id) => {
    toast.loading("Deleting product...");
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(
        `/api/product?product_id=${id}&user_id=${user_id}`,
        config
      );
      const result = await response.json();

      if (result.status === "Delete Successfully") {
        toast.success("Product deleted successfully");
        setPopUpDelete(false);
        setDatas(datas.filter((item) => item.id !== id)); // Update the state without reloading the page
      } else {
        throw new Error("Delete unsuccessful: Invalid response status");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.dismiss(); // Dismiss any existing toast notifications
    }
  };

  return (
    <section className="min-w-[1120px]">
      <Toaster position="top-center" />
      <div className="flex items-center mx-5 justify-between lg:flex-row flex-1 border-b-2 pb-5">
        <div>
          <h1 className="text-2xl font-semibold">All Products</h1>
          <p className="text-base">{"Let's create a new Product! 🎉"}</p>
        </div>
        <div>
          <button
            onClick={handleNewProduct}
            className="p-3 text-lg rounded-lg flex items-center justify-center gap-2 border border-green-600"
          >
            <BsPlusCircle size={25} color="green" />
            Add Product
          </button>
        </div>
      </div>

      <table className="w-full mx-5 mt-5  !font-normal">
        <thead>
          <tr>
            <th className="text-left !font-normal max-w-max">Image</th>
            <th className="text-left !font-normal max-w-max">Name</th>
            <th className="text-left !font-normal max-w-max">Brand</th>
            <th className="text-left !font-normal max-w-max">Category</th>
            <th className="text-left !font-normal max-w-max">Price</th>
            <th className="text-left !font-normal max-w-min">Discount Percentage</th>
            <th className="text-left !font-normal max-w-max">Unit</th>
            <th className="text-left !font-normal max-w-max">Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="text-left">
                <Image
                  className="max-h-[40px] object-contain rounded-lg"
                  src={item.imagurl}
                  alt={item.name}
                  height={40}
                  width={40}
                />
              </td>
              <td className="text-left">{item.name}</td>
              <td className="text-left">{item.brand}</td>
              <td className="text-left">{item.categoryId}</td>
              <td className="text-left">{item.price}</td>
              <td className="text-left">{item.discountPercentage}</td>
              <td className="text-left">{item.unit}</td>
              <td className="text-left space-x-2">
                <Link href={`/dashboard/product/${item.id}`} className="font-medium py-1 px-2 border rounded">
                  Edit
                </Link>
                <button
                  onClick={() => clickDeleteBtn(item.id)}
                  className="font-medium py-1 px-2 border rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popUpDelete && (
        <PopUpDeleteProduct
          id={productId}
          deleteFun={handleDeleteFun}
          onClose={() => setPopUpDelete(false)}
        />
      )}
    </section>
  );
}

export default DisplayProduct;
