"use client";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AddProduct() {
  const route = useRouter();
  function handleProduct() {
    route.push("/dashboard/product/new");
  }
  return (
    <section className=" container">
      <Toaster position="top-center" />
      <div className=" flex items-center justify-between lg:flex-row  flex-1 border-b-2 pb-5">
        <div>
          <h1 className=" text-2xl font-semibold">All Products</h1>
          <p className=" text-base">{`Let's create a new product! 🎉`}</p>
        </div>
        <div>
          <button
            onClick={handleProduct}
            className=" p-4 text-lg rounded-lg flex items-center justify-center gap-2 border border-green-600 "
          >
            <PlusCircledIcon fontSize={50} color="green" />
            Add Product
          </button>
        </div>
      </div>

      <>
        {/* component */}
        <table className="min-w-full  block md:table">
          <tbody className="block md:table-row-group">
            <tr className="  border border-grey-500 md:border-none block md:table-row">
              <td className=" text-left block md:table-cell">Jamal Rios</td>

              <td className=" text-left block md:table-cell">
                jrios@icloud.com
              </td>
              <td className=" text-left block md:table-cell">582-3X2-6233</td>
              <td className="p-2 text-center space-x-2 block">
                <button className=" font-medium py-1 px-2 border   rounded">
                  Edit
                </button>
                <button className=" font-medium py-1 px-2 border   rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    </section>
  );
}

export default AddProduct;
