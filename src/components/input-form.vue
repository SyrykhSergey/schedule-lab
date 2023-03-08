<template>
  <div class="input-form">
    <label :for="inputId">{{ label }}</label>
    <input :id="inputId" :type="type" :placeholder="placeholder" v-model="inputValue" :style="{ width: width }">
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "Input:"
    },
    placeholder: {
      type: String,
      default: "Введите текст"
    },
    inputId: {
      type: String,
      default: "my-input"
    },
    width: {
      type: String,
      default: "575px"
    }
  },
  data() {
    return {
      inputValue: ''
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 7px;
  /*width: 575px;*/
  width: 100%;
  height: 50px;
  background: #F4FCFF;
  border: 1px solid #9FC8D8;
  padding: 10px;
}
input::placeholder {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B6C1C9;
}
label {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #24629B;
  display: block;
}
</style>
