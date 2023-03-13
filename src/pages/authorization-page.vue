<template>
  <form @submit.prevent="handleSubmit">
  <div class="main-container">
    <my-dialog v-if = "dialogVisisble == True"> Invalid login or password </my-dialog>
    <div class="card" v-if="visible">
      <div class="title-form">Authorization</div>
      <input-form ref="input1" 
      type="email" 
      label="Login:" 
      placeholder="example" 
      inputId="username"
      v-model="email"
      @input="email = $event.target.value"
      />
      <input-form ref="input2" 
      type="password" 
      label="Password:" 
      placeholder="password123" 
      inputId="email"
      v-model="password"
      @input="password = $event.target.value"
      />
      <confirm-button>Enter</confirm-button>
    </div>
  </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Authorization',
  data() {
    return {
      dialogVisisble: false,
      visible: true,
      email: "",
      password: ""
    }
  },
  methods: {
      async handleSubmit(){
        console.log(this.email)
        const response = await axios.post('http://d.wolf.16.fvds.ru/api/account/login', {
          email: this.email,
          password: this.password,
        })

          
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('newemail', this.email);
        console.log(this.email)
        //this.$emit('changeemail', this.email)
        this.$router.push('/')
 

      },
    created() { //Куда топаем при успешной авторизации
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  width: 100%;
  /*height: 100%;*/
  background: #F0FAFD;
  height: 1000px;
  overflow: auto;
}
.card {
  margin-top: 50px;
  background: #FFFFFF;
  width: 670px;
  height: 400px;
}
.title-form {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #24629B;
  padding-top: 41px;
  padding-left: 43px;
}
.card .input-form {
  padding-top: 22px;
  padding-left: 43px;
}
.card .confirm-button {
  margin-top: 22px;
  margin-left: 440px;
}
</style>