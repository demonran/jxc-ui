import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

const routeMap = [
    { path: '/login',
        meta: { title: '登录', noCache: true },
        component: () => import('@/views/login'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/bom'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            }
        ]
    }
]

export default new Router({
    routes: routeMap
})
