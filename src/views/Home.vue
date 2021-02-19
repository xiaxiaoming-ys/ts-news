<template>
  <div class="home">
    <nav-bar @setCurType="setCurType" />
    <news-list
      :newsData="newsList"
      :top="82"
    />
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent } from 'vue';
import { Store, useStore } from 'vuex';
import { useNewsList, useNavType } from '../compositions';
import { INewsInfo, NAV_TYPES } from '../typings';

import NavBar from '../components/NavBar/index.vue';
import NewsList from '../components/NewsList/index.vue';


  export default defineComponent({
    name: 'Home',
    components: {
      NavBar,
      NewsList
    },
    setup() {
      const store: Store<any> = useStore();
      // 返回列表数据 ComputedRef计算属性类型
      const newsList: ComputedRef<INewsInfo[]> = useNewsList(store)
      // const newsList = 1;

      // 返回一个更改类型的方法 返回一个 function 给navBar 点击用
      const setCurType: (type: NAV_TYPES) => void = useNavType(store)
      // const setCurType = useNavType(store) // 上下等效 不带函数注解

      return {
        newsList,
        setCurType
      }

    }
  })
</script>

<style lang="scss">

</style>