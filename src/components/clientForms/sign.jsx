"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const Route = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handChanges = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const config = { method: "POST", body: JSON.stringify(form) };
    try {
      const res = await fetch(`/api/customer/users/login`, config);
      const data = await res.json();

      if (data.status === 3001) {
        toast.error(data.data);
        return;
      }

      if (data.status === "fail") {
        toast.error(data.data);
      } else {
        toast.success("Login Successfully");
        Route.replace("/");
      }
    } catch (error) {
      console.log(error, "this is the erro ");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-3 gap-6">
      <Toaster position="top-center" />
      <div className=" col-span-3">
        <label
          // htmlFor=""
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </label>

        <input
          value={form.email}
          onChange={(e) => handChanges("email", e.target.value)}
          type="text"
          placeholder="Enter Your email"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>
      <div className=" !col-span-3">
        <label
          // htmlFor=""
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          Password{" "}
        </label>

        <input
          value={form.password}
          onChange={(e) => handChanges("password", e.target.value)}
          type="text"
          placeholder="Enter Your   Password"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-3 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
        >
          {loading ? "Loading..." : "Log In"}{" "}
          {/* Show loading text if loading */}
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          {`I don't have an account?`}
          <Link href="/auth/register" className="text-gray-700 underline">
            Sign Up
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
