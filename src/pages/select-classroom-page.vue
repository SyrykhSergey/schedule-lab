<template>
    <div>
        <select-classroom-form />
    </div>
</template>

<script>
import SelectClassroomForm from "@/components/select-classroom-form.vue";
import {mapActions} from "vuex";

export default {
    components: {SelectClassroomForm},
    beforeMount() { //исполняет перед отрисовкой
        this.fetchClassrooms()
    },
    methods: {
        ...mapActions({
            fetchClassrooms: 'fetchClassrooms'
        }),

    }

}
</script>

<style scoped>

</style>