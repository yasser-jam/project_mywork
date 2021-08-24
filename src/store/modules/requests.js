const requests = {
  namespaced: true,
  state() {
    return {
      requests: [],
      storedRequests: []
    };
  },

  getters: {
    getRequests(state) {
      return state.requests;
    }
  },

  mutations: {
    addReq(state, payload) {
      state.requests.push(payload);
    },

    getRequests(state) {
      let newStoredRequests = [];
      fetch(
        'https://coach-finder-f0c8a-default-rtdb.firebaseio.com/requests.json'
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          for (const req in data) {
            newStoredRequests.push(data[req]);
          }
          if (state.storedRequests.length === newStoredRequests.length) {
            return false;
          } else {
            for (
              var i = state.storedRequests.length;
              i < newStoredRequests.length;
              i++
            ) {
              const newReq = {
                msg: newStoredRequests[i].msg,
                email: newStoredRequests[i].email
              };
              this.dispatch('requests/addReqAc', newReq);

            }
            state.storedRequests = newStoredRequests
          }
        });
    }
  },

  actions: {
    addReqAc(context, payload) {
      context.commit('addReq', payload);
    },

    getRequestsAc(context) {
      context.commit('getRequests');
    }
  }
};

export default requests;
