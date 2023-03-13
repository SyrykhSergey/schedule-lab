<template>
  <div style="display: flex; flex-direction: column;">
  <span class="day">
    {{ DayOfWeek }}
  </span>
    <span class="week">
    {{ day }} {{month}}
  </span>
  </div>
  <button @click="deleteDay" class="delete-day">Delete day</button>
</template>

<script>
export default {
  name: "day-edit",
  props: {
    DayOfWeek: {
      type: String,
      default: "Monday",
    },
    day: {
      type: String,
      default: "1"
    },
    month: {
      type: String,
      default: "1"
    }
  },
  methods: {
    deleteDay() {
      this.$emit("delete-day");
    }
  }
}
</script>

<style scoped>
.day {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #366986;
}
.week {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #605F5F;
}
.delete-day {
  margin-left: 30px;
  margin-top: 10px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  width: 68px;
  height: 20px;

  background: #EC4035;
  color: #FFFFFF;

}
</style>