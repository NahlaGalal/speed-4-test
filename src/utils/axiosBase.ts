import axios from "axios";

const baseURL = "https://speed4ever.elsaed.aait-d.com/public/app";

const { token } = JSON.parse(localStorage.getItem("user") || "{ token: '' }");

const apiClient = axios.create({
  baseURL,
  headers: {
    "Accept-Language": "ar",
    Authorization: `Bearer ${token}`,
  },
});

export default apiClient;
