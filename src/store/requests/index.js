// import axios from 'axios';
export default {
  // namespaced : true,
  state() {
    return {
      requests: []
    };
  },
  mutations: {
    addRequests(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, payload) {
      state.requests = payload;
    }
  },
  actions: {
    async addRequests(contex, payload) {
      const newRequest = {
        // id: '',
        coachId: payload.coachId,
        email: payload.email,
        massage: payload.massage
      };
      const response = await fetch(
        `https://vue-http-demo-85e9e.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest)
        }
      );

      const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
  
      // axios
      //   .post(
      //     `https://main-course-1ba2e-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      //     {
      //       newRequest
      //     }
      //   )
        // .then(response => {
        //   // then structure : .then((...) => {...})

        //   const responseData = response.data;
        //   newRequest.id = responseData.name;
        // });

      contex.commit('addRequests', newRequest);
    },
      async loadRequests(context) {
        const coachId = context.rootGetters.loginUserId;
        console.log('coachId:'+ coachId);
        const token =context.rootGetters.loginToken
        console.log('token:'+ token);

        const response = await fetch(`https://main-course-1ba2e-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);
        const responseData = await response.json();
        console.log(responseData);
        
        if (!response.ok) {
          const error = new Error(
            responseData.message || 'Failed to fetch requests.'
          );
          throw error;
        }
    
        const requests = [];
    
        for (const key in responseData) {
          const request = {
            id: key,
            coachId: coachId,
            email: responseData[key].newRequest.email,
            massage: responseData[key].newRequest.massage
          };
          requests.push(request);
        }
    
        context.commit('setRequests', requests);
      }



      // axios
      //   .get(
      //     `https://main-course-1ba2e-default-rtdb.firebaseio.com/requests/${coachId}.json` //firebase need vpn
      //   )
      //   .then(response => {
      //     // then structure : .then((...) => {...})

      //     const responseData = response.data;
      //     console.log(responseData);
      //     // const requests = [];
      //     // for (const key in responseData) {
      //     //   const request = {
      //     //     id: key,
      //     //     coachId: responseData[key].newRequest.coachId,
      //     //     email: responseData[key].newRequest.email,
      //     //     massage: responseData[key].newRequest.massage
      //     //   };
      //     //   requests.push(request);
      //     // }
      //     context.commit('loadRequests', responseData);
      //   });
  },
  getters: {
    requests(state, rootGetters) {
      const coachId = rootGetters.userId;
      return state.requests.filter(requests => requests.coachId === coachId);
    },
    noRequests(_, getters) {
      if (getters.requests && getters.requests.length <= 0) {
        return true;
      }
    }
  }
};
