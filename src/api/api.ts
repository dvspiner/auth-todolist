

interface ApiInterface {
  get: (url: string, config: object) => object
  delete: (url: string, config: object) => object
  post: (url: string, body: object, config: object) => object
  patch: (url: string, body: object, config: object) => object
  put: (url: string, body: object, config: object) => object
}

const api = <T extends ApiInterface, >(axios: T) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    delete: (url: string, config = {}) => axios.delete(url, config),
    post: (url: string, body: object, config = {}) => axios.post(url, body, config),
    patch: (url: string, body: object, config = {}) => axios.patch(url, body, config),
    put: (url: string, body: object, config = {}) => axios.put(url, body, config),
  }
}
export default api
