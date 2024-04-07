import React from "react";

function Billing() {
  return (
    <>
      <div className=" border p-3 mb-5 rounded-md">
        <h1>Payment Method</h1>
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
              type="email"
              id="UserEmail"
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
              type="email"
              id="UserEmail"
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
              Region State{" "}
            </label>

            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            >
              <option className=" border" value="">
                Please select
              </option>
              <option className=" border" value="JM">
                John Mayer
              </option>
              <option className=" border" value="SRV">
                Stevie Ray Vaughn
              </option>
              <option className=" border" value="JH">
                Jimi Hendrix
              </option>
              <option className=" border" value="BBK">
                B.B King
              </option>
              <option className=" border" value="AK">
                Albert King
              </option>
              <option className=" border" value="BG">
                Buddy Guy
              </option>
              <option className=" border" value="EC">
                Eric Clapton
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
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            >
              <option className=" border" value="">
                Please select
              </option>
              <option className=" border" value="JM">
                John Mayer
              </option>
              <option className=" border" value="SRV">
                Stevie Ray Vaughn
              </option>
              <option className=" border" value="JH">
                Jimi Hendrix
              </option>
              <option className=" border" value="BBK">
                B.B King
              </option>
              <option className=" border" value="AK">
                Albert King
              </option>
              <option className=" border" value="BG">
                Buddy Guy
              </option>
              <option className=" border" value="EC">
                Eric Clapton
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
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
            >
              <option className=" border" value="">
                Please select
              </option>
              <option className=" border" value="JM">
                John Mayer
              </option>
              <option className=" border" value="SRV">
                Stevie Ray Vaughn
              </option>
              <option className=" border" value="JH">
                Jimi Hendrix
              </option>
              <option className=" border" value="BBK">
                B.B King
              </option>
              <option className=" border" value="AK">
                Albert King
              </option>
              <option className=" border" value="BG">
                Buddy Guy
              </option>
              <option className=" border" value="EC">
                Eric Clapton
              </option>
            </select>
          </div>
        </div>
      </div>
      <button className=" flex rounded-md mt-5 px-3 py-2 bg-red-500  text-white justify-end">
        Place Order
      </button>
    </>
  );
}

export default Billing;
