import axios from "axios";

export const api = axios.create({
  baseURL: "https://cookshare-hub.onrender.com/api", 
});