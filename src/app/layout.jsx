import "./globals.css";
import { Poppins } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ["devanagari"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
