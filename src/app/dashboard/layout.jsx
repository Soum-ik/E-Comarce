import DashNav from "@/components/navbar/dashNav";
import { Poppins } from "next/font/google";
import Sidebar from "./Sidebar/sidebar";

const poppins = { subsets: ["latin"], weight: ["400"] };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className=" bg-[#fffbf6] min-h-screen text-neutral-900 ">
          <DashNav />
          <div className="flex py-10 container gap-5">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
