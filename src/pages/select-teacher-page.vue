<template>
    <div>
        <select-teacher-form />
    </div>
</template>

<script>
import SelectTeacherForm from "@/components/select-teacher-form.vue";
import {mapActions} from "vuex";

export default {
    components: {SelectTeacherForm},
    beforeMount() { //исполняет перед отрисовкой
        this.fetchGroups()
    },
    methods: {
        ...mapActions({
            fetchGroups: 'fetchTeachers'
        }),

    }

}
</script>

<style scoped>

</style>