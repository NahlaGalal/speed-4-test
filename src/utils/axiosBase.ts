import axios from "axios";

const baseURL = "https://speed4ever.elsaed.aait-d.com/public/app";

const apiClient = axios.create({
  baseURL,
  headers: {
    "Accept-Language": "ar",
  },
});

export default apiClient;
