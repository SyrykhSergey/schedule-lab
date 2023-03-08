<template>
    

    <div class="change-schedule">
        <h4 style="color: grey">Choose a schedule!</h4>
        <a href="/groups"><div class="confirm-button">Groups</div></a>
        <a href="/teacher"><div class="confirm-button">Teachers</div></a>
        <a href="/classroom"><div class="confirm-button">Classrooms</div></a>
        
    </div>


  </template>
  
  <script>
  export default {

    data() {
        return {

              rank: '1',
              email: 'alexbond@mail.ru'

        }
    },



    methods: {

    }
  
  }
  </script>
  
  <style scoped>
  
.change-schedule 
    {
    margin:50px;
    margin-left: auto;
    margin-right: auto;
    min-width:500px; 
    background-color: white;
    position: relative;
    border-radius: 4px;
    list-style-type: none;

    width: 40%; /* Ширина  колонки */
    padding: 7px; /* Отступы вокруг текста */
    font-size: 20px

    }
a{
    text-decoration: none;
}

    .confirm-button{
  width: 90%;
  height: 10%;
  background-color: #95EAB2;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #407D9F;
  margin:20px;
    padding:4px;
    text-align: center;
    margin-left: auto;
  margin-right: auto;
}


  </style>