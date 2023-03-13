<template>
    <div class="main-edit">
        <h3>User:</h3>
        <h5>Role:</h5>

        <div class="role">
            <input type="checkbox" id="checkbox-student" v-model="student_role">
            <label for="checkbox-student">Student</label>

            <input type="checkbox" id="checkbox-teacher" v-model="teacher_role">
            <label for="checkbox-teacher">Teacher</label>

            <input type="checkbox" id="checkbox-admin" v-model="admin_role">
            <label for="checkbox-admin">Admin</label>
        </div>

        <div class="fields">
            <v-text-field
                v-model="name"
                label="User name"
                required

            ></v-text-field>
            <v-text-field
                v-model="name"
                label="Group number"
                required
            ></v-text-field>
            <v-text-field
                v-model="name"
                label="Login"
                required
            ></v-text-field>
            <v-text-field
                v-model="name"
                label="Password"
                required
            ></v-text-field>
        </div>
        <div class="btn">
            <confirm-button>Confirm</confirm-button>
        </div>

    </div>
</template>

<script>
import ConfirmButton from "@/components/UI/confirm-button.vue";

export default {
    components: {ConfirmButton},
    data(){
        return{
            admin_role: false,
            teacher_role: false,
            student_role: true
        }
    }
}
</script>

<style scoped>
.main-edit{
    width: 45vw;
    margin: 45px;
}
.role{
    display: flex;
}
.fields{
    margin-right: 10vw;
}
.btn{
    display: flex;
    justify-content: flex-end;
    margin-right: 10vw;
}
h3,h5{
    color: #24629B;
    padding-bottom: 10px;
}
label{
    margin-right: 15px;
    margin-left: 5px;
    color: #24629B;
}
input{
    color: #24629B;
}
</style>