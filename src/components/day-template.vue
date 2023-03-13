<template>
  <span class="day">
              {{ DayOfWeek }}
            </span>
  <span class="week">
              {{ day }} {{month}}
            </span>
</template>

<script>
export default {
  name: "day-template",
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

</style>