export const state = () => ({
  token: '',
  error: ''
})

export const mutations = {
  login (state, token) {
    state.token = token
  },
  logout (state) {
    state.token = ''
  },
  set_error (state, error) {
    state.error = error
  }
}

export const getters = {
  getToken: state => state.token
}
