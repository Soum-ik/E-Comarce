import PageHeader from "@/components/Header/header";
import Register from "@/components/register";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader />
      <div className=" ">
        <Register />
      </div>
    </>
  );
}
