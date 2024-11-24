import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import router from './router';
import Signup from "@/components/Signup.vue";
import HomeView from "@/components/HomeView.vue";


import postsData from './message.json';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
