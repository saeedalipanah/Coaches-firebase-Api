import axios from 'axios';
export default {
  // namespaced : true,
  state() {
    return {
      coaches: [
        // {
        //   id: 'c1',
        //   firstName: 'Maximilian',
        //   lastName: 'Schwarzmüller',
        //   areas: ['frontend', 'backend', 'career'],
        //   description:
        //     "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        //   hourlyRate: 30
        // },
        // {
        //   id: 'c2',
        //   firstName: 'Julie',
        //   lastName: 'Jones',
        //   areas: ['frontend', 'career'],
        //   description:
        //     'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        //   hourlyRate: 30
        // }
      ]
    };
  },
  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    }
  },
  actions: {
     registerCoach(context, payload) {
      //  console.log(context);
      const userId = context.rootGetters.userId;
      const coachData = {
        firstName: payload.first,
        lastName: payload.last,
        areas: payload.areas,
        description: payload.desc,
        hourlyRate: payload.rate
      };
      const token = context.rootGetters.loginToken;
      console.log(token);

      // const response = await fetch(
      //   `https://main-course-1ba2e-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
      //     token,
      //   {
      //     method: 'PUT',
      //     body: JSON.stringify(coachData)
      //   }
      // );

      // const responseData = await response.json();

      // if (!response.ok) {
      //   console.log(responseData);
      // }

      axios
        .put(
          `https://main-course-1ba2e-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token,
          {
            coachData
          }
        )

        //one more way to handle error
        .catch(error => {
          console.log(error);
          this.error = 'Could not save data!';
        });
      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    },

    async loadCoaches(context) {
      // const response = await fetch(
      //   `https://main-course-1ba2e-default-rtdb.firebaseio.com/coaches.json`
      // );
      // const responseData = await response.json();

      // if (!response.ok) {
      //   const error = new Error(responseData.message || 'Failed to fetch!');
      //   throw error;
      // }

      // const coaches = [];

      // for (const key in responseData) {
      //   const coach = {
      //     id: key,
      //     firstName: responseData[key].firstName,
      //     lastName: responseData[key].lastName,
      //     description: responseData[key].description,
      //     hourlyRate: responseData[key].hourlyRate,
      //     areas: responseData[key].areas
      //   };
      //   coaches.push(coach);
      // }
      // context.commit('setCoaches', coaches);

      axios
        .get(
          `https://main-course-1ba2e-default-rtdb.firebaseio.com/coaches.json` //firebase need vpn
        )
        .then(response => {
          // then structure : .then((...) => {...})

          const responseData = response.data;
          console.log(responseData);
          const coaches = [];
          for (const key in responseData) {
            const coach = {
              id: key,
              firstName: responseData[key].coachData.firstName,
              lastName: responseData[key].coachData.lastName,
              areas: responseData[key].coachData.areas,
              description: responseData[key].coachData.description,
              hourlyRate: responseData[key].coachData.hourlyRate
            };
            coaches.push(coach);
          }
          context.commit('setCoaches', coaches);
        });
    }
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      if (state.coaches && state.coaches.length > 0) {
        return true;
      }
    },
    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.loginUserId;
      return coaches.some(coach => coach.id === userId);
    }
  }
};
