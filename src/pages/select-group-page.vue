<template>
    <div>
        <select-group-form />
    </div>
</template>

<script>
import SelectGroupForm from "@/components/select-group-form.vue";
import {mapActions} from "vuex";

export default {
    components: {SelectGroupForm},
    beforeMount() { //исполняет перед отрисовкой
        this.fetchGroups()
    },
    methods: {
        ...mapActions({
            fetchGroups: 'fetchGroups'
        }),

    }

}
</script>

<style scoped>

</style>