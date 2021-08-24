import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachContact from './pages/coaches/CoachContact.vue';
import CoachRegestration from './pages/coaches/CoachRegestration.vue';
import RequestsRecived from './pages/requests/RequestsRecived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:coachId',
      component: CoachDetails,
      // children: [{ path: '/contact', component: CoachContact }]
    },
    {path: '/coaches/:coachId/contact', component: CoachContact},
    { path: '/requests', component: RequestsRecived },
    { path: '/regestre', component: CoachRegestration },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
