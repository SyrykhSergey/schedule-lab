<template>
    <div class="main-search">
        <div class="second-main">
            <h3>Users</h3>
            <button><h5>+ add new user</h5></button>
            <v-text-field
                v-model="name"
                label="Search user's name"
                required
            ></v-text-field>
            <h5>Search result:</h5>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
        }
    }
}
</script>

<style scoped>
.main-search{
    width: 45vw;
    height: 80vh;
}
.second-main{
    margin: 44px 100px auto 70px;
}
h3, h5{
    color: #24629B;
}
button{
    border: 2px solid #80E4AE;
    border-radius: 5px;
    background: #F4FBF8;
    margin: 10px 0 10px 0;
}
button h5{
    color: #56C6A4;
    padding: 1px 15px 1px 15px;
}
</style>