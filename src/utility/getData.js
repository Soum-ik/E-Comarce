import { headers } from "next/headers";

// customer product
export const getProductClinet = async () => {
  const data = await fetch("http://localhost:3000/api/customer/product", {
    cache: "no-cache",
  });
  const response = await data.json();
  return response;
};

// for product ............................
export const getProduct = async () => {
  const headerlist = headers();
  const id = headerlist.get("id");
  const data = await fetch(`http://localhost:3000/api/product?user_id=${id}`);
  return data.json();
};

export const getSingleProduct = async (product_Id) => {
  const headerlist = headers();
  const userInfo = headerlist.get("id");
  const config = { method: "PATCH" };
  const data = await fetch(
    `http://localhost:3000/api/product?user_id=${userInfo}&product_id=${product_Id}`,
    config
  );
  return data.json();
};

// for cetagory....................
export const getCetagory = async () => {
  const headerlist = headers();
  const id = headerlist.get("id");
  const data = await fetch(`http://localhost:3000/api/category?user_id=${id}`);
  return data.json();
};
export const getSingleCategory = async (category_id, user_id) => {
  const config = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  };
  const data = await fetch(
    `http://localhost:3000/api/category?user_id=${user_id}&category_id=${category_id}`,
    config
  );
  return data.json();
};

// .....................  every single request
export const header_info = async () => {
  const headerlist = headers();
  const user_id = headerlist.get("id");
  return user_id;
};
