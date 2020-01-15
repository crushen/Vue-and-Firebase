import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import exchange from './modules/exchange'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exchange
  },
  // state - state of vuex store, you can specify any data here
  state() {
    return {}
  },
  // getters are functions that have access to the state
  // you can create getters to return modified state (not mutated)
  getters: {

  },
  // methods where you can perform different tasks, mostly you want to fetch data from here
  // actions most of the time resolves into some data
  // Api calls, access database etc..
  actions: {
    test() {
      alert('Hello Vuex')
    }
  },
  // you will get data and set the data to the state
  mutations: {
    ...vuexfireMutations
  }
})