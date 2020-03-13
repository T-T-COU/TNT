import AppUsers from './users.vue';

import AppHome from './home/home.vue';

import AppSignup from './signup/signup.vue';

import AppBilling from './billing/billing.vue';

import AppViewer from './viewer/viewer.vue';

const userRoutes = [
  {
    path: '/',
    component: AppUsers,
    children: [
      {
        path: 'home',
        name: 'home',
        component: AppHome
      },
      {
        path: 'signup',
        name: 'signup',
        component: AppSignup
      },
      {
        path: 'billing',
        name: 'billing',
        component: AppBilling
      },
      {
        path: 'viewer',
        name: 'viewer',
        component: AppViewer
      },
      {
        path: '',
        redirect: { name: 'home' }
      }
    ]
  }
];

export default userRoutes;
