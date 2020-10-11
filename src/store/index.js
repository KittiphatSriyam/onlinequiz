import Vue from 'vue';
import Vuex from 'vuex';
import { signUp } from './signup/index.js';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    signUp,
  },
});
