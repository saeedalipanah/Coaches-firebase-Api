import { createStore } from 'vuex';
import coachesModule from './coaches/index.js'

const store = createStore({
    modules:{
        coaches: coachesModule
    },
    state(){
        return{

        }
    },
  mutations: {},
  actions: {},
  getters:{},
});
export default store;
