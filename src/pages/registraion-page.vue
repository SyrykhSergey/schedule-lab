<template>
  <nav-bar></nav-bar>
  <div class="main-container">
    <my-dialog v-model:show="dialogVisisble"> Пароли не совпадают </my-dialog>
    <div class="card" v-if="visible">
      <div class="title-form">Registration</div>
      <input-form ref="input1" type="text" label="Username:" placeholder="example" inputId="username"/>
      <input-form ref="input2" type="email" label="Email:" placeholder="example@mail.com" inputId="email"/>
      <input-form ref="input3" type="password" label="Password:" placeholder="password123" inputId="password1"/>
      <input-form ref="input4" type="password" label="Retype password:" placeholder="password123" inputId="password2"/>
      <confirm-button @click="myFunction"/>
    </div>
    <div class="card2" v-else>
      <div class="title-form">Registration</div>
      <input-form ref="input5" type="text" label="Group:" placeholder="group number" inputId="group-number" width="870px"/>
      <div style="flex-direction: row;">
        <span class="hint">If you don’t have a group, keep it empty</span>
        <confirm-button @click="confirmRegistration"/>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      dialogVisisble: false,
      visible: true
    }
  },
  methods: {
    myFunction() {
      this.visible = false;
      /*const input1Value = this.$refs.input1.inputValue;
      const input2Value = this.$refs.input2.inputValue;
      const input3Value = this.$refs.input3.inputValue;
      const input4Value = this.$refs.input4.inputValue;*/
      /*this.dialogVisisble = true;если пароли не совпадают*/
    },
    confirmRegistration() {
      /*отправить запрос на сервер с данными пользователя*/
    }
  }
}
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
  height: 607px;
}
.card2 {
  margin-top: 50px;
  width: 970px;
  height: 274px;
  background: #FFFFFF;
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
.card2 .input-form {
  padding-top: 22px;
  padding-left: 50px;
}
.card2 .confirm-button {
  margin-bottom: 50px;
  margin-left: 742px;
}
.hint {
  margin-left: 50px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ADADAD;
}
</style>