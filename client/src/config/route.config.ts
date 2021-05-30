import { UserLayout, BasicLayout, BaseRouteLayout } from '@/layouts'

const asyncRoute: any[] = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/dashboard',
    meta: { title: '首页' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { title: '仪表盘', icon: 'CopyOutlined' },
        component: () =>
          import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/dashboard.vue'),
      },
      {
        path: '/flow-chart',
        name: 'flowChart',
        meta: { title: '流程图', icon: 'BranchesOutlined' },
        component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/flow-chart/index.vue'),
      },
      {
        path: '/editor',
        name: 'Editor',
        meta: { title: '编辑器', icon: 'EditOutlined' },
        component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/editor/index.vue'),
      },
      {
        path: '/article',
        name: 'article',
        meta: { title: '文章', icon: 'BoldOutlined', hideInMenu: true },
        component: BaseRouteLayout,
        redirect: '/article/list',
        children: [
          {
            path: '/article/list',
            name: 'articleList',
            hide: false,
            meta: { title: '文章列表' },
            component: () => import(/* webpackChunkName article */ '@/views/article/index.vue'),
          },
          {
            path: '/article/edit',
            name: 'articleEdit',
            meta: { title: '文章列表' },
            component: () => import(/* webpackChunkName article */ '@/views/article/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: BaseRouteLayout,
    redirect: '/404',
    children: [
      {
        path: '/404',
        component: () => import(/* webpackChunkName Exception */ '@/views/exception/404.vue'),
      },
    ],
  },
]

const staticRoute: any[] = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    meta: { hideChildInMenu: true },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/user/login.vue'),
      },
    ],
  },
]

export { asyncRoute, staticRoute }
