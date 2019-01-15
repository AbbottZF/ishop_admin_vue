import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '../views/layout/Layout';

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path:'/goods',
    component:Layout,
    name:'Goods',
    meta:{title:'商城管理',icon:'shopping'},
    children: [
      {
        path: 'index',
        name: 'Goods',
        component: () => import('@/views/goods/index'),
        meta: { title: '商品管理' }
      },
      {
        path: 'add',
        name: 'goods_add',
        hidden:true,
        component: () => import('@/views/goods/add'),
        meta: { title: '新增商品'}
      },
      {
        path: 'goods_type/index',
        name: 'goods_type_index',
        component: () => import('@/views/goods/goods_type/index'),
        meta: { title: '商品分类'}
      },
      {
        path: 'goods_type/add',
        name: 'goods_type_add',
        hidden:true,
        component: () => import('@/views/goods/goods_type/add'),
        meta: { title: '新增分类'}
      },
    ]
  },
  {
    path:'/system',
    component: Layout,
    name:'User',
    meta:{title:'系统设置',icon:'setting'},
    children: [
      {
        path: '/admin_user',
        name: 'User',
        component: () => import('@/views/user/index'),
        meta: { title: '管理员' }
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/role/index'),
        meta: { title: '角色管理' }
      },
      {
        path: '/rules',
        name: 'Rules',
        component: () => import('@/views/rules/index'),
        meta: { title: '路由管理' }
      },
      {
        path: '/rules_add',
        name: 'RulesAdd',
        hidden:true,
        component: () => import('@/views/rules/add'),
        meta: { title: '新增路由' }
      },
      {
        path: 'config',
        name: 'Config',
        component: () => import('@/views/config/index'),
        meta: { title: '系统配置' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/AbbottZF/ishop_admin_vue/#/',
        meta: { title: 'GitHub', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
//异步挂载的路由
//动态需要根据权限加载的路由表 
// export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: Layout,
//     name: '权限测试',
//     meta: { role: ['admin','super_editor'] }, //页面需要的权限
//     children: [
//     { 
//       path: 'index',
//       component: Permission,
//       name: '权限测试页',
//       meta: { role: ['admin','super_editor'] }  //页面需要的权限
//     }]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ];