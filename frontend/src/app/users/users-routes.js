import AppUsers from './users.vue';

import AppUserList from './user-list/user-list.vue';

import AppHome from './home/home.vue';

import AppSignup from './signup/signup.vue';

import AppBilling from './billing/billing.vue';

const userRoutes = [
  {
    path: '/users',
    component: AppUsers,
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        component: AppUserList
      },
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
        redirect: { name: 'user-list' }
      }
    ]
  }
];

export default userRoutes;
