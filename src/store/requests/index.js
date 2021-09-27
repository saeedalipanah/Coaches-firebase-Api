export default {
  // namespaced : true,
  state() {
    return {
      requests: [
        { email: 'ragegewa@dsb', massage: 'ragegewa' },
        { email: 'ragegewa@dsb', massage: 'ragegewa' }
      ]
    };
  },
  mutations: {
    addRequests(state, payload) {
      state.requests.push(payload);
    }
  },
  actions: {
    addRequests(contex, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        email: payload.email,
        massage: payload.massage
      };
      contex.commit('addRequests', newRequest);
    }
  },
  getters: {
    requests(state) {
      return state.requests;
    },
    noRequests(state) {
      if (state.requests && state.requests.length <= 0) {
        return true;
      }
    }
  }
};
