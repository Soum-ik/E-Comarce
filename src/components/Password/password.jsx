"use client";

import React, { useState } from "react";
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";

function Password({ data }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label
          htmlFor="password"
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          Password
        </label>
      </div>
      <div className="flex items-center border border-gray-300 focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={data.password}
          id="password"
          placeholder="Your Password"
          className="w-full px-3 py-2 bg-none outline-none  rounded-md focus:outline-none  "
        />
        <div
          className=" py-3 px-2 bg-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <BsEyeSlash /> : <BsEyeFill />}
        </div>
      </div>
    </div>
  );
}

export default Password;
