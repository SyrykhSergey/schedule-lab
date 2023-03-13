<template>
    <div class="main">
        <div class="left_column">
            <users-search-form />
        </div>
        <div class="right_column">
            <users-edit-form />
        </div>
    </div>
</template>

<script>
import UsersSearchForm from "@/components/users-search-form.vue";
import UserEditForm from "@/components/users-edit-form.vue";
import UsersEditForm from "@/components/users-edit-form.vue";

export default {
    components: {UsersEditForm, UsersSearchForm}

}
</script>

<style scoped>
.main{
    background: white;
    width: 90vw;
    height: 85vh;
    margin-left: 5vw;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}
.left_column{
    border-right: 1px solid #9fc8d8;
}
</style>