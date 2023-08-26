<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue-Ts</router-link>
      <div>
        <ul class="nav flex-column">
          <li class="nav-item ">
            <router-link class="navbar-item text-black fw-bold text-decoration-none" to="/">Tareas</router-link>
          </li>
          <li class="nav-item ">
            <router-link class="navbar-item text-black fw-bold text-decoration-none" to="/tasks/new">Crear
              Tareas</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import router from '../../api/routes/index';



export default defineComponent({
  name: "Navbar",
})


</script>