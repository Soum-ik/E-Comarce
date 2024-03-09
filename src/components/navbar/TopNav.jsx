import Link from "next/link";
export default function TopNav() {
  return (
    <div>
      <header className="text-gray-600 body-font hidden lg:block">
        <div className="p-2 container mx-auto flex flex-wrap   flex-col md:flex-row items-center">
          <nav
            className={`hidden md:flex 
             md:ml-auto md:mr-auto  flex-wrap items-center justify-center  text-base  `}
          >
            <Link href="/" className="md:mr-5 mr-3 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/Category"
              className=" md:mr-5 mr-3 hover:text-gray-900"
            >
              Category
            </Link>
            <Link
              href="/Products"
              className=" md:mr-5 mr-3 hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              href="/AboutUs"
              className=" md:mr-5 mr-3 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              href="/Contacts"
              className=" md:mr-5 mr-3 hover:text-gray-900"
            >
              Contacts
            </Link>
          </nav>
          <button className=" fix hidden md:inline-flex items-center   border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            +880454571 4545
          </button>
        </div>
      </header>
    </div>
  );
}
