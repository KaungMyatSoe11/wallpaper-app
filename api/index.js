import axios from "axios";

const API_KEY = "44413533-08d7e2b908bd8dc6cb85ea47c";

const apiUrl = ` https://pixabay.com/api/?key=${API_KEY}`;

// axios.interceptors.request.use((request) => {
//   console.log("Starting Request", request);
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   console.log("Response:", response);
//   return response;
// });

const formatUrl = (params) => {
  let url = apiUrl + `&per_page=25&safesearch=true&editors_choice=true`;
  if (!params) return url;
  let paramsKey = Object.keys(params);

  paramsKey.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  console.log(url);
  return url;
};

export const apiCall = async (params) => {
  try {
    console.log(formatUrl(params));
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (error) {
    console.error("Error details:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    return { success: false, msg: error.message, details: error.response };
  }
};
