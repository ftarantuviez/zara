import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config) => {
    // Add authorization token to request url (api key)
    config.url += `?apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
