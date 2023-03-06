<template>
    <div class="main">
        <div class="main-text">
            <h2>Classroom schedule</h2>
            <h4>Education building:</h4>
            <v-autocomplete
                @update:modelValue="updateValue"
                label=""
                :items="['1', '2', '3', '4']"
            ></v-autocomplete> <!-- https://vuetifyjs.com/en/components/autocompletes/#state-selector  а строчкой выше
                                     нужно получение с сервера
                                     тож самое ниже \/ -->
            <h4>Classroom:</h4>
            <v-autocomplete
                @update:modelValue="updateValue"
                label=""
                :items="['111', '112','113','211','212','213']"
            ></v-autocomplete>
        </div>
        <div class="btn">
            <confirm-button @confirm="give_request">Show</confirm-button>
        </div>

    </div>
</template>

<script>

import ConfirmButton from "@/components/UI/confirm-button.vue";

export default {
    components: {ConfirmButton},
    data(){
        return{
            group: '',
        }
    },
    methods:{
        give_request() {// Переписать на отправку запроса к серверу
            if(this.group !== ''){
                console.log("give request")
            } else {
                console.log("ne give request")
            }
        },
        updateValue(data) {
            this.group = data;
        }
    }
}
</script>

<style scoped>
.main{
    background: white;
    width: 50vw;
    height: 50vh;
    margin-left: 25vw;
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

</style>