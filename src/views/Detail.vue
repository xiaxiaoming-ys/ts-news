<template>
  <div class="container">
    <iframe :src="url" class="frame"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useStore, Store } from "vuex";
import { useRoute, RouteLocationNormalizedLoaded, Router, useRouter } from "vue-router";
import { INewsInfo } from "../typings"
import { useDetailInfo } from "../compositions"

export default defineComponent ({
  name: 'Detail',
  setup() {
    // route 保存了 路径 参数 路由名等数据
    const route: RouteLocationNormalizedLoaded = useRoute();
    // 跳转方式
    const router: Router = useRouter();
    const store: Store<any> = useStore();
    // 接收新闻详情信息 并绑定到视图
    const detailInfo: INewsInfo | undefined = useDetailInfo(store, route);

    // 如果localStorage 或state里都没有取到新闻数据 则跳回首页
    if (!detailInfo) {
      router.push('/')
      return
    }

    return{
      url: detailInfo.url
      
    }
  }
})
</script>

<style lang="scss">
  .container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    .frame {
      width: 105%;
      height: 100%;
      margin-top: .44rem;
      border: 0;
      overflow-y: auto;
    }
  }
</style>