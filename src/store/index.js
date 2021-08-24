import { createStore } from 'vuex';
import coaches from './modules/coaches.js';
import requests from './modules/requests.js'

const store = createStore({
  modules: {
    coaches,
    requests
  }
});

export default store;
