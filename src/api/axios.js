import axios from "axios"

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  (response) => {

    /*
    if (response?.data?.result?.status === STATUS_FAILED) {
      return Promise.reject(new Error("Backend returned malformed data."));
    }*/

    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axiosInstance as axios }
