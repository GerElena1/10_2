<template>
    <q-page class="bg-grey-6 column">
        <div class="row q-pa-sm bg-blue-3">
            <q-input @keyup.enter="addTask" filled class="col shadow-8" square bg-color="blue-3" v-model="newTask"
                placeholder="Add task" dense>
                <template v-slot:append>
                    <q-btn @click="addTask" round dense flat icon="add"></q-btn></template>
            </q-input>
        </div>
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
        <div class="no-task absolute-center" v-if="!tasks.length">
            <q-icon name="check" size="150px" color="primary"></q-icon>
            <div class="text-h4 text-primary text-center">No Task!</div>
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            newTask: "",
            tasks: [
                // { title: '', done: false }, { title: 'helo1', done: false }, { title: 'helo2', done: false }
            ]
        }
    },
    methods: {
        deleteTask(index) {
            this.$q.dialog({
                title: 'Confirm',
                message: 'Delete?',
                cancel: true,
                persistent: true
            }).onOk(() => {
                this.tasks.splice(index, 1);
                this.$q.notify('Task delete.')
            })

        },
        addTask() {
            this.tasks.push({
                title: this.newTask,
                done: false
            });
            this.newTask = "";
        }
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