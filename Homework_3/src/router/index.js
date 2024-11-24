import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Signup from '../components/Signup.vue'

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router