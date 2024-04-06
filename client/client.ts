import axios from "axios";
import md5 from "md5";

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
    const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY;
    const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_API_KEY;
    if (!publicKey || !privateKey) throw new Error("Unauthorized");
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    console.log(config);

    const itemToUse = config.url?.includes("?") ? "&" : "?";
    config.url += `${itemToUse}apikey=${publicKey}&hash=${hash}&ts=${ts}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
