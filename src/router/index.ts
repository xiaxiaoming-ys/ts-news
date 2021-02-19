import { IHeaderInfo } from '@/typings';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const headerInfors: Array<IHeaderInfo> = [
  {
    name: 'Home',
    title: '新闻头条', // 标题
    left: false,      // 左图表是否显示
    right: true,      // 右图表是否显示
    leftIcon: '',     // 左图表名称
    rightIcon: 'mine',// 右图表名称 iconfont icon- + icon
    leftPath: '',
    rightPath: '/mynews'
  },
  {
    name: 'Detail',
    title: '新闻详情',         // 标题
    left: true,               // 左图表是否显示
    right: true,              // 右图表是否显示
    leftIcon: 'arrow-right',  // 左图表名称
    rightIcon: 'star-o',      // 右图表名称 iconfont icon- + icon
    leftPath: '',
    rightPath: ''
  },
  {
    name: 'MyNews',
    title: '收藏列表',         // 标题
    left: true,               // 左图表是否显示
    right: false,             // 右图表是否显示
    leftIcon: 'arrow-right',  // 左图表名称
    rightIcon: '',            // 右图表名称 iconfont icon- + icon
    leftPath: '',
    rightPath: ''
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:uniquekey/:from',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */'../views/Detail.vue')
  },
  {
    path: '/mynews',
    name: 'MyNews',
    component: () => import(/* webpackChunkName: "MyNews" */'../views/MyNews.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
