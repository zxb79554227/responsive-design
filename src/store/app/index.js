const App = {
    namespaced: true,
    state: () => ({
      appname:'币钱包',
      appsubname:'网页版币钱包'
    }),
    mutations: {
      'SET_DATA'(state,payload){
          Object.assign(state,payload)
      }
    },
    actions:{
  
    },
    getters: {

    }
  }
  
  export default App