import Hero from "@/components/Hero-section/Hero";
import Email from "@/components/email";
import Services from "@/components/services";
import ShowCase from "@/components/showcase";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <Hero />
      <ShowCase />
      <div className=" w-full lg:mb-20">
        <Image
          width={10000}
          height={10}
          alt="dicount image"
          src="/images/dicount.png"
        />
      </div>
      <Email />
      <Services />
    </div>
  );
}
