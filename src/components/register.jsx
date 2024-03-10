"use client";
import Link from "next/link";
import { useRef } from "react";

export default function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    let emailData = emailRef.value;
    let passwordData = passwordRef.value;
    console.log(emailData, passwordData);
    e.preventDefault();
  };

  return (
    <div className="flex items-center my-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto ">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign Up
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create your account
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit} action="">
              <div className=" flex flex-row gap-2">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    id="email"
                    placeholder="First Name"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    id="email"
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
                  ref={emailRef}
                  id="email"
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
                <input
                  type="password"
                  ref={passwordRef}
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                {" Don't have an account yet? "}
                <Link
                  href="/login"
                  className="text-red-500 focus:outline-none focus:underline focus:text-red-500 dark:focus:border-red-800"
                >
                  Sign In
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
