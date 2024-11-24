import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Signup from "@/components/Signup.vue";
import HomeView from "@/components/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/signup', component: Signup },
        { path: '/', component: HomeView },
    ]
});

const app =createApp(App)
app.use(router)
app.mount('#app')
