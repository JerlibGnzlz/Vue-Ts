<template>
  <div class="container p-5 ">
    <ul class="list-group ">
      <li class="list-group-item list-group-item-action list-group-item-success" style="cursor: progress;"
        v-for="(task, index) in   tasks  " :key="index" @click="$router.push(`/tasks/${task._id}`)">

        {{ index + 1 }}-) {{ task.title }} - {{ task.description }}
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from '../services/TaskServices';
import { type ITask } from '../interfaces/ITasks';
import { Task } from '@/ITasks';


export default defineComponent({
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data
      console.log(this.tasks)
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>