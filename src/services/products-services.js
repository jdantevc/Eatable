import apiFetch from "./api-fetch";

export async function getProducts() {
  return await apiFetch(`/products`);
}

export async function showProduct(id){
  return await apiFetch(`/products/${id}`);
}