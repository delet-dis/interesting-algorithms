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
        component: () => import('../ui/views/labyrinthView/LabyrinthView.vue'),
    },
    {
        path: '/clusteringAlgorithm',
        name: 'clustering',
        component: () => import('../ui/views/clusteringView/ClusteringView.vue'),
    },
    {
        path: '/geneticAlgorithm',
        name: 'genetic',
        component: () => import('../ui/views/geneticView/GeneticView.vue'),
    },
    {
        path: '/antAlgorithm',
        name: 'ant',
        component: () => import('../ui/views/antView/AntView.vue'),
    },
    {
        path: '/treeAlgorithm',
        name: 'test',
        component: App
    },
    {
        path: '/neuralAlgorithm',
        name: 'test1',
        component: App
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
