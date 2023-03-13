<template>
  <div class="main-container">
    <my-dialog v-if = "dialogVisisble == True"> Invalid login or password </my-dialog>
    <div class="card" v-if="visible">
      <div class="title-form">Authorization</div>
      <input-form ref="input1" v-model="user.username" type="email" label="Login:" placeholder="example" inputId="username"/>
      <input-form ref="input2" v-model="user.password" type="password" label="Password:" placeholder="password123" inputId="email"/>
      <confirm-button @click="Authorize">Enter</confirm-button>
    </div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  data() {
    return {
      dialogVisisble: false,
      visible: true,
      user: new User('', ''),
    }
  },
  methods: {
    Authorize() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
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