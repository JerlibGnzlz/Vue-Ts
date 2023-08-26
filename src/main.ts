import { router } from './routes/index'
import { createApp } from 'vue'
import App from './App.vue'


import "bootswatch/dist/materia/bootstrap.min.css"


createApp(App)
  .use(router)
  .mount('#app')
