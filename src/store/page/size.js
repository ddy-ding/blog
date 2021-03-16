import Vue from 'vue'
import {types} from '../types'

const size = {
  state: {
    height:''
  },
  mutations: {
    //保存高度
    [types.SET_HEIGHT](state, payload) {
      Vue.set(state, 'height', payload)
    }
  },
  actions: {
    [types.SET_HEIGHT]({ commit }, payload) {
      commit(types.SET_HEIGHT, payload)
    }
  },
}
export default size