import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import Signup from "@/components/Signup.vue";
import HomeView from "@/components/HomeView.vue";


import postsData from './message.json';


const store = createStore({
    state() {
        return {
            posts: postsData.posts
        };
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.posts.find((p) => p.id === postId);
            if (post) post.likes++;
        },
        resetLikes(state) {
            state.posts.forEach((post) => {
                post.likes = 0;
            });
        }
    }
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/signup", component: Signup },
        { path: "/", component: HomeView }
    ]
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
