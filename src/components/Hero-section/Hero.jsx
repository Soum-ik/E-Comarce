import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" bg-[#f8c2bf] w-full  min-h-[30vh] lg:mt-2 mt-10 lg:min-h-[40vh] ">
        <section className="bg-gray-50 text-gray-600 body-font">
          <div className="mx-auto max-w-screen-xl px-4  lg:flex  lg:min-h-[50vh] lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-red-700 sm:block">
                  {" "}
                  Increase Selles.{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href={'/products'}
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
