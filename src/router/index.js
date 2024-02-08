import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/PageDashboard.vue'),
        meta: {
            layout: 'Dashboard',
        },
    },
    {
        path: '/develop',
        name: 'develop',
        component: () => import('@/views/PageDashboard.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@/views/PageNotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
