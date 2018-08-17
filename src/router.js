import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'recharge',
    component: () => import('./view/recharge'),
    meta: {
      title: '充值页面'
    }
  },
  {
    name: 'chat',
    component: () => import('./view/chat'),
    meta: {
      title: '客服页面'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
