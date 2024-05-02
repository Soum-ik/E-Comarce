"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form({ info }) {
  const { data } = info;

  const [loading, setLoading] = useState(false);

  let [datas, setDatas] = useState(data);
  const handChanges = (name, value) => {
    setDatas((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(data);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.put("/api/User/login", datas);

    if (data.status) {
      toast.success("Update Successfully");
      setDatas({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoading(false);
    } else {
      toast.error("Update Unsuccessfully");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Toaster position="top-center" />
      <div className="  flex flex-row gap-2">
        <div className="mb-6 w-1/2">
          <label
            htmlFor="First Name"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="First Name"
            defaultValue={datas?.firstName}
            onChange={(e) => handChanges("firstName", e.target.value)}
            placeholder="First Name"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        </div>
        <div className="mb-6 w-1/2">
          <label
            htmlFor="last Name"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="last Name"
            value={datas?.lastName}
            onChange={(e) => handChanges("lastName", e.target.value)}
            placeholder="Last Name"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={datas?.email}
          onChange={(e) => handChanges("email", e.target.value)}
          placeholder="you@company.com"
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label
            htmlFor="password"
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            Password
          </label>
        </div>
        <div className=" flex ">
          <input
            type="text"
            name="password"
            value={datas?.password}
            onChange={(e) => handChanges("password", e.target.value)}
            id="password"
            placeholder="Your Password"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        </div>
      </div>
      <div className="mb-6">
        <button
          disabled={loading}
          type="submit"
          className="w-1/4  py-2 text-lg text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
        >
          {loading ? `Updateing...` : ` Update Information`}
        </button>
      </div>
    </form>
  );
}

export default Form;
