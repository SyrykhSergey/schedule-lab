<template>
  <!--Здесь должен быть навбар-->
  <div class="main-container">
    <dialog-subject v-model:show="dialogVisible" @get-values="handleSubmit"></dialog-subject>
    <div class="card">
      <div class="schedule-content">
        <div class="schedule-information">
          <div class="schedule-for">
            Schedule for teacher {{teacher_name}}
          </div>
          <div class="schedule-date">
            {{start_week}} {{year}} - {{end_week}} {{year}}
          </div>
        </div>
        <div class="schedule-buttons">
          <button class="delete-week" @click="deleteWeek">Delete week</button>
          <button class="clone-week">Clone week</button>
        </div>
        <div class="schedule-buttons">
          <button class="leaf" @click="previous">Previous week</button>
          <button class="leaf" @click="next">Next week</button>
        </div>
      </div>
      <div class="schedule-table">
        <div class="row row-head">
          <div class="schedule-time" style="border-bottom:none; border-right: none;"></div>
          <div class="cell" v-for="(item, index) in items" :key="index" style="flex-direction: row"> <!-- style="flex-direction: row"-->
            <day-edit @delete-day="deleteDayHandler"  :DayOfWeek="item.DayOfWeek" :day="item.day" :month="item.month"/>
          </div>
        </div>

        <div class="row" v-for="(week, i) in weeks" :key="i">
          <div class="schedule-time" :style="{ backgroundColor: week.backgroundColor }">
            <span class="start-time">{{ week.startTime }}</span>
            <span class="end-time">{{ week.endTime }}</span>
          </div>
          <div class="cell" v-for="(day, j) in week.days" :key="j" @click="showSubjectEdit(i, j)">
            <subject-edit
                :subject="day.subject" :classroom="day.classroom" :group="day.group" :background-color="day.backgroundColor"
                ref="subjectEdit" :key="`subjectEdit-${i}-${j}`" v-if="day.showEdit" :id="day.id"
                @edit="editSubject(i, j)"
                @delete="deleteSubject(i, j)"
            />
            <!--<button>+</button>-->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SubjectEdit from "@/components/subject-edit";
import DialogSubject from "@/components/UI/dialog-subject";

