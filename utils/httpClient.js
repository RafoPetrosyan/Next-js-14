import axios from 'axios'

const httpClient = axios.create({
   baseURL: 'https://dashboard.ledcoatingsolutions.com/api',
})

httpClient.interceptors.request.use((config) => {
   return config
})

httpClient.interceptors.response.use(
   (response) => response,
   (error) => {
      // if (error.response && error.response.status === 401) {
      //
      // }
      return Promise.reject(error)
   },
)

export default httpClient
