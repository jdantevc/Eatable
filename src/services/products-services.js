import apiFetch from "./api-fetch";

export async function getProducts() {
  return await apiFetch("/products");
}