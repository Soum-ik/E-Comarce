"use client";

import Link from "next/link";
import image from "../../../public/image/logo.png";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CiHeart, CiMenuFries } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function MainNav() {
  const [open, setOpen] = useState(true);
  return (
    <header className="text-gray-600 body-font">
      <div className="  container mx-auto flex    justify-between flex-col md:flex-row items-center">
        {/* left logo */}
        <div className=" flex items-center min-w-[280px] sm:min-w-[500px] md:min-w-max justify-between">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900  md:mb-0"
          >
            <Image alt="logo" src={image} width={150} />
          </Link>
          <div className=" md:hidden " onClick={() => setOpen(!open)}>
            {open ? <CiMenuFries size={25} /> : <IoClose size={25} />}
          </div>
        </div>
        <div className=" lg:min-w-[500px] sm:min-w-[400px] min-w-[300px] px-5 py-2 border rounded-full flex items-center justify-between">
          <input className=" outline-none w-full" type="text" name="" id="" />
          <button>
            <BsSearch />
          </button>
        </div>
        <div className="space-x-5 mt-4 md:mt-0 flex ">
          <Link
            className="flex items-center justify-center gap-2"
            href={"/cart"}
          >
            <VscAccount />
            Cart
          </Link>
          <Link
            className="flex items-center justify-center gap-2"
            href={"/Wishlist"}
          >
            <CiHeart />
            Wishlist
          </Link>
          <Link
            className="flex items-center justify-center gap-2"
            href={"/Account"}
          >
            <MdOutlineShoppingCart />
            Account
          </Link>
        </div>
      </div>
      {!open && (
        <nav
          onClick={() => setOpen(!open)}
          className={` md:hidden  
             md:ml-auto md:mr-auto flex flex-col mt-10 space-y-5 items-center justify-center  text-base  `}
        >
          <Link href="/" className="md:mr-5 mr-3 hover:text-gray-900">
            Home
          </Link>
          <Link href="/Category" className=" md:mr-5 mr-3 hover:text-gray-900">
            Category
          </Link>
          <Link href="/Products" className=" md:mr-5 mr-3 hover:text-gray-900">
            Products
          </Link>
          <Link href="/About Us" className=" md:mr-5 mr-3 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/Contacts" className=" md:mr-5 mr-3 hover:text-gray-900">
            Contacts
          </Link>
        </nav>
      )}
    </header>
  );
}
