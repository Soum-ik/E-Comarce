import Link from "next/link";
import React from "react";

function Page() {
  let res = async () => {
    let data = await fetch("/api/product", {
      cache: "force-cache",
    });
    let info = data.json();
  };
  res();
  console.log(info);

  return (
    <div className="container my-10">
      {users.map((userId) => (
        <Link key={userId} href={`/products/${userId}`}>
          <p>User ID: {userId}</p>
        </Link>
      ))}
    </div>
  );
}

export default Page;
