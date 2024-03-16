"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddNewProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    unit: "",
    discountPercentage: "",
    category: "",
    imagurl: "",
  });
  const handChanges = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { method: "POST", body: JSON.stringify(form) };
    const res = await fetch(` /api/User/login`, config);
    console.log(res);
    if (res.ok) {
      toast.success("Login SuccessFull");
      router.replace("/cart");
    } else {
      toast.error("Login Unsuccess");
    }
  };

  return (
    <div className="flex items-center my-8 bg-white dark:bg-gray-900">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto ">
          <div className="m-7">
            <form className=" " onSubmit={handleSubmit} action="">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Title
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={(e) => handChanges("name", e.target.value)}
                  placeholder="Add Your Product title"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="description"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Product Details
                  </label>
                </div>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={(e) => handChanges("description", e.target.value)}
                  id="description"
                  placeholder="add product decription"
                  className="w-full px-3 min-h-[200px] py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              {/*  */}
              <div className=" flex flex-row w-full gap-2">
                <div className="mb-6 w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    value={form.brand}
                    onChange={(e) => handChanges("brand", e.target.value)}
                    placeholder="brand"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={form.price}
                    onChange={(e) => handChanges("price", e.target.value)}
                    placeholder="price"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
              </div>
              <div className=" flex flex-row w-full gap-2">
                <div className="mb-6 w-full">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={form.category}
                    onChange={(e) => handChanges("category", e.target.value)}
                    placeholder="category"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
              </div>
              <div className=" flex flex-row w-full gap-2">
                <div className="mb-6 w-full">
                  <label
                    htmlFor="unit"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Unit
                  </label>
                  <input
                    type="number"
                    name="unit"
                    id="unit"
                    value={form.unit}
                    onChange={(e) => handChanges("unit", e.target.value)}
                    placeholder="unit"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6 w-full">
                  <label
                    htmlFor="discountPercentage"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    DiscountPercentage
                  </label>
                  <input
                    type="number"
                    name="discountPercentage"
                    id="last Name"
                    value={form.discountPercentage}
                    onChange={(e) =>
                      handChanges("discountPercentage", e.target.value)
                    }
                    placeholder="discountPercentage"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// schema
