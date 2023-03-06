<template>
    <div class="main">
        <div class="main-text">
            <h2>Group's schedule</h2>
            <h4>Group:</h4>
            <v-autocomplete
                @update:modelValue="updateValue"
                label="Group"
                :items="['972101', '972102', '972001', '972002', '972201', '972202']"
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

export default {
    components: {ConfirmButton},
    data(){
        return{
            group: '',
        }
    },
    methods:{
        give_request() {
            if(this.group !== ''){// Переписать на отправку запроса к серверу
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
    height: 35vh;
    margin-left: 25vw;
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

</style>