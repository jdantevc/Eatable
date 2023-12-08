import apiFetch from "./api-fetch";

export async function getProducts() {
  return await apiFetch(`/products`);
}

export async function showProduct(id){
  return await apiFetch(`/products/${id}`);
}

export function updateTransaction(
  id,
  data = { name, price, category, description, picture_url }
) {
  return apiFetch(`/products/${id}`, {
    body: data,
    method: "PATCH",
  });
}