import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'products',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router