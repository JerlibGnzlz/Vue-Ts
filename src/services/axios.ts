import axios, { type AxiosInstance } from "axios";

export const Axios: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  },
})