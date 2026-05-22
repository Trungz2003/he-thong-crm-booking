import axios from "axios";

const apiClient = (baseUrl = "") => {
  return axios.create({
    baseURL: baseUrl !== "" ? baseUrl : process.env.NEXT_PUBLIC_API,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-AppApiToken": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    timeout: 10000,
  });
};

export default apiClient;
