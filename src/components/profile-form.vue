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
                label="First name"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="this.rules"
                label="First name"
                required
            ></v-text-field>
            <div class="button">
                <confirm-button @confirm="">Confirm</confirm-button>
            </div>

        </div>
    </div>
</template>

<script>
import ConfirmButton from "@/components/UI/confirm-button.vue";

export default {
    components: {ConfirmButton},
    data(){
        return{
            name: '',
            email: '',
            password: '',
            rules: [
                value => {
                    if (value.length > 6) return true

                    return 'You must enter more then 6 symbols'
                },
            ],
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