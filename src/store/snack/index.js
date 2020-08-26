const Snack = {
  namespaced: true,
  state: () => ({
    color:'defualt',
    content:'这是个弹窗',
    timeout:2500,
    toggle:false
  }),
  mutations: {
    'SET_DATA'(state,payload){
        Object.assign(state,payload)
    }
  },
  actions:{

  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}

export default Snack