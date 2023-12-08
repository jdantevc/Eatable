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


export async function updateProduct(
  id,
  data = { name, price, category, description, picture_url }
) {
  return await apiFetch(`/products/${id}`, {
    body: data,
    method: "PATCH",
  });
}

export async function deleteProduct(id) {
  return await apiFetch(`/products/${id}`, {
    method: "DELETE",
  });
}