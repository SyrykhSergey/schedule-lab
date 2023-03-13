import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    group_list: [],
    group_number_list: [],

    teachers: [],
    teachers_name_list:[],

    classrooms: [],
    classrooms_number_list: []
  },


  getters: {
    getGroupNumberList(state){
      return state.group_number_list
    },
    getTeachersName(state){
      return state.teachers_name_list
    },
    getClassroomsNumber(state){
      return state.classrooms_number_list
    },
    getGroupList(state){
      return state.group_list
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
    },
    setTeacherList(state, new_list){
      state.teachers = new_list;
      let a = new_list.teachers;
      let b = [];
      let c
      for(let i = 0; i < a.length; i++){
        c = a[i];
        b.push(c.userName)
      }
      state.teachers_name_list = b
    },
    setClassrooms(state, new_list){
      state.classrooms = new_list;
      let a = new_list.classrooms;
      let b = [];
      let c
      for(let i = 0; i < a.length; i++){
        c = a[i];
        b.push(c.classroomName)
      }
      state.classrooms_number_list = b
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
    async fetchTeachers(ctx) {
      let url = 'http://d.wolf.16.fvds.ru/api/teachers'
      axios.get(url)
          .then(response => {
            ctx.commit('setTeacherList', response.data)


          })
          .catch(e => {
            console.log(e)
          })
      /*const result = await fetch(url)
      const posts = await result.json()*/
      console.log("Fetched :", url)
    },
    async fetchClassrooms(ctx){
      let url = 'http://d.wolf.16.fvds.ru/api/classrooms'
      axios.get(url)
          .then(response => {
            ctx.commit('setClassrooms', response.data)


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
