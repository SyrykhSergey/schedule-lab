<template>
  <div class="subject-template" :style="{ backgroundColor: backgroundColor }">
    <div class="subject-container">
      <div class="subject">{{ subject }}</div>
      <div class="classroom">{{ classroom }}</div>
      <div class="group">{{ group }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subject-template",
  props: {
    subject: {
      type: String,
      default: "Test subject"
    },
    classroom: {
      type: String,
      default: "Test classroom"
    },
    group: {
      type: String,
      default: "Test group"
    },
    backgroundColor: {
      type: String,
      default: '#FFEFEF'
    }
  },
  methods: {
    updateSubject(value) {
      this.$emit('update:subject', value);
    }

  }
}
</script>

<style scoped>
.subject-template {
  width: 220px;
  height: 60px;
}
.subject-container {
  padding-top: 5px;
  padding-left: 9px;
}
.subject {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  letter-spacing: 0em;
  color: #535353;
}
.classroom {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #535353;
}
.group {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
  letter-spacing: 0em;
  color: #535353;
}
</style>