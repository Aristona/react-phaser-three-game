import { axios } from "../axios"
import { to } from "helpers/api"

export const auth = {
  login: (data) => {
    return axios.post("/login", data)
  }
}
