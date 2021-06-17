import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/unlogged-home')
    },
    {
        path: '/leaseholder',
        name: 'leaseholder',
        component: () => import('../components/posts')
    },
    {
        path: '/leaseholder/:id',
        name: 'detailed-post',
        component: () => import('../components/detailed-post')
    },
    {
        path: '/create-post',
        name: 'create-post',
        component: () => import('../components/create-post')
    },
    {
        path: '/post-succeed',
        name: 'post-succeed',
        component: () => import('../components/post-succeed')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router