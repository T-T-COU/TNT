import AppUsers from './users.vue';

import AppHome from './home/home.vue';

import AppSignup from './signup/signup.vue';

import AppBilling from './billing/billing.vue';

const userRoutes = [
  {
    path: '/users',
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
        path: '',
        redirect: { name: 'home' }
      }
    ]
  }
];

export default userRoutes;
