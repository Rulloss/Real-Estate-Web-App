import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './Home.vue'
import HomeContent from './components/HomeContent.vue'
import rooms from './pages/rooms.vue'
import Connect from './pages/connect.vue'
import gallery from './pages/gallery.vue'
import reservation from './pages/reservation.vue'

// Router yapılandırması
const routes = [
  { path: '/', component: HomeContent },
  { path: '/rooms', component: rooms },
  { path: '/gallery', component: gallery },
  { path: '/reservation', component: reservation },
  { path: '/connect', component: Connect },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
