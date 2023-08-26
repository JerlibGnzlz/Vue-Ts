
<template>
  <Navbar />
  <div class="container p-5">

    <router-view />
  </div>
</template>

<script lang="ts">


import { defineComponent } from "@vue/runtime-core";
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>