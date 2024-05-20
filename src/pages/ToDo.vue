<template>
    <q-page class="bg-grey-6 column">
        <h5>ToDo</h5>
        <q-list separator bordered>
            <q-item @click="task.done = !task.done" clickable :class="{ 'done bg-green-5': task.done }"
                v-for="task, index in tasks" :key="task.title" v-ripple>
                <q-item-section avatar>
                    <q-checkbox class="no-pointer-events" v-model="task.done" val="orange" color="orange" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ task.title }}</q-item-label>
                    <q-item-label caption>With description</q-item-label>
                </q-item-section>
                <q-item-section v-if="task.done" side> <q-btn @click.stop="deleteTask(index)" dance flat round
                        color="primary" icon="delete" /></q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            tasks: [{ title: '', done: false }, { title: 'helo1', done: false }, { title: 'helo2', done: false }]
        }
    },
    methods: {
        deleteTask(index) { this.tasks.splice(index, 1) }
    }
}
</script>
<style lang="scss">
.done {
    .q-item__label {
        text-decoration: line-through;
        color: grey;
    }
}
</style>