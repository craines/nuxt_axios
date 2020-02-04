import axios from 'axios'

export default ({app, store}, inject) => {

  const http = axios.create({
    headers: {
      'Content-Type': 'application/json',
    }
  })

  http.interceptors.request.use((config) => {
    config.headers.common['Authorization'] = 'Bearer' + store.state.auth.token
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  
  http.interceptors.response.use((response) => {
    return response
  }, (error) => {
    console.log("Deu ruim")
    if (error.response.status >= 400) {
      store.commit('auth/set_error', error.response.data)
    }
    return Promise.reject(error)
  })

  inject('http', http);
}