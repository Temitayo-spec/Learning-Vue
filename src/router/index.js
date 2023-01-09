import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobsDetail from '../views/jobs/JobsDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetail',
    component: JobsDetail,
    props: true,
  },
  // redirection
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // catchAll 404 error
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASEE_URL),
  routes,
});

export default router;
