import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Signup from '../components/Signup.vue'
import Contact from '../components/Contact.vue'

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/contact',
        name: 'Contact us',
        component: Contact}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router