import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
export var errMsg = undefined;
var originalRequest;
const axiosInstance = axios.create({
  baseURL: "https://a2d61d04-9186-4df8-b30e-dc08f2fa40d8.mock.pstmn.io",

  headers: {
    Authorization: token ? `Token ${token}` : "",
  },
});

// // Add a request interceptor

axiosInstance.interceptors.request.use(
  function (config) {
    console.log("req config", config);
    originalRequest = config;

    // Do something before request is sent
    return config;
  },
  function (error) {
    errMsg = error.message;
    console.log("req err", error);
    // Do something with request error

    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("res response", response);

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    errMsg = error.message;
    console.log("res err", error);
    setTimeout(() => {
      errMsg = undefined;
    }, 0);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export function retryRequest() {
  console.log("retry");
  return axiosInstance.request(originalRequest);
}

export default axiosInstance;
