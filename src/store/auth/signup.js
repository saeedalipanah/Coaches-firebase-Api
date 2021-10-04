// import axios from 'axios';
export default {
  // namespaced : true,
  state() {
    return {
      userId: null,
      token : null,
      tokenExpration : null
    };
  },
  mutations: {
    signup(state, payload) {
      //7-we get a payload from signup action and save it in vuex store states 
      //that means we save data to vuex store(states)
      state.token = payload.token,
      //(state.token :null) = responseData.token
      state.userId = payload.userId,
      //(state.userId :null) = responseData.userId
      state.tokenExpration = payload.tokenExpration
    }
  },
  actions: {
    async signup(context, payload) {
      //3-we send singupData as payload to this action from singup component
      //4-and now we want to send input data to server side and data base
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkSyTLNQi2VQJTA7gP4atWG6sl_JSxZVw',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            //new email : signupData.email(payload is a signupData in signup component)
            password: payload.password,
            //new password : signupData.password(payload is a signupData in signup component)
            returnSecureToken: true
          })
        });
        //5-we send data to server and now we want to see whats the server response
        const responseData = await response.json()
        //error handel
        if(!response.ok){
          console.log(responseData);
          const error = new Error(responseData.message || 'failed to authenticate,try again later')
          throw error;
        }
        //finally we have response from server
        console.log(responseData);
        //6-now we want to save information recieved from server to vuex mutations
        //we connect this action to signup mutation and send a object as a payload
        context.commit('signup',{
          userId : responseData.localId,
          //new userId : userId that excist in response of server
          token:responseData.idToken,
          //new token : token that excist in response of server
          tokenExpration : responseData.expiresIn
          //new tokenExpration : tokenExpration that excist in response of server
          
        })
        
    } //end of signup
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state){
      return state.token
    }
  } //end of getters
};
