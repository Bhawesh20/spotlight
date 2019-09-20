import axios from 'axios';
const state = {
  branchData:[],
  selectedCity:"",
  branchDataPending:false
}

const mutations ={
  setBranchData(state, dataInput){
    state.branchData = dataInput;
  },
  setSelectedCity(state, dataInput){
    state.selectedCity = dataInput;
  },
  setBrachDataPending(state, dataInput){
    state.branchDataPending = dataInput;
  }
}

const getters ={

}

const actions = {
  getAllBranches(store, city){
    store.commit('setBrachDataPending', true);
    let result = axios.get('https://vast-shore-74260.herokuapp.com/banks', {
      params: {
        city: city
      }
    })
    return new Promise(function(resolve, reject){
      result.then((response) => {
        store.commit('setSelectedCity', city);
        store.commit('setBranchData', response.data);
        store.commit('setBrachDataPending', false);
        return resolve();
      })
      .catch((error) => {
        store.commit('setBrachDataPending', false);
        return reject(error);
      })
    });
  }
}
export default {
  state,
  actions,
  mutations,
  getters
  
}