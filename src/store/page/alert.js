export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'
const alert = {
  state: {
    isLoading: false,
    alertText:''
  },
  mutations: {
    [SHOW_LOADING](state) {
      state.doShowLoading = true
    },
    [HIDE_LOADING](state) {
      state.doShowLoading = false
    },
  }
}

export default alert