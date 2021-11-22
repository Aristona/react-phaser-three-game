import { isDevelopment } from "helpers/env"
import { store } from "index"

export const to = (path) => {
  if (isDevelopment()) {
    return `/${path}`
  }

  return `${process.env.REACT_APP_ENDPOINT}/${path}`
}
