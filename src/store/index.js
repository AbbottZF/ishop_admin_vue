import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'
import goodsType from './modules/goodsType'
import rules from './modules/rules'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    goodsType,
    rules,
  },
  getters
})

export default store
