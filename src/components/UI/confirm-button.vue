<template>
  <button
      @click="confirmData()"
      class="confirm-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "confirm-button",
  methods: {
    confirmData() {
      this.$emit('confirm', "confirm some data");
    }
  }
};
</script>

<style scoped>

.confirm-button{
  width: 178px;
  height: 50px;
  background-color: #95EAB2;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #407D9F;
}

</style>