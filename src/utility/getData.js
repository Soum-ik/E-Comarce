export async function getData() {
  const data = await fetch("/api/product");

  return data.json();
}

