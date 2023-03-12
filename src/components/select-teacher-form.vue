<template>
    <div class="main">
        <div class="main-text">
            <h2>Teacher schedule</h2>
            <h4>Teacher name:</h4>
            <h5 id="error" class="no_err">Неверное имя преподавателя</h5>
            <v-autocomplete
                @update:modelValue="updateValue"
                label="name"
                :items="this.getTeachersName"
            ></v-autocomplete> <!-- https://vuetifyjs.com/en/components/autocompletes/#state-selector  а строчкой выше
                                     а на 8-й строке нужно получение с сервера-->
        </div>
        <div class="btn">
            <confirm-button @confirm="give_request">Show</confirm-button>
        </div>

    </div>
</template>

<script>

import ConfirmButton from "@/components/UI/confirm-button.vue";
import {mapGetters} from "vuex";

export default {
    components: {ConfirmButton},
    data(){
        return{
            teacher_name: '',
            teachers_name_list: this.getTeachersName
        }
    },
    computed: mapGetters(['getTeachersName']),
    methods:{
        give_request() {// Переписать на отправку запроса к серверу
            let valid = false;
            if(this.teacher_name !== ''){// Переписать на отправку запроса к серверу
                for(let i = 0; i < this.getGroupNumberList.length; i++){
                    if(this.teacher_name === this.getGroupNumberList[i]){
                        valid = true;
                        localStorage.teacher_name = this.teacher_name
                        console.log("give request")
                        window.location.href = '/';//сменить на нужную ссылку
                    }
                }
                if(!valid){
                    console.log("ne give request")
                    document.getElementById('error').style = 'display: flex'
                }


            } else {
                console.log("ne give request")
                document.getElementById('error').style = 'display: flex'
            }
        },
        updateValue(data) {
            this.teacher_name = data;
        }
    }
}
</script>

<style scoped>
.main{
    background: white;
    width: 50vw;
    height: max-content;
    margin-left: 25vw;
    margin-top: 25px;
    padding-bottom: 25px;
    border-radius: 5px;

}
.main-text{
    padding: 30px 0 0 50px;
    margin-right: 50px;
}

h2{
    color: #666363;
    margin-bottom: 20px;
}
h4{
    color: #356080;
    margin-bottom: 10px;
}
.btn{
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
}
.no_err{
    display: none;
    color: #d20200;
    padding-bottom: 2px;
}

</style>