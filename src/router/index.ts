import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import App from "@/App.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'about',
        component: () => import('../ui/views/aboutView/AboutView.vue'),
    },
    {
        path: '/labyrinthAlgorithm',
        name: 'labyrinth',
        component: () => import('../ui/views/LabyrinthView.vue'),
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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
