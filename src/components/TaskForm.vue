<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card card-body">
      <h1 class="text-center text-wrap h3 mb-3">Crear tareas</h1>
      <input type="text" placeholder="Escribe la tarea..." v-model="task.title" class="form-control mb-3" />

      <textarea rows="3" placeholder="Describe la tarea..." v-model="task.description"
        class="form-control mb-3"></textarea>

      <button class="btn btn-success mb-3 fst-italic" :disabled="!task.title || !task.description">
        Guardar
      </button>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { type ITask } from "../interfaces/ITasks";
import { createTask } from "../services/TaskServices";

export default defineComponent({
  data() {
    return {
      task: {} as ITask,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res)
      this.$router.push({ name: "tasks" })
    },
  },
});
</script>