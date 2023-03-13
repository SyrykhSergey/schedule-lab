<template>
    <div class="main">
        <div class="forms">
            <h1>Profile</h1>
            <v-text-field
                v-model="name"
                :rules="this.rules"
                label="ФИО"
                required
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="this.rules"
                label="email"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="this.rules"
                label="password"
                required
            ></v-text-field>
            <div class="button">
                <confirm-button @confirm="submit">Confirm</confirm-button>
            </div>

        </div>
    </div>
</template>

<script>
import ConfirmButton from "@/components/UI/confirm-button.vue";
import {mapActions} from "vuex";

export default {
    components: {ConfirmButton},
    data(){
        return{
            name: '',
            email: '',//изначальные данные должен брать из локал стора
            password: '',//Реактивность поддерживается

            rules: [
                value => {
                    if (value.length > 0) return true

                    return 'Too short'
                },
            ],
        }
    },
    methods:{
        ...mapActions(['sendProfileEdit']),
        submit(){
            this.sendProfileEdit([this.name, this.email, this.password]);
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
    border-radius: 5px;
}
.forms{
    margin: 25px;
    padding-top: 25px;
    padding-bottom: 25px;
}
.button{
    display: flex;
    justify-content: flex-end;
}
h1{
    margin-bottom: 45px;
    color: #605F5F;
}
</style>