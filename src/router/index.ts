import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import App from "@/App.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: App,
    },
    {
        path: '/labyrinthAlgorithm',
        name: 'test',
        component: App,
    },
    {
        path: '/clusteringAlgorithm',
        name: 'test',
        component: App
    },
    {
        path: '/geneticAlgorithm',
        name: 'test',
        component: App
    },
    {
        path: '/antAlgorithm',
        name: 'test',
        component: App
    },
    {
        path: '/treeAlgorithm',
        name: 'test',
        component: App
    },
    {
        path: '/neuralAlgorithm',
        name: 'test',
        component: App
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
