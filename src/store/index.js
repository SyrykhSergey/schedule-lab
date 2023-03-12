import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    //groups
    group_list: [],
    group_number_list: []
  },
  getters: {
    getGroupNumberList(state){
      return state.group_number_list
    }
  },
  mutations: {
    setGroupsList(state, new_list){
      state.group_list = new_list
      let a = new_list.groups;
      let b = [];
      let c
      for(let i = 0; i < a.length; i++){
        c = a[i];
        b.push(c.groupNumber)
      }
      state.group_number_list = b
    }

  },
  actions: {
    async fetchGroups(ctx){
      let url = 'http://d.wolf.16.fvds.ru/api/groups'
      axios.get(url)
          .then(response => {
            ctx.commit('setGroupsList', response.data)


          })
          .catch(e => {
            console.log(e)
          })
      /*const result = await fetch(url)
      const posts = await result.json()*/
      console.log("Fetched :", url)
    },
  },
  modules: {
  }
})
