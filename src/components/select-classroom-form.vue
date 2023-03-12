<template>
    <div class="main">
        <div class="main-text">
            <h2>Classroom schedule</h2>
            <h4>Classroom:</h4>
            <h5 id="error" class="no_err">Неверный номер аудитории</h5>
            <v-autocomplete
                @update:modelValue="updateValue"
                label=""
                :items="this.getClassroomsNumber"
            ></v-autocomplete>
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
            classroom: '',
            classroomsNumber: this.getClassroomsNumber
        }
    },
    computed: mapGetters(['getClassroomsNumber']),
    methods:{
        give_request() {// Переписать на отправку запроса к серверу
            let valid = false;
            if(this.classroom !== ''){// Переписать на отправку запроса к серверу
                for(let i = 0; i < this.getGroupNumberList.length; i++){
                    if(this.classroom === this.getGroupNumberList[i]){
                        valid = true;
                        localStorage.classroom = this.classroom
                        console.log("give request")
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
            this.classroom = data;
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
    padding: 3vh 50px 0 50px;
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