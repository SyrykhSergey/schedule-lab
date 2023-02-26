<template>
  <button
      @click="deleteData()"
      class="delete-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "delete-button",
  methods: {
    deleteData() {
      this.$emit('delete', "delete some data");
    }
  }
};
</script>

<style scoped>

.delete-button{
  width: 79px;
  height: 35px;
  background: #ED6666;
  border-radius: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}

</style>