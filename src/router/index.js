import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },
  {
    path: '/aboutme',
    component: Layout,
    redirect: '/aboutme/introduction',
    name: 'aboutme',
    meta: { title: '关于我', icon: 'el-icon-user' },
    children: [
      {
        path: 'introduction',
        name: 'introduction',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '个人介绍', icon: 'el-icon-postcard' }
      },
      {
        path: 'studyexperience',
        name: 'studyexperience',
        component: () => import('@/views/aboutme/studyexperience/index'),
        meta: { title: '学习经历', icon: 'el-icon-reading' }
      },
      {
        path: 'workexperience',
        name: 'workexperience',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '工作经历', icon: 'el-icon-suitcase' }
      },
      {
        path: 'prize',
        name: 'prize',
        component: () => import('@/views/aboutme/prize/index'),
        meta: { title: '获奖证书', icon: 'el-icon-trophy' }
      },
      {
        path: 'score',
        name: 'score',
        component: () => import('@/views/aboutme/score/index'),
        meta: { title: '考试成绩', icon: 'el-icon-data-line' }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/aboutme/contact/index'),
        meta: { title: '联系方式', icon: 'el-icon-connection' }
      },
      {
        path: 'milestone',
        name: 'milestone',
        component: () => import('@/views/aboutme/milestone/index'),
        meta: { title: '里程碑', icon: 'el-icon-position' }
      }
    ]
  },

  {
    path: '/skill',
    component: Layout,
    redirect: '/skill/TechnologyStack',
    name: 'recreation',
    meta: { title: '专业技能', icon: 'el-icon-cpu' },
    children: [
      {
        path: 'TechnologyStack',
        name: 'TechnologyStack',
        component: () => import('@/views/skill/TechnologyStack/index'),
        meta: { title: '技术栈', icon: 'el-icon-coffee-cup' }
      },
      {
        path: 'ojrecord',
        name: 'ojrecord',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '刷题记录', icon: 'el-icon-knife-fork' }
      },
      {
        path: 'mooc',
        name: 'mooc',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '慕课学习', icon: 'el-icon-edit' }
      },
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '专业书籍', icon: 'el-icon-notebook-1' }
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '个人项目', icon: 'el-icon-bicycle' }
      }
    ]
  },
  {
    path: '/recreation',
    component: Layout,
    redirect: '/recreation/book',
    name: 'recreation',
    meta: { title: '娱乐休闲', icon: 'el-icon-magic-stick' },
    children: [
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '阅读书籍', icon: 'el-icon-notebook-2' }
      },
      {
        path: 'music',
        name: 'music',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '音乐歌单', icon: 'el-icon-headset' }
      },
      {
        path: 'movie',
        name: 'movie',
        component: () => import('@/views/recreation/movie/index'),
        meta: { title: '电影电视剧', icon: 'el-icon-film' }
      },
      {
        path: 'game',
        name: 'game',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '游戏', icon: 'el-icon-coordinate' }
      },
      {
        path: 'footprint',
        name: 'footprint',
        component: () => import('@/views/aboutme/introduction/index'),
        meta: { title: '足迹', icon: 'el-icon-location-information' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://HANXU2018.github.io/',
        meta: { title: 'GitHub', icon: 'link' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
