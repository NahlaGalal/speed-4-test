import axios from "axios";

const baseURL = "https://speed4ever.elsaed.aait-d.com/public/app";

const data = JSON.parse(localStorage.getItem("user") || "{}");
const token = data?.token || ''

const apiClient = axios.create({
  baseURL,
  headers: {
    "Accept-Language": "ar",
    Authorization: `Bearer ${token}`,
  },
});

export default apiClient;
