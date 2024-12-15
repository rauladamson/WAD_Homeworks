import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Contact from '../components/Contact.vue'
import Login from '../components/Login.vue'

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'Contact us',
        component: Contact
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router