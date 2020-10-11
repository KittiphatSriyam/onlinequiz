const initialState = {
  step: 1,
  field: {
    username: '',
    password: '',
    repassword: '',
    name: '',
    lastName: '',
    tel: '',
    email: '',
    address: '',
    birth: '',
    experience: [
      {
        company: '',
        responsibility: '',
      },
    ],
  },
};
export const signUp = {
  namespaced: true,
  state: initialState,
  mutations: {
    NEXT_STEP(state, form) {
      state.step++;
      state.field = { ...form };
    },
    PREV_STEP(state) {
      state.step--;
    },
  },
  getters: {
    getStep(state) {
      return state.step;
    },
  },
  actions: {
    nextStepButton({ commit }, form) {
      if (this.getters['signUp/getStep'] < 3) {
        commit('NEXT_STEP', form);
      }
    },
    prevStepButton({ commit }) {
      if (this.getters['signUp/getStep'] > 1) {
        commit('PREV_STEP');
      }
    },
  },
};
