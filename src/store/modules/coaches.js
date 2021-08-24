const coaches = {
  namespaced: true,
  state() {
    return {
      isCoach: false,
      coaches: [],
      storedCoaches: []
    };
  },

  getters: {
    getCoaches(state) {
      return state.coaches;
    },

    getCoachesLength(state) {
      return state.coaches.length;
    },

  },

  mutations: {
    setCoaches (state, payload) {
      state.Target = payload;
    },

    signUp(state, payload) {
      state.isCoach = true;
      console.log(payload);
    },

  },

  actions: {
    addCoachAc(context, payload) {
      context.commit('addCoach', payload);
    },

    getCoachesAc(context) {
      context.commit('getCoaches');
    },

    getCoaches(context) {

      fetch(
        'https://coach-finder-f0c8a-default-rtdb.firebaseio.com/coaches.json'
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          console.log('data: ', data);
          const coaches = Object.keys(data).map((key) => data[key]);

          context.commit('setCoaches', coaches)
        
          // for (const id in data) {
          //   newStoredCoaches.push(data[id]);
          // }
        
          // if (newStoredCoaches.length === context.state.storedCoaches.length) {
          //   return false;
          // } else {
          //   for (var i = context.state.storedCoaches.length; i < newStoredCoaches.length; i++) {
          //     const newCoach = {
          //       id: newStoredCoaches[i].id,
          //       FirstName: newStoredCoaches[i].firstName,
          //       LastName: newStoredCoaches[i].lastName,
          //       Props: newStoredCoaches[i].coachProps,
          //       Price: newStoredCoaches[i].priceHour + '$/hour'
          //     };
          //     context.commit('addCoach', newCoach);
          //   }
          //   state.storedCoaches = newStoredCoaches
          // }
        });
    }
  }
};

export default coaches;
