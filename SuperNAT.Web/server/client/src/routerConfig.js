import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Entities from '@/pages/Entities';
import Repository from '@/pages/Repository';
import Generalization from '@/pages/Generalization';
import Function from '@/pages/Function';
import Analysis from '@/pages/Analysis';
import Setting from '@/pages/Setting';
import NotFound from '@/pages/NotFound';

import UserList from '@/pages/UserList';
import ClientList from '@/pages/ClientList';
import PortMap from '@/pages/PortMap';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: UserLogin,
      },
      {
        path: '/register',
        component: UserRegister,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
      {
        component: NotFound,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Analysis,
      },
      {
        path: '/userlist',
        component: UserList,
      },
      {
        path: '/clientlist',
        component: ClientList,
      },
      {
        path: '/portmap',
        component: PortMap,
      },
      {
        path: '/entities',
        component: Entities,
      },
      {
        path: '/repository',
        component: Repository,
      },
      {
        path: '/repository',
        component: Repository,
      },
      {
        path: '/generalization',
        component: Generalization,
      },
      {
        path: '/function',
        component: Function,
      },
      {
        path: '/analysis',
        component: Analysis,
      },
      {
        path: '/setting',
        component: Setting,
      },
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
