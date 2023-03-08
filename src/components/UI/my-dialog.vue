<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.5);
}
.dialog-content {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #24629B;
  padding: 20px;
  min-height: 200px;
  min-width: 400px;
  margin: auto;
  background: #FFFFFF;
  border: 2px solid #F0FAFD;
  border-radius: 15px 15px 15px 15px;
}
</style>