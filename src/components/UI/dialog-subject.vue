<template>
  <div class="dialog" v-if="show" @click.stop>
    <div @click.stop class="dialog-content">
      <div class="title">Edit lessons</div>
      <!--<input-form v-model="values.value1" inputId="1" label="Teacher:" type="text" placeholder="Teacher_name"></input-form>-->
      <select v-model="values.value1" class="choosing">
        <option value="">Выберите предмет</option>
        <option v-for="item in items" :key="item.id" :value="item.value">{{ item.name }}</option>
      </select>
      <!--<input-form v-model="values.value2" inputId="2" label="Subject:" type="text" placeholder="Subject_name"></input-form> classroom-->
      <select v-model="values.value2" class="choosing">
        <option value="">Выберите аудиторию</option>
        <option v-for="classroom in classroomsArr" :key="classroom.id" :value="classroom.value">{{ classroom.name }}</option>
      </select>
      <!--<input-form v-model="values.value3" inputId="3" label="Group:" type="text" placeholder="Group_number"></input-form>-->
      <select v-model="values.value3" class="choosing">
        <option value="">Выберите группу</option>
        <option v-for="group in groupArr" :key="group.id" :value="group.value">{{ group.name }}</option>
      </select>
      <input-form v-model="values.value4" inputId="4" label="Subgroup:" type="text" placeholder="Subgroup_number"></input-form>
      <input-form v-model="values.value5" inputId="5" label="Date:" type="date"></input-form>
      <!--<input-form v-model="values.value6" inputId="6" label="Timeslot:" type="text" placeholder="Timeslot_option"></input-form>-->
      <select v-model="values.value6" class="choosing">
        <option value="">Выберите timeslot</option>
        <option v-for="timeslot in timeslotArr" :key="timeslot.id" :value="timeslot.value">{{ timeslot.name }}</option>
      </select>
      <confirm-button @click="hideDialog">Confirm</confirm-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "dialog-subject",
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      values: {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
      },
      items: [], // массив с элементами, полученными из запроса
      classroomsArr: [],
      groupArr: [],
      timeslotArr: []
    }
  },
  mounted() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZC53b2xmLjE2LmZ2ZHMucnUvYXBpL2FjY291bnQvbG9naW4iLCJpYXQiOjE2Nzg2NzE4MTcsImV4cCI6MTY3ODY3NTQxNywibmJmIjoxNjc4NjcxODE3LCJqdGkiOiJma2tDSXBtSndDTzRtNERHIiwic3ViIjoiOThhYzEwM2ItMzdmNC00OTYzLTliYzktZDVlNDFjMDgzYWZjIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.W5boAI48bqcdliqyZdSFl76O0Ng9HU4O4cw-GKBxhQ4";

    // выполнение запроса к серверу и получение элементов
    fetch('http://d.wolf.16.fvds.ru/api/lessons',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: "GET",
        })
        .then((response) => {
          console.log(response.status);
          if(response.status !== 200){
            this.$router.push('/');
            console.log("unauthorized");
          }
          else {
            return response.json();
          }
        })
        .then(data => {
          console.log(data);
          let pageCount = data.pageInfo.pageCount;
          data.templates.forEach((lesson) => {
            //console.log(lesson.template_id);
            let item = { id: lesson.template_id, value: lesson.template_id, name: lesson.subject + ' - ' + lesson.teacher + ' - ' + lesson.type_of_lesson};
            this.items.push(item);
          });
          console.log(pageCount);
          if(pageCount > 1) {
            for(let i = 2; i <= pageCount; i++) {
              fetch('http://d.wolf.16.fvds.ru/api/lessons?page=' + i.toString(),
                  {
                    headers:
                        {
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + token
                        }
                  })
                  .then((response) => {
                    console.log(response.status);
                    if(response.status === 401){
                      console.log("unauthorized");
                    }
                    else {
                      return response.json();
                    }
                  })
                  .then((json) => {
                    json.templates.forEach((lesson) => {
                      //console.log(lesson.template_id);
                      let item = { id: lesson.template_id, value: lesson.template_id, name: lesson.subject + ' - ' + lesson.teacher + ' - ' + lesson.type_of_lesson};
                      this.items.push(item);
                    });
                  });
            }
          }
          /*список аудиторий*/
          fetch('http://d.wolf.16.fvds.ru/api/classrooms',
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token
                },
                method: "GET",
              })
              .then(response => response.json())
              .then(data => {
                console.log(data.classrooms);
                let classroomCount = data.pageInfo.pageCount;
                data.classrooms.forEach((classroom) => {
                  //console.log(classroom.classroom_id);
                  let item = { id: classroom.classroom_id, value: classroom.classroom_id, name: classroom.classroomName};
                  this.classroomsArr.push(item);
                });
                console.log(classroomCount);
                if(classroomCount > 1) {
                  for(let i = 2; i <= classroomCount; i++) {
                    fetch('http://d.wolf.16.fvds.ru/api/classrooms?page=' + i.toString(),
                        {
                          headers:
                              {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                              }
                        })
                        .then((response) => {
                          console.log(response.status);
                          if(response.status === 401){
                            console.log("unauthorized");
                          }
                          else {
                            return response.json();
                          }
                        })
                        .then((json) => {
                          json.classrooms.forEach((classroom) => {
                            //console.log(classroom.classroom_id);
                            let item = { id: classroom.classroom_id, value: classroom.classroom_id, name: classroom.classroomName};
                            this.classroomsArr.push(item);
                          });
                        });
                  }
                }

                /*Список групп*/
                fetch('http://d.wolf.16.fvds.ru/api/groups',
                    {
                      headers:
                          {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                          }
                    })
                    .then((response) => {
                      console.log(response.status);
                      if(response.status === 401){
                        console.log("unauthorized");
                      }
                      else {
                        return response.json();
                      }
                    })
                    .then((json) => {
                      json.groups.forEach((group) => {
                        let item = { id: group.group_id, value: group.group_id, name: group.groupNumber};
                        this.groupArr.push(item);
                      });

                      /*Список таймслотов*/


                      fetch('http://d.wolf.16.fvds.ru/api/timeslots',
                          {
                            headers:
                                {
                                  'Content-Type': 'application/json',
                                  'Authorization': 'Bearer ' + token
                                }
                          })
                          .then((response) => {
                            console.log(response.status);
                            if(response.status === 401){
                              console.log("unauthorized");
                            }
                            else {
                              return response.json();
                            }
                          })
                          .then((json) => {
                            json.forEach((timeslot) => {
                              let item = { id: timeslot.timeslot_id, value: timeslot.timeslot_id, name: timeslot.timeslotNumber};
                              this.timeslotArr.push(item);
                            });
                          });
                    })
                    .catch(error => {
                      console.error(error);
                    });
              })
              .catch(error => {
                console.error(error);
              });
        })
        .catch(error => {
          console.error(error);
        });
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
      this.$emit('get-values', this.values);
      /*this.values = {
        value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
      }*/
    }
  }
}
</script>

<style scoped>

.choosing {
  display: block;
  width: 575px;
  height: 50px;
  background: #F4FCFF;
  border: 1px solid #9FC8D8;
  padding: 10px;
}

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

.dialog-content > * {
  margin-top: 15px;
}
</style>