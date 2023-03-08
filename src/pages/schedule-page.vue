<template>
  <!--Здесь должен быть навбар - не должен)-->
  <div class="main-container">
    <div class="card">
      <div class="schedule-content">
        <div class="schedule-information">
          <div class="schedule-for">
            Schedule for group {{group_number}}
          </div>
          <div class="schedule-date">
            {{start_week}} {{year}} - {{end_week}} {{year}}
          </div>
        </div>
        <div class="schedule-buttons">
          <button class="leaf">Previous week</button>
          <button class="leaf">Next week</button>
        </div>
      </div>

      <div class="schedule-table">
        <div class="row row-head">
          <div class="schedule-time" style="border-bottom:none; border-right: none;"></div>
          <div class="cell">
            <span class="day">
              Monday
            </span>
            <span class="week">
              <!--{{day}} {{month}}-->
              day month
            </span>
          </div>
          <div class="cell">
            <span class="day">
              Tuesday
            </span>
            <span class="week">
              {{day}} {{month}}
            </span>
          </div>
          <div class="cell">
            <span class="day">
              Monday
            </span>
            <span class="week">
              {{day}} {{month}}
            </span>
          </div>
          <div class="cell">
            <span class="day">
              Monday
            </span>
            <span class="week">
              {{day}} {{month}}
            </span>
          </div>
          <div class="cell">
            <span class="day">
              Monday
            </span>
            <span class="week">
              {{day}} {{month}}
            </span>
          </div>
          <div class="cell">
            <span class="day">
              Monday
            </span>
            <span class="week">
              {{day}} {{month}}
            </span>
          </div>
        </div>
        <div class="row row-head-bottom">
          <div class="schedule-time">
            <span class="start-time">8:45</span>
            <span class="end-time">10:20</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="schedule-time" style="background: #FFF6E0">
            <span class="start-time">10:35</span>
            <span class="end-time">12:10</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="schedule-time" style="background: #F7FFE0">
            <span class="start-time">12:25</span>
            <span class="end-time">14:00</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="schedule-time" style="background: #E0FFED">
            <span class="start-time">14:45</span>
            <span class="end-time">16:20</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="schedule-time" style="background: #EEF5FF">
            <span class="start-time">16:35</span>
            <span class="end-time">18:10</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="schedule-time" style="background: #F8EEFF">
            <span class="start-time">18:25</span>
            <span class="end-time">20:00</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="schedule-time" style="background: #FFECFB">
            <span class="start-time">20:15</span>
            <span class="end-time">21:50</span>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule-page.vue",
  data() {
    return {
      group_number: '',
      start_week: '',
      end_week: '',
      year: '',
      day: '',
      month: ''
    }
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*height: 100%;*/
  background: #F0FAFD;
  height: 1000px;
}

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

.start-time {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

.end-time {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: #6D6C6C;
}

.schedule-table {
  display: block;
  flex-wrap: nowrap;
  /*min-width: 1713px;*/
  padding-left: 17px;
  padding-right: 40px;

}

.row {
  display: flex;
  flex-wrap: nowrap;
  max-width: 1713px;
  box-sizing: border-box;
  background: #F0F6F8;
  height: 95px;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  /*width: calc(90% / 6);
  /*width: 269px;*/
  box-sizing: border-box;
  border-right: 1px solid #80CCE4;
  border-bottom: 1px solid #80CCE4;
  min-width: 180px;
  width: 269px;
  flex-grow: 1;
  overflow: hidden;
  background: #F0FAFD;
}

.cell:last-child {
  border-right: none;
}

.row-head:first-child .cell {
  border-bottom: none;
}

.row-head .cell {
  flex-direction: column;
  padding-top: 17px;
  padding-left: 14px;
  align-items: start;
  justify-content: start;
}

.row-head{
  height: 70px;
}

.row-head-bottom {
  height: 80px;
}

.schedule-time {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /*border-right: 1px solid #80CCE4;*/
  border-bottom: 1px solid #80CCE4;
  overflow: hidden;
  width: 98px;
  flex-shrink: 0;
  background: #FFFFFF;
  flex-direction: column;
}


.card {
  background: #FFFFFF;
  width: 1770px;
  height: 900px;
  overflow: auto;
}
.schedule-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 110px;
}
.schedule-information {
  padding-top: 23px;
  padding-left: 25px;
}
.schedule-buttons {
  padding-top: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.schedule-buttons button {
  margin-right: 12px;
}
.schedule-for {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #24629B;
}
.schedule-date {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #66717B;
}
.leaf {
  flex: 1;
  width: 129px;
  height: 30px;
  background: #F4F9FB;
  border: 1px solid #80CCE4;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #569EC6;
}


::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb:vertical{
  background-color: #569EC6;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-track:vertical{
  background-color: #80CCE4;
}
</style>