import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import FAQPage from '@/pages/FAQ';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/faq', name: 'FAQPage', component: FAQPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router