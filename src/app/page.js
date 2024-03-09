import Hero from "@/components/Hero-section/Hero";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <Hero />
      <div className=" w-full mb-20">
        <Image width={10000} height={700} alt="dicount image" src="/images/dicount.png"/>
      </div>
    </div>
  );
}
