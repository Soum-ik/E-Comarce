"use client";
import React, { useState } from "react";
import bkask from "../../../public/images/payment-method/bkash.jpg";
import roket from "../../../public/images/payment-method/roket.jpg";
import nogod from "../../../public/images/payment-method/nogod.jpg";
import Image from "next/image";
import Order from "./order";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function Billing({ data, total, discount, cartItem }) {
  const images = [bkask, roket, nogod];

  const { id } = data;
  const customersId = id;

  // find user_id from cartitem
  let _cartItem = cartItem.map((item) => item.userId);

  const qnt = _cartItem.length.toString();

  const [loading, setLoading] = useState(false);

  const handChanges = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isModel, setIsModel] = useState(false);

  const [form, setForm] = useState(data);
  const [postCode, setPostCode] = useState("");
  const [road, setroad] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const handleCity = (event) => {
    setcity(event.target.value);
  };
  const handleCountry = (event) => {
    setcountry(event.target.value);
  };
  const handleRoad = (event) => {
    setroad(event.target.value);
  };

  const { email, firstName, lastName } = form;

  const handleModel = async () => {
    setLoading(true);
    if (postCode === "" || road === "" || city === "" || country === "") {
      setLoading(false);
      toast.error("Fill uncomplete");
      return;
    }
    console.log("before sending request");
    const { data } = await axios.post(
      `/api/invoice/?customersId=${customersId}`,
      {
        email,
        firstName,
        lastName,
        road,
        city,
        country,
        postCode,
        userId, // Assuming userId is a single ID, convert it to an array if necessary
        total,
        qnt,
        discount,
      }
    );
    console.log(data);
    if (data.status === "fail") {
      toast.error("Order have an problem");
      setLoading(false);
      return;
    }

    setLoading(false);
    setIsModel(!isModel);
  };
  return (
    <div className="">
      <Toaster position="top-center" />
      <div className=" border p-3 mb-5 rounded-md">
        <h1>Payment Method</h1>
        <div className=" group relative flex gap-10 my-5 ">
          {images.map((image, index) => (
            <Image
              alt={image}
              src={image}
              key={index}
              placeholder="blur"
              loading="lazy"
              height={300}
              width={100}
              className="mix-blend-normal"
            />
          ))}
          <h1 className=" text-2xl font-bold group-hover:block hidden">
            Not Avaiable now
          </h1>
        </div>
      </div>
      <div className="border p-3 rounded-md ">
        <h1 className=" text-lg font-medium">Billing Details </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
          <div>
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              First Name{" "}
            </label>

            <input
              type="text"
              value={form.firstName}
              onChange={(e) => handChanges("firstName", e.target.value)}
              placeholder="Enter Your First Name"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              last Name{" "}
            </label>

            <input
              type="text"
              value={form.lastName}
              onChange={(e) => handChanges("lastName", e.target.value)}
              placeholder="Enter Your last  Name"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            />
          </div>
          <div className=" col-span-2">
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) => handChanges("email", e.target.value)}
              id="UserEmail"
              placeholder="john@rhcp.com"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              Road{" "}
            </label>

            <select
              value={road}
              onChange={handleRoad}
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            >
              <option className=" border" value="">
                Please select
              </option>
              <option className=" border mt-20" value="MM">
                Modina Market
              </option>
              <option className=" border" value="JMP">
                Jitu Miya Point
              </option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              City
            </label>

            <select
              value={city}
              onChange={handleCity}
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            >
              <option className=" border" value="">
                Select City
              </option>
              <option className=" border" value="Sylhet">
                Sylhet
              </option>
              <option className=" border" value="Dhaka">
                Dhaka
              </option>
              <option className=" border" value="Sreemangol">
                Sreemangol
              </option>
              <option className=" border" value="Moulovibazar">
                Moulovibazar
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              Post Code{" "}
            </label>

            <input
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              type="number"
              id="UserEmail"
              placeholder="000122"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor="UserEmail"
              className=" mb-2 block text-xs font-medium text-gray-700"
            >
              {" "}
              Country{" "}
            </label>

            <select
              value={country}
              onChange={handleCountry}
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            >
              <option className=" border" value="">
                Please select
              </option>
              <option className=" border" value="LONDON">
                LONDON
              </option>
              <option className=" border" value="BANGLADESH">
                BANGLADESH
              </option>
              <option className=" border" value="INDIA">
                INDIA
              </option>
            </select>
          </div>
        </div>
      </div>
      <button
        onClick={handleModel}
        type="submit"
        className=" flex rounded-md mt-5 px-3 py-2 bg-red-500  text-white justify-end"
      >
        {loading ? "loading..." : "Place Order"}
      </button>

      {isModel && <Order data={data} onClose={() => setIsModel(!isModel)} />}
    </div>
  );
}

export default Billing;
