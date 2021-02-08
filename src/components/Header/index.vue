<template>
  <header class="header">
    <div class="icon-area left">
      <span :class="'iconfont icon-' + leftIcon" @click="goBackpage"></span>
    </div>
    <h1>{{ title }}</h1>
    <div class="icon-area right">
      <span
        v-if="right && name === 'Detail'"
        :class="'iconfont icon-' + rightIcon"
        @click="handleFollowClick"
      ></span>
      <router-link v-else-if="right && name !== 'Detail'" :to="rightPath">
        <span :class="'iconfont icon-' + rightIcon"></span>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from "vue"
import { useRoute, useRouter, RouteLocationNormalizedLoaded, Router } from "vue-router"
import { IHeaderInfo } from '../../typings';
import { useRouteInfo } from '../../compositions';
import axios from '../../lib/http';
// import axios from 'axios';

export default defineComponent({
  name: 'Header',
  setup () {
    const route: RouteLocationNormalizedLoaded = useRoute();
    const router: Router = useRouter();

    // reactive 是 Vue3 中提供的实现数据响应式的方法
    const state: IHeaderInfo = reactive({
      name: 'Home',
      title: '新闻头条', // 标题
      left: false,      // 左图表是否显示
      right: true,      // 右图表是否显示
      leftIcon: '',     // 左图表名称
      rightIcon: 'mine',// 右图表名称 iconfont icon- + icon
      leftPath: '',
      rightPath: '/mynews'
    });

    axios.get('/api/toutiao/index', {
      params: {
        key: '85ab8fe3d5736cbcd4927006b6939a48'
      }
    })
    .then(res => {
      console.log(res)
    })

    // vue3 watch 第一个函数导出需要监听变化的属性 第二个函数修改
    watch( () => {
      return route.name
    }, (routeName) => {
      const routeInfo: IHeaderInfo | undefined = useRouteInfo(routeName as string)
      if (routeInfo === undefined) return;

      Object.assign(state, routeInfo)
    })

    const goBackpage = () => {
      router.go(-1)
    }

    return {
      ...toRefs(state),
      goBackpage
    }
  }
})
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    background-color: #cf5f55;
    color: #fff;

    h1 {
      text-align: center;
      line-height: .44rem;
      font-size: .18rem;
    }

    .icon-area {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: .44rem;
      height: .44rem;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }

      a {
        color: #fff;
      }

      .icon-mine {
        font-size: .25rem;
      }

      .iconfont.icon-arrow-right {
        vertical-align: .025rem;
      }

      .icon-star-o,
      .icon-star-full {
        font-size: .22rem;
        vertical-align: .025rem;
      }

      .icon-star-full {
        color: #F6BF4E;
      }
    }
  }
</style>