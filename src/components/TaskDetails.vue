<template>
  <div class="col-md-4 offset-md-4">


    <form @submit.prevent="handleUpdate()" class="card card-body">
      <h1 class="text-center text-wrap h3 mb-4">Detalles de la tarea</h1>
      <input type="text" v-model="currenTask.title" class="mb-3">

      <textarea rows="3" v-model="currenTask.description" class="mb-3"></textarea>

      <button class="btn btn-warning mb-3 fst-italic ">Editar</button>
      <button class="btn btn-danger mb-3 fst-italic " @click="handleDelete()">Eliminar</button>
    </form>

  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { deleteTask, getTask, updateTask } from "@/services/TaskServices";
import { type ITask } from "../interfaces/ITasks";

export default defineComponent({
  data() {
    return {

      currenTask: {} as ITask
    }
  },

  methods: {
    async loadTask(id: string) {
      const res = await getTask(id)
      this.currenTask = res.data
      console.log(res)
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {

        const res = await updateTask(this.$route.params.id, this.currenTask)
        console.log(res)
        this.$router.push({ name: "tasks" })
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {

        deleteTask(this.$route.params.id)
        this.$router.push({ name: "tasks" })
      }
    }
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {

      this.loadTask(this.$route.params.id)
    }
  }
})

</script>