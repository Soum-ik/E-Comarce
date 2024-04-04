import { headers } from "next/headers";

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

export const getCetagory = async () => {
  const headerlist = headers();
  const id = headerlist.get("id");
  const data = await fetch(`http://localhost:3000/api/category?user_id=${id}`);
  return data.json();
};

// .....................
export const header_info = async () => {
  const headerlist = headers();
  const user_id = headerlist.get("id");
  return user_id;
};
