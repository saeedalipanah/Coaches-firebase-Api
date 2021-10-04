import { createStore } from 'vuex';
import coachesModule from './coaches/index.js';
import requestsModule from './requests/index.js';
import signupModule from './auth/signup.js';
import loginModule from './auth/login.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    request: requestsModule,
    signup: signupModule,
    login: loginModule
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {}
});
export default store;
