<template>
    

    <div class="head-menu">
        <div id="logo">Schedule</div>
        <ul class="menu">
                <li><a href="#">Main</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">Teachers</a></li>
                <li><a href="#">Classrooms</a></li>
            <div v-if = "rank == 'Student'">
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Control</a>
                <div class="dropdown-content">
                <a href="#">Users</a>
                <a href="#">Groups</a>
                <a href="#">Classrooms</a>
                <a href="#">Lessons</a>
                </div>
            </li>
            <li style="float:right"><a href="#" v-on:click="AutoFalse" @click="AutoFalse">Sign out</a></li>
            <li style="float:right"><div id="email">{{email}}</div></li>
            <li style="float:right"><div id="scheduler">Scheduler</div></li>
          </div>
          <div v-else>
            <li style="float:right"><a href="#" v-on:click="AutoTrue" @click="AutoTrue"> Sign in</a></li>

          </div>
        </ul>
        
    </div>


  </template>
  
  <script>
  export default {

    data() {
        return {
              //Для примера/тестов, заменить на логику
              rank: '',
              email: 'alexbond@mail.ru'
              

        }
    },



    methods: {
      //Для примера/тестов, заменить на логику
      AutoTrue(){
          this.rank = 'Student'  
          this.$emit('rank', 'Student')
          console.log(this.rank);
        },
        AutoFalse(){
          this.rank = 'Homeless' 
          this.$emit('rank', 'Homeless')
          },

    }
  
  }
  </script>
  
  <style scoped>
  
  .head-menu {
  width: 100%;
  height: 50px;
  min-width:900px; 
  background-color: #b4e2f1;
  position: relative;
  display: flex;
  border-radius: 4px;
  list-style-type: none;
}



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  font-weight: 600;
}

li {
  float: left;
}

li a, .dropbtn, a {
  display: inline-block;
  color: #3b7092;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: white;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 16px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #b4e2f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

#logo {
  line-height:20px;
  font-size:30px;
  width:15%;
  letter-spacing:2px;
  text-shadow:2px 2px 5px;
  color: #3b7092;
  text-align: center;
  padding: 14px 16px;
}

#scheduler1 {
background-color: #f9f9f9;
  font-size:12px;
  color: #3b7092;
  display: inline-block;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
}
#scheduler {

  background-color: #f9f9f9;
  font-size:12px;
  color: #3b7092;
  text-align: center;
  padding: 40% 0 40% 0;
  border-radius: 30px; /* Уголки */
}

#email {
display: inline-block;
  color: #3b7092;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
}
  
  </style>