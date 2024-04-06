import { isValidJSON } from "./json";

export function saveInLocalStorage<T>(key: string, value: T) {
  if (!key) throw new Error("You must specify a key.");

  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage<T>(key: string): T | string | null {
  if (!key) throw new Error("You must specify a key.");

  const data = localStorage.getItem(key);

  if (data === null) return data;

  if (isValidJSON(data)) {
    return JSON.parse(data) as T;
  }

  return data;
}
