import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
const routes=[
    {
        path:'/About',
        name: 'About',
        component:About
    },
    {
        path: '/Home',
        name: 'Home',
        component:Home
    },
]
const router=createRouter({
    routes: routes,
    history: createWebHistory()

})
    export default router