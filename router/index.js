import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../src/components/Homeview'
import Signup from '../src/components/Signup.vue'

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