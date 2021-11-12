import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//グローバル変数のようなデータ
    items: [],
    count: 0,
  },
  getters: {//算出プロパティ

  },
  mutations: {//メソッドのような存在(mutationsでしかstateを変更できないようにルールする)
    setCovidData(state, items) {
      state.items = items
    },
    increment(state) {
      state.count++;
    }
  },
  actions: {//非同期処理はactionに書く
    getCovidData: function({commit}) {
      return axios.get("/api/Covid19JapanAll?dataName=大阪府")
      .then(response => {
        commit('setCovidData',response.data.itemList)
      })
    }
  },
  modules: {//
  }
})
