<template>
    <div class="app">
        <head-menu :labeltext = "email"/>
        <router-view></router-view>
    </div>

</template>


<script>
import PostFormVue from './components/PostForm.vue'
import PostListVue from '@/components/PostList.vue'
import HeadMenu from './components/Head-menu.vue'
import ChangeSchedule from './components/Change-Schedule.vue'
import axios from 'axios'
import AuthorizationPage from '@/pages/authorization-page.vue'



export default {
    components: {
        PostFormVue, PostListVue,
        HeadMenu,
        ChangeSchedule,
        AuthorizationPage,
     

    },
    computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
    data() {
        return {

            rank: 'Homeless',
            email: 'alexbond@mail.ru',
            authformview: false,
    
        }
    },
    methods: {
        changeemail(newmail){
            this.email = newmail;
            this.rank = 'Student';
            console.log(newmail);
            console.log(555);
        },

       /*  logout: function() {
            this.$store.dispatch("account/logout").then(() => {
            this.$router.push("/authorization");
            });
        } */
   

    }
}

</script>

<style>

* {
margin: 0;
padding: 0;
box-sizing: border-box;

}


body {
    /*padding: 20px;*/
    background-color: #f0fafd;
}


</style>
