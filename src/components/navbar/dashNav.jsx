import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";

import { IoClose } from "react-icons/io5";

export default function DashNav() {
  return (
    <header className="container text-gray-600 body-font">
      <div className="   flex items-center justify-between">
        {/* left logo */}
        <div className=" flex items-center min-w-[400px] sm:min-w-[500px] md:min-w-max justify-between">
          <Link
            href={"/dashboard"}
            className="flex title-font font-medium items-center text-gray-900  md:mb-0"
          >
            <Image alt="logo" src="/images/logo.png" width={150} height={100} />
          </Link>
        </div>

        {/* right side */}
        <div className="">
          <h1 className=" cursor-pointer bg-gray-100 px-3 py-2 rounded-md shadow transition-all duration-300 ease-in-out hover:shadow-md">
            Go to the store
          </h1>
        </div>
      </div>
    </header>
  );
}
