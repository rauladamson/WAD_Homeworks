import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Contact from '../components/Contact.vue'
import Login from '../components/LogIn.vue'
import Signup from '../components/Signup.vue'
import AddPost from "@/components/AddPost.vue";
import APost from "@/components/APost.vue";

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
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: "/add-post",
        name: "AddPost",
        component: AddPost
    },
    {
        path: "/post/:id",
        name: "APost",
        component: APost,
        props: true
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router