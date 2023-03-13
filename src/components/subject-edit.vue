<template>
  <div class="subject-template" :style="{ backgroundColor: backgroundColor }">
    <div class="subject-container">
      <div class="subject">{{ subject }}</div>
      <div class="classroom">{{ classroom }}</div>
      <div class="group">{{ group }}</div>
    </div>
    <div class="edit-buttons">
      <button class="edit-subject" @click="$emit('edit')">Edit</button>
      <button class="delete-subject" @click="$emit('delete')">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "subject-edit",
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
    },
    id: {
      type: String,
      default: 'id'
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
  display: flex;
  flex-direction: row;
  width: 240px;
  height: 80px;
}
.subject-container {
  width: 100%;
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
.edit-subject {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
  width: 44px;
  height: 15px;
  background: #35B5EC;
}
.delete-subject {
  margin-top: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
  width: 44px;
  height: 15px;
  background: #EC4035;
}
.edit-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding-right: 10px;
}
</style>