export default {
  name: "schedule-page.vue",
  components: {DialogSubject, SubjectEdit},
  mounted() {
      fetch('http://d.wolf.16.fvds.ru/api/schedule/group/' + localStorage.getItem('group_number') +'?weekStart=' + localStorage.getItem('start_week')+'&weekEnd=' + localStorage.getItem('end_week'))
        .then(response => response.json())
        .then(data => {
          console.log(data);

          /*
          for (var prop in obj) {
            console.log("obj." + prop + " = " + obj[prop]);
          }
          * */

          const schedule = data.schedule;

          /*for (let prop in schedule) {
            console.log(prop)
            console.log(schedule[prop]);
            for (let tmp in schedule[prop]) {
              console.log(schedule[prop][tmp]);
            }
          }*/
          this.start_week = localStorage.getItem('start_week');
          this.end_week = localStorage.getItem('end_week');
          const date = this.start_week;
          const parts = date.split('-');
          const month = parts[1];
          const day = parts[2];
          this.updateItems(day, month, schedule);
          console.log(schedule);
          this.setLessons(schedule, Number(day));
        })
        .catch(error => {
          console.error(error);
        });
  },
  data() {
    return {
      items: [
        { DayOfWeek: 'Monday', day: '1', month: '1' },
        { DayOfWeek: 'Tuesday', day: '2', month: '1' },
        { DayOfWeek: 'Wednesday', day: '3', month: '1' },
        { DayOfWeek: 'Thursday', day: '4', month: '1' },
        { DayOfWeek: 'Friday', day: '5', month: '1' },
        { DayOfWeek: 'Saturday', day: '6', month: '1' }
      ],
      weekIndex: 0,
      dayIndex: 0,
      dialogVisible: false,
      teacher_name: '',
      start_week: '',
      end_week: '',
      year: '',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZC53b2xmLjE2LmZ2ZHMucnUvYXBpL2FjY291bnQvbG9naW4iLCJpYXQiOjE2Nzg2NzE4MTcsImV4cCI6MTY3ODY3NTQxNywibmJmIjoxNjc4NjcxODE3LCJqdGkiOiJma2tDSXBtSndDTzRtNERHIiwic3ViIjoiOThhYzEwM2ItMzdmNC00OTYzLTliYzktZDVlNDFjMDgzYWZjIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.W5boAI48bqcdliqyZdSFl76O0Ng9HU4O4cw-GKBxhQ4',
      editing: false,

      weeks: [
        {
          startTime: "8:45",
          endTime: "10:20",
          backgroundColor: "#FFEFEF",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#FFEFEF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFEFEF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFEFEF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFEFEF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFEFEF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFEFEF", showEdit: false, id: 1 },
          ],
        },
        {
          startTime: "10:35",
          endTime: "12:10",
          backgroundColor: "#FFF6E0",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#FFF6E0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFF6E0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFF6E0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFF6E0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFF6E0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFF6E0", showEdit: false, id: 1 },
          ],
        },
        {
          startTime: "12:25",
          endTime: "14:00",
          backgroundColor: "#F7FFE0",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#F7FFE0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F7FFE0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F7FFE0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F7FFE0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F7FFE0", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F7FFE0", showEdit: false, id: 1 },
          ],
        },
        {
          startTime: "14:45",
          endTime: "16:20",
          backgroundColor: "#E0FFED",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#E0FFED", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#E0FFED", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#E0FFED", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#E0FFED", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#E0FFED", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#E0FFED", showEdit: false, id: 1 },
          ],
        },
        {
          startTime: "16:35",
          endTime: "18:10",
          backgroundColor: "#EEF5FF",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#EEF5FF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#EEF5FF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#EEF5FF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#EEF5FF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#EEF5FF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#EEF5FF", showEdit: false, id: 1 },
          ],
        },
        {
          startTime: "18:25",
          endTime: "20:00",
          backgroundColor: "#F8EEFF",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#F8EEFF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F8EEFF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F8EEFF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F8EEFF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F8EEFF", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#F8EEFF", showEdit: false, id: 1 },
          ],
        },
        {
          startTime: "20:15",
          endTime: "21:50",
          backgroundColor: "#FFECFB",
          days: [
            { subject: "", classroom: "", group: "", backgroundColor: "#FFECFB", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFECFB", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFECFB", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFECFB", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFECFB", showEdit: false, id: 1 },
            { subject: "", classroom: "", group: "", backgroundColor: "#FFECFB", showEdit: false, id: 1 },
          ],
        },
      ],
    };
  },
  methods: {

    deleteWeek() {
      fetch('http://d.wolf.16.fvds.ru/api/schedule/group/e9ac4335-5571-4c6e-9c27-e1c30a58d18f?weekStart=' + localStorage.getItem('start_week')+'&weekEnd=' + localStorage.getItem('end_week'),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            method: "DELETE",
          })
          .then((response) => {
            console.log('editing');
            if(response.status === 401){
              console.log("error");
            }
            else {
              console.log("success");

            }
            location.reload();
            return response.json();
          });
    },


    next() {

      const startDate = localStorage.getItem('start_week'); //date
      const endDate = localStorage.getItem('end_week');
      const daysToAdd = 7;
      const date1 = new Date(startDate);
      const date2 = new Date(endDate);
      date1.setDate(date1.getDate() + daysToAdd);
      date2.setDate(date2.getDate() + daysToAdd);
      const newDate1 = date1.toISOString().slice(0, 10);
      const newDate2 = date2.toISOString().slice(0, 10);
      localStorage.setItem('start_week', newDate1);
      localStorage.setItem('end_week', newDate2);
      location.reload();
    },

    previous() {
      const startDate = localStorage.getItem('start_week'); //date
      const endDate = localStorage.getItem('end_week');
      const daysToAdd = -7;
      const date1 = new Date(startDate);
      const date2 = new Date(endDate);
      date1.setDate(date1.getDate() + daysToAdd);
      date2.setDate(date2.getDate() + daysToAdd);
      const newDate1 = date1.toISOString().slice(0, 10);
      const newDate2 = date2.toISOString().slice(0, 10);
      localStorage.setItem('start_week', newDate1);
      localStorage.setItem('end_week', newDate2);
      location.reload();
    },

    setLessons(scheduleArr, day) {   //this.weeks[0].days[0].showEdit
      console.log(scheduleArr);
      console.log(day);
      for (let prop in scheduleArr) {
        let parts = prop.split('-');
        let lessonDay = parts[2];
        console.log(lessonDay, day)
        console.log(scheduleArr[prop]);
        let timeslots = scheduleArr[prop]
        for (let timeslot in timeslots) {
          let lesson = timeslots[timeslot][0];
          console.log(timeslots[timeslot][0])
          const setLesson = this.weeks[Number(timeslot) - 1].days[Number(lessonDay) - Number(day)];
          setLesson.subject = lesson.lesson;
          setLesson.classroom = lesson.classroom;
          setLesson.group = lesson.group;
          setLesson.showEdit = true;
          setLesson.id = lesson.lesson_id;
        }
      }
    },
    updateItems(day, month) { /*сделать массив для название месяцев*/
      let curday = Number(day);
      let curmonth = month;
      if (month === '01' || month ==='03' || month ==='05' || month ==='07' || month ==='08' || month ==='10' || month ==='12') {
        for (let i = 0; i < 6; i++) {
          if (curday > 31) {
            curday = 1;
            curmonth = Number(month) + 1;
            this.items[i].day = curday;
            this.items[i].month = curmonth;
          } else {
            this.items[i].day = curday;
            this.items[i].month = curmonth;
          }
          curday +=1;
        }
      } else if (month ==='04' || month ==='06' || month ==='09' || month ==='11') {
        for (let i = 0; i < 6; i++) {
          if (curday > 30) {
            curday = 1;
            curmonth += 1;
            this.items[i].day = curday;
            this.items[i].month = curmonth;
          } else {
            this.items[i].day = curday;
            this.items[i].month = curmonth;
          }
          curday += 1;
        }
      } else if (month === '28') {
        for (let i = 0; i < 6; i++) {
          if (curday > 28) {
            curday = 1;
            curmonth += 1;
            this.items[i].day = curday;
            this.items[i].month = curmonth;
          } else {
            this.items[i].day = curday;
            this.items[i].month = curmonth;
          }
          curday += 1;
        }
      }
    },
    deleteDayHandler() {
      console.log('delete day from schedule');
    },
    showSubjectEdit(weekIndex, dayIndex) {
      // show the subject-edit for the clicked cell




      if(this.weeks[weekIndex].days[dayIndex].showEdit !== true && this.weeks[weekIndex].days[dayIndex].id === 1) {
        this.dialogVisible = true;
        this.dayIndex = dayIndex;
        this.weekIndex = weekIndex;
      }





      /*const day = this.weeks[weekIndex].days[dayIndex];
      day.subject = 'new s';
      day.group = '01';
      day.showEdit = true;*/
    },
    editSubject(weekIndex, dayIndex) {
      this.editing = true;
      this.dialogVisible = true;
      this.dayIndex = dayIndex;
      this.weekIndex = weekIndex;
      const day = this.weeks[weekIndex].days[dayIndex];
      day.showEdit = true;
    },
    deleteSubject(weekIndex, dayIndex) {
      const day = this.weeks[weekIndex].days[dayIndex];
      day.showEdit = false;
      this.dialogVisible = false;

      fetch("http://d.wolf.16.fvds.ru/api/schedule/" + day.id,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            method: "DELETE"
          })
          .then((response) => {
            if(response.status === 401){
              console.log("error");
            }
            else {
              console.log("success");
              location.reload();
            }
            return response.json();
          });
    },
    handleSubmit(data) {
      console.log(data);
      //console.log(data.selectedValue);  ??
      if(this.editing === true) {
        const day = this.weeks[this.weekIndex].days[this.dayIndex];/*Сделать проверку на пустые поля*/
        /*day.subject = data.value2;
        day.group = data.value3;
        day.classroom = data.value4;
        day.showEdit = true;*/
        console.log(day.id);
        fetch("http://d.wolf.16.fvds.ru/api/schedule/" + day.id,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
              method: "PUT",
              body: JSON.stringify({
                "lesson": data.value1,
                "classroom": data.value2,
                "group":  data.value3,
                "subgroup": data.value4,
                "timeslot": data.value6,
                "date": data.value5
              })
            })
            .then((response) => {
              console.log('editing');
              if(response.status === 401){
                console.log("error");
              }
              else {
                console.log("success");

              }
              //location.reload();
              return response.json();
            });
        this.editing = false;
      } else {
        const day = this.weeks[this.weekIndex].days[this.dayIndex];/*Сделать проверку на пустые поля*/
        day.subject = data.value1;
        day.group = data.value3;
        day.classroom = data.value2;
        day.showEdit = true;

        /*let value5, value6;
        if(data.value5 === '') {
          value5 = this.weekIndex + 1;
        } else {
          value5 = data.value6;
        }
        if(data.value6 === '') {
          if (Number(this.items[this.dayIndex].day) < 10) { //дописать проверку к месяцу
            value6 = '2023-' + this.items[this.dayIndex].month + '-0' + this.items[this.dayIndex].day;
          } else {
            value6 = '2023-' + this.items[this.dayIndex].month + '-' + this.items[this.dayIndex].day;
          }
        } else {
          value6 = data.value6;
        }*/

        console.log(data.value1, data.value2, data.value3, data.value4, data.value6, data.value5);
        fetch("http://d.wolf.16.fvds.ru/api/schedule",
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
              method: "POST",
              body: JSON.stringify({
                "lesson": data.value1,
                "classroom": data.value2,
                "group":  data.value3,
                "subgroup": data.value4,
                "timeslot": data.value6,
                "date": data.value5
              })
            })
            .then((response) => {
              console.log(response);
              location.reload();
              return response.json();
            });
      }
      this.dialogVisible = false;
    },
  }
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
  justify-content: space-between; /*переделать и сделать отступы самому*/
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
.edit-schedule {
  width: 202px;
  height: 38px;
  background: #F4FBF8;
  border: 1px solid #80E4AE;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #56C6A4;
}
.delete-week {
  width: 202px;
  height: 38px;
  background: #EC4035;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}
.clone-week {
  width: 202px;
  height: 38px;
  background: #F4F9FB;
  border: 1px solid #80CCE4;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
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