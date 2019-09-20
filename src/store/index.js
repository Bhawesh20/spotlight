import Vue from 'vue'
import Vuex from "vuex";
import app from './modules/app';
import branch from './modules/branch';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    app,
    branch
  },
  plugins: [
    createPersistedState({paths: ['app','branch']})
  ]
});

export default store;