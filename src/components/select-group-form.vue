<template>
    <div class="main">
        <div class="main-text">
            <h2>Group's schedule</h2>
            <h4>Group:</h4>
            <h5 id="error" class="no_err">Неверный номер группы</h5>
            <v-autocomplete
                @update:modelValue="updateValue"
                label="Group"
                :items= "this.getGroupNumberList"
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
            all_group_list: this.getGroupList,
            groups: this.getGroupNumberList,
            group: ''
        }
    },
    computed: mapGetters(['getGroupNumberList', 'getGroupList']),
    methods:{
        give_request() {
            let valid = false;
            if(this.group !== ''){// Переписать на отправку запроса к серверу
                for(let i = 0; i < this.getGroupNumberList.length; i++){
                    if(this.group === this.getGroupNumberList[i]){
                        valid = true;
                        localStorage.group_number = this.getGroupList.groups[i].group_id
                        console.log("give request")
                        window.location.href = '/edit';//сменить на нужную ссылку
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
            this.group = data;
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