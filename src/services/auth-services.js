import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export async function login(credentials) {
  return apiFetch("/login", { body: credentials })
  .then(u => {
    const {token,...user} = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  })
}