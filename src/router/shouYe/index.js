const main = () => import ( /* webpackChunkName: "main" */ '@/views/Home.vue') ;
export default [
    {
        path: '/',
        name: 'home',
        component: () => import ( /* webpackChunkName: "main" */ '@/views/Home.vue'),
        children:[
            {
                path: '/',
                component: () => import ( /* webpackChunkName: "shouYe" */ '@/views/shouYe/shouYe.vue')
            }
        ]
    }
]