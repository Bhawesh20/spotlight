import Vue from 'vue';

const state = {
  screenWidth: -1,
  screenHeight: -1,
  favourite:{}

}

const mutations = {
  setScreenWidth(state, value){
    state.screenWidth = value;
  },
  setScreenHeight(state, value){
    state.screenHeight = value;
  },
  setFavourite(state, value){
    Vue.set(state.favourite, value.ifsc, value.value);
  }
}

const getters ={

}

export default {
  state,
  mutations,
  getters
}