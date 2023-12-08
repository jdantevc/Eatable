import apiFetch from "./api-fetch";

export async function getProducts() {
  return await apiFetch(`/products`);
}

export async function showProduct(id){
  return await apiFetch(`/products/${id}`);
}

export async function createProduct(data = { name, price, category, description, picture_url }) {
  return await apiFetch(`/products`, {
    body: data,
    method: "POST",
  });
}


export function updateProduct(
  id,
  data = { name, price, category, description, picture_url }
) {
  return apiFetch(`/products/${id}`, {
    body: data,
    method: "PATCH",
  });
}