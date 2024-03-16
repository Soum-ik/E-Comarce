import DashNav from "@/components/navbar/dashNav";
import { Poppins } from "next/font/google";
  

const poppins = ({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DashNav />
        {children}
      </body>
    </html>
  );
}
