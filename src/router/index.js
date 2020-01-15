import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import FaqPage from '@/pages/Faq';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/faq', name: 'FaqPage', component: FaqPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router