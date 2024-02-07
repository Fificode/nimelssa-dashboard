// store.js
import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
        currentPage: 'Overview'
    }
  },
  mutations: {
    setCurrentPage(state, pageName) {
        state.currentPage = pageName
      }
  },
 
})